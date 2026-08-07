import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../..");
const defaultManifestPath = path.resolve(rootDir, ".release/published-packages.json");

type PublishedPackage = {
  name: string;
  version: string;
  manifestPath: string;
  changelogPath: string;
};

type PackageManifest = {
  peerDependencies?: Record<string, string>;
  dependencies?: Record<string, string>;
};

const frameworkPeerPrefixes = ["@angular/", "react"];

function readPublishedPackages(manifestPath: string): PublishedPackage[] {
  if (!fs.existsSync(manifestPath)) {
    console.log(`No published manifest found at ${manifestPath}. Skipping GitHub releases.`);
    return [];
  }

  const content = fs.readFileSync(manifestPath, "utf8");
  const parsed = JSON.parse(content) as PublishedPackage[];

  if (!Array.isArray(parsed) || parsed.length === 0) {
    console.log("No packages were published in this run. Skipping GitHub releases.");
    return [];
  }

  return parsed;
}

function readPackageManifest(manifestPath: string): PackageManifest {
  return JSON.parse(fs.readFileSync(manifestPath, "utf8")) as PackageManifest;
}

function formatRequirements(manifest: PackageManifest): string[] {
  const requirements: string[] = [];
  const coreRange =
    manifest.peerDependencies?.["@design-system-rte/core"] ?? manifest.dependencies?.["@design-system-rte/core"];

  if (coreRange) {
    requirements.push(`- @design-system-rte/core ${coreRange}`);
  }

  const peerDependencies = manifest.peerDependencies ?? {};
  Object.entries(peerDependencies).forEach(([dependencyName, dependencyRange]) => {
    if (dependencyName === "@design-system-rte/core") {
      return;
    }

    const isFrameworkPeer = frameworkPeerPrefixes.some((prefix) => dependencyName.startsWith(prefix));
    if (!isFrameworkPeer) {
      return;
    }

    requirements.push(`- ${dependencyName} ${dependencyRange}`);
  });

  return requirements;
}

function extractChangelogSection(changelogPath: string, version: string): string {
  const changelogContent = fs.readFileSync(changelogPath, "utf8");
  const versionHeader = `## ${version}`;
  const versionStartIndex = changelogContent.indexOf(versionHeader);

  if (versionStartIndex === -1) {
    return `_No changelog entry found for version ${version}._`;
  }

  const nextVersionMatch = changelogContent.slice(versionStartIndex + versionHeader.length).match(/\n## /);
  const sectionEndIndex =
    nextVersionMatch?.index === undefined
      ? changelogContent.length
      : versionStartIndex + versionHeader.length + nextVersionMatch.index;

  return changelogContent.slice(versionStartIndex + versionHeader.length, sectionEndIndex).trim();
}

function buildReleaseNotes(publishedPackage: PublishedPackage): string {
  const manifest = readPackageManifest(publishedPackage.manifestPath);
  const requirements = formatRequirements(manifest);
  const changelogSection = extractChangelogSection(publishedPackage.changelogPath, publishedPackage.version);
  const lines = [`## ${publishedPackage.name} ${publishedPackage.version}`, ""];

  if (requirements.length > 0) {
    lines.push("### Requirements", ...requirements, "");
  }

  lines.push("### Changes", changelogSection);
  return lines.join("\n");
}

function releaseExists(tag: string): boolean {
  try {
    execSync(`gh release view "${tag}"`, { stdio: "ignore", cwd: rootDir });
    return true;
  } catch {
    return false;
  }
}

function createGitHubRelease(publishedPackage: PublishedPackage): void {
  const tag = `${publishedPackage.name}@${publishedPackage.version}`;
  const title = `${publishedPackage.name} ${publishedPackage.version}`;

  if (releaseExists(tag)) {
    console.log(`Skipping GitHub release for ${tag} - release already exists.`);
    return;
  }

  const releaseNotes = buildReleaseNotes(publishedPackage);
  console.log(`\nCreating GitHub release for ${tag}...`);

  execSync(`gh release create "${tag}" --title "${title}" --notes-file -`, {
    cwd: rootDir,
    input: releaseNotes,
    stdio: ["pipe", "inherit", "inherit"],
  });

  console.log(`GitHub release created for ${tag}.`);
}

function createGitHubReleases(): void {
  const manifestPath = process.argv[2] ? path.resolve(process.argv[2]) : defaultManifestPath;
  const publishedPackages = readPublishedPackages(manifestPath);

  publishedPackages.forEach(createGitHubRelease);
}

createGitHubReleases();

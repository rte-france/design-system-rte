import fs from "fs";
import { execSync } from "node:child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../..");

const PACKAGE_MANIFESTS = {
  core: path.resolve(rootDir, "packages/core/package.json"),
  angular: path.resolve(rootDir, "packages/angular/projects/ds-rte-lib/package.json"),
  react: path.resolve(rootDir, "packages/react/package.json"),
} as const;

const OUTPUT_PATH = path.resolve(rootDir, "docs/COMPATIBILITY.md");

interface PackageManifest {
  version: string;
  peerDependencies?: Record<string, string>;
  dependencies?: Record<string, string>;
}

interface CompatibilityMatrix {
  angularPeer: string;
  reactPeer: string;
  coreRangeAngular: string;
  coreRangeReact: string;
  angularNpmLines: AngularNpmLine[];
}

interface AngularNpmLine {
  distTag: string;
  packageVersion: string;
  angularPeer: string;
  coreRelationship: string;
  installCommand: string;
}

interface NpmPackageMetadata {
  peerDependencies?: Record<string, string>;
  dependencies?: Record<string, string>;
}

generateCompatibilityMatrix();

function generateCompatibilityMatrix(): void {
  const matrix = buildCompatibilityMatrix();
  const markdown = formatCompatibilityMarkdown(matrix);
  fs.writeFileSync(OUTPUT_PATH, markdown, "utf-8");
  console.log(`Compatibility matrix written to ${OUTPUT_PATH}`);
}

function buildCompatibilityMatrix(): CompatibilityMatrix {
  const angularManifest = readManifest(PACKAGE_MANIFESTS.angular);
  const reactManifest = readManifest(PACKAGE_MANIFESTS.react);

  return {
    angularPeer: formatAngularPeerRange(angularManifest.peerDependencies),
    reactPeer: reactManifest.peerDependencies?.react ?? ">=18.0.0",
    coreRangeAngular: angularManifest.peerDependencies?.["@design-system-rte/core"] ?? "—",
    coreRangeReact: reactManifest.dependencies?.["@design-system-rte/core"] ?? "—",
    angularNpmLines: fetchAngularNpmLines(),
  };
}

function readManifest(manifestPath: string): PackageManifest {
  return JSON.parse(fs.readFileSync(manifestPath, "utf-8")) as PackageManifest;
}

function formatAngularPeerRange(peerDependencies: PackageManifest["peerDependencies"]): string {
  if (!peerDependencies) {
    return "^19.2.25";
  }

  const angularCore = peerDependencies["@angular/core"];
  return angularCore ?? "^19.2.25";
}

function readNpmPackageMetadata(packageName: string, version: string): NpmPackageMetadata {
  const output = execSync(`npm view ${packageName}@${version} peerDependencies dependencies --json`, {
    encoding: "utf-8",
  });
  return JSON.parse(output) as NpmPackageMetadata;
}

function formatCoreRelationship(metadata: NpmPackageMetadata): string {
  const corePeer = metadata.peerDependencies?.["@design-system-rte/core"];
  if (corePeer) {
    return `peer \`@design-system-rte/core\` ${corePeer}`;
  }

  const coreDependency = metadata.dependencies?.["@design-system-rte/core"];
  if (coreDependency) {
    return `dependency \`@design-system-rte/core\` ${coreDependency}`;
  }

  return "—";
}

function buildAngularInstallCommand(distTag: string, metadata: NpmPackageMetadata): string {
  const packageSpecifier =
    distTag === "latest" ? "@design-system-rte/angular" : `@design-system-rte/angular@${distTag}`;
  const corePeer = metadata.peerDependencies?.["@design-system-rte/core"];
  const coreDependency = metadata.dependencies?.["@design-system-rte/core"];

  if (corePeer) {
    const coreVersion = corePeer.replace(/^[\^~]/, "");
    return `npm install ${packageSpecifier} @design-system-rte/core@${coreVersion}`;
  }

  if (coreDependency) {
    return `npm install ${packageSpecifier}`;
  }

  return `npm install ${packageSpecifier}`;
}

function fetchAngularNpmLines(): AngularNpmLine[] {
  const distTagsOutput = execSync("npm view @design-system-rte/angular dist-tags --json", { encoding: "utf-8" });
  const distTags = JSON.parse(distTagsOutput) as Record<string, string>;
  const documentedTags = ["latest", "angular18", "angular17"];

  return documentedTags
    .filter((distTag) => distTags[distTag])
    .map((distTag) => {
      const packageVersion = distTags[distTag];
      const metadata = readNpmPackageMetadata("@design-system-rte/angular", packageVersion);
      const angularPeer = metadata.peerDependencies?.["@angular/core"] ?? "—";

      return {
        distTag,
        packageVersion,
        angularPeer,
        coreRelationship: formatCoreRelationship(metadata),
        installCommand: buildAngularInstallCommand(distTag, metadata),
      };
    });
}

function formatAngularNpmLinesSection(lines: AngularNpmLine[]): string[] {
  const output: string[] = [
    "## Angular npm dist-tags",
    "",
    "`@design-system-rte/angular` publishes **multiple release lines** on npm under dist-tags. There is **no `angular19` tag** — the current Angular 19 line is `@latest`.",
    "",
    "Do **not** run `npm install @design-system-rte/angular` on an Angular 17/18 app without a dist-tag — `@latest` targets Angular 19 only.",
    "",
    "| npm dist-tag | Package version | Angular peer | `@design-system-rte/core` | Install |",
    "|--------------|-----------------|--------------|---------------------------|---------|",
  ];

  for (const line of lines) {
    output.push(
      `| \`${line.distTag}\` | ${line.packageVersion} | \`${line.angularPeer}\` | ${line.coreRelationship} | \`${line.installCommand}\` |`,
    );
  }

  output.push(
    "",
    "Other npm dist-tags (`rc`, `routerlink`, …) are internal or preview lines — not for production consumers.",
    "",
  );

  return output;
}

function formatAngularInstallSection(lines: AngularNpmLine[]): string[] {
  const output = ["## Installing a compatible set", ""];

  for (const line of lines) {
    const angularMajor = line.distTag === "latest" ? "19 (current line)" : line.distTag.replace("angular", "");
    const label =
      line.distTag === "latest"
        ? "**Angular 19 (current line)** — use `@latest`"
        : `**Angular ${angularMajor} (legacy line)** — use the \`${line.distTag}\` dist-tag`;

    output.push(`${label}:`, "", "```bash", line.installCommand, "```", "");
  }

  output.push(
    "Ensure `@design-system-rte/core` matches the range for the dist-tag you chose (see tables above). **Angular 20+ is not supported** on any line.",
    "",
  );

  return output;
}

function formatCompatibilityMarkdown(matrix: CompatibilityMatrix): string {
  const coreManifest = readManifest(PACKAGE_MANIFESTS.core);
  const angularManifest = readManifest(PACKAGE_MANIFESTS.angular);
  const reactManifest = readManifest(PACKAGE_MANIFESTS.react);

  const lines: string[] = [
    "<!-- Generated by npm run docs:compatibility-matrix — do not edit manually -->",
    "",
    "# Compatibility matrix",
    "",
    "This document describes supported runtime environments and the `@design-system-rte/core` versions required by each framework package release.",
    "",
    "Angular, React, and Core use **independent semver lines**. Matching version numbers across packages (for example `3.1.0` and `1.14.0`) does not mean they are interchangeable — use the Angular dist-tags table below.",
    "",
    "## Framework compatibility (Angular / React / Node.js)",
    "",
    "npm `peerDependencies` describe what the package manager **allows at install time**. They do not always match what Luciole **officially supports**. Use this table before installing.",
    "",
    "| Runtime | npm peer range | Officially supported |",
    "|---------|----------------|---------------------|",
    `| **Angular** (\`@latest\`) | \`${matrix.angularPeer}\` | **19.2.x** (current line) |`,
    `| **React** | \`${matrix.reactPeer}\` | **18.x** |`,
    "| **Node.js** | — | 20 LTS |",
    "",
    ...formatAngularNpmLinesSection(matrix.angularNpmLines),
    "## Latest published versions",
    "",
    "| Package | Version | Core relationship |",
    "|---------|---------|-------------------|",
    `| \`@design-system-rte/core\` | ${coreManifest.version} | — |`,
    `| \`@design-system-rte/angular\` | ${angularManifest.version} | peer \`@design-system-rte/core\` ${matrix.coreRangeAngular} |`,
    `| \`@design-system-rte/react\` | ${reactManifest.version} | dependency \`@design-system-rte/core\` ${matrix.coreRangeReact} |`,
    "",
    ...formatAngularInstallSection(matrix.angularNpmLines),
    "**React** — core is bundled as a dependency:",
    "",
    "```bash",
    "npm install @design-system-rte/react",
    "```",
    "",
    "Use **React 18.x** for supported setups. React 19+ may install without npm errors but is not CI-validated.",
    "",
  ];

  return lines.join("\n");
}

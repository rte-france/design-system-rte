import { execSync, type ExecSyncOptions } from "node:child_process";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

function run(cmd: string, options: ExecSyncOptions = {}): void {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: rootDir, ...options });
}

function runSilent(cmd: string, options: ExecSyncOptions = {}): string {
  const output = execSync(cmd, { encoding: "utf8", cwd: rootDir, ...options });
  return typeof output === "string" ? output.trim() : output.toString().trim();
}

async function release(): Promise<void> {
  try {
    console.log("🚀 Starting release process...\n");

    publishAllPackages();

    createGitHubReleases();

    createReleaseTag();

    const latestTag: string = getLatestTag();

    pushTagToOrigin(latestTag);

    console.log("🎉 Release process completed successfully!");
  } catch (error) {
    console.error("\n❌ Release process failed!");
    const errorMessage: string = error instanceof Error ? error.message : String(error);
    console.error(errorMessage);
    process.exit(1);
  }
}

function publishAllPackages(): void {
  console.log("📦 Step 1: Publishing all packages...");
  run("npm run publish:all");
  console.log("✅ All packages published successfully.\n");
}

function createGitHubReleases(): void {
  console.log("📝 Step 2: Creating GitHub releases...");
  run("npm run release:github");
  console.log("✅ GitHub releases created successfully.\n");
}

function createReleaseTag(): void {
  console.log("🏷️  Step 3: Creating release tag...");
  run("npm run tag-release");
  console.log("✅ Release tag created successfully.\n");
}

function getLatestTag(): string {
  console.log("🔍 Step 4: Getting latest tag...");
  const latestTag: string = runSilent("npm run -s tag:latest");
  console.log(`📌 Latest tag: ${latestTag}\n`);
  return latestTag;
}

function pushTagToOrigin(tag: string): void {
  console.log("📤 Step 5: Pushing tag to origin...");
  run(`git push origin ${tag}`);
  console.log(`✅ Tag ${tag} pushed to origin successfully.\n`);
}

release();

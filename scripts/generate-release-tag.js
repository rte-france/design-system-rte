import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

applyTag();

function applyTag() {
  const tagDate = generateTagDate();
  const customMessage = process.argv[2];
  const message = generateTagMessage(customMessage);
  let subVersion = 0;
  let tag = `${tagDate}.${subVersion}`;

  while (tagExists(tag)) {
    subVersion++;
    tag = `${tagDate}.${subVersion}`;
  }

  console.log(`🏷️ Creating git tag ${tag}...`);
  execSync(`git tag -a ${tag} -m "${message}"`, { stdio: "inherit" });

  console.log(`✅ Tag ${tag} created successfully.`);
  console.log(message);
}

function generateTagDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${day}-${month}-${year}`;
}

function generateTagMessage(customMessage) {
  try {
    const angularVersion = getPackageVersion("angular");
    const reactVersion = getPackageVersion("react");
    const coreVersion = getPackageVersion("core");
    const designDocsVersion = getPackageVersion("design-docs");

    const versionsInfo = `Package Versions:
  - Angular: ${angularVersion}
  - React: ${reactVersion}
  - Core: ${coreVersion}
  - Design Docs: ${designDocsVersion}`;

    return customMessage ? `${customMessage}\n\n${versionsInfo}` : `Release\n\n${versionsInfo}`;
  } catch (error) {
    console.error(`❌ Error getting package versions: ${error.message}`);
    process.exit(1);
  }
}

function getPackageVersion(packageName) {
  let packageJsonPath;

  if (packageName === "angular") {
    packageJsonPath = path.join("packages", packageName, "projects", "ds-rte-lib", "package.json");
  } else {
    packageJsonPath = path.join("packages", packageName, "package.json");
  }

  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`Package ${packageName} not found at ${packageJsonPath}`);
  }

  const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  if (!pkg.version) {
    throw new Error(`No version found in ${packageJsonPath}`);
  }

  return pkg.version;
}

function tagExists(tag) {
  try {
    execSync(`git rev-parse ${tag}`, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

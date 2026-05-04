import { execSync } from "child_process";
import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const angularPackagePath = resolve(rootDir, "packages/angular/projects/ds-rte-lib/package.json");
const corePackagePath = resolve(rootDir, "packages/core/package.json");
const coreDistPath = resolve(rootDir, "packages/core/dist");

function run(cmd, options = {}) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: rootDir, ...options });
}

function readPackageJson(packageJsonPath) {
  const packageContent = fs.readFileSync(packageJsonPath, "utf8");
  return JSON.parse(packageContent);
}

function writePackageJson(packageJsonPath, packageData) {
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageData, null, 2));
}

function temporarilyMarkPrivate(packageJsonPath) {
  const packageData = readPackageJson(packageJsonPath);
  const hadPrivateKey = Object.prototype.hasOwnProperty.call(packageData, "private");
  const originalPrivateValue = packageData.private;

  packageData.private = true;
  writePackageJson(packageJsonPath, packageData);

  return { hadPrivateKey, originalPrivateValue };
}

function restorePackagePrivacy(packageJsonPath, originalPrivacyState) {
  const packageData = readPackageJson(packageJsonPath);
  if (originalPrivacyState.hadPrivateKey) {
    packageData.private = originalPrivacyState.originalPrivateValue;
  } else {
    delete packageData.private;
  }
  writePackageJson(packageJsonPath, packageData);
}

function publishWithChangeset() {
  run(`changeset publish`);
}

function buildCoreLibrary() {
  console.log("\n🚀 Building @design-system-rte/core...");
  run("npm --prefix packages/core run build");
}

function validateCoreDistPackage() {
  const packageJsonPath = resolve(coreDistPath, "package.json");

  if (!fs.existsSync(packageJsonPath)) {
    console.error("❌ package.json not found in packages/core/dist.");
    process.exit(1);
  }
}

function publishCorePackage() {
  run("npm publish --access public", { cwd: coreDistPath });
  console.log("\n✅ Core package published successfully.");
}

function buildAngularLibrary() {
  console.log("\n🚀 Publishing @design-system-rte/angular manually...");
  run("cd packages/angular && ng build ds-rte-lib");
}

function validateAngularDistPackage() {
  const distPath = resolve(rootDir, "packages/angular/dist/lib");
  const packageJsonPath = resolve(distPath, "package.json");

  if (!fs.existsSync(packageJsonPath)) {
    console.error("❌ package.json not found in dist/angular.");
    process.exit(1);
  }
}

function publishAngularPackage() {
  const distPath = resolve(rootDir, "packages/angular/dist/lib");
  run("npm publish --access public", { cwd: distPath });
  console.log("\n✅ Angular package published successfully.");
}

async function publishAllPackages() {
  const angularOriginalPrivacyState = temporarilyMarkPrivate(angularPackagePath);
  const coreOriginalPrivacyState = temporarilyMarkPrivate(corePackagePath);

  try {
    publishWithChangeset();
  } finally {
    restorePackagePrivacy(angularPackagePath, angularOriginalPrivacyState);
    restorePackagePrivacy(corePackagePath, coreOriginalPrivacyState);
  }

  buildCoreLibrary();
  validateCoreDistPackage();
  publishCorePackage();

  buildAngularLibrary();
  validateAngularDistPackage();
  publishAngularPackage();
}

publishAllPackages().catch((err) => {
  console.error(err);
  process.exit(1);
});

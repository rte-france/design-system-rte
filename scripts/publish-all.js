import { execSync } from "child_process";
import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const angularPackagePath = resolve(rootDir, "packages/angular/projects/ds-rte-lib/package.json");

function run(cmd, options = {}) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: rootDir, ...options });
}

function readAngularPackage() {
  const packageContent = fs.readFileSync(angularPackagePath, "utf8");
  return JSON.parse(packageContent);
}

function writeAngularPackage(packageData) {
  fs.writeFileSync(angularPackagePath, JSON.stringify(packageData, null, 2));
}

function temporarilyMarkAngularAsPrivate() {
  const angularPkg = readAngularPackage();
  const originallyPrivate = angularPkg.private === true;

  angularPkg.private = true;
  writeAngularPackage(angularPkg);

  return originallyPrivate;
}

function restoreAngularPackagePrivacy(originallyPrivate) {
  const angularPkg = readAngularPackage();
  angularPkg.private = originallyPrivate;
  writeAngularPackage(angularPkg);
}

function publishWithChangeset() {
  run(`changeset publish`);
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
  const originallyPrivate = temporarilyMarkAngularAsPrivate();

  try {
    publishWithChangeset();
  } finally {
    restoreAngularPackagePrivacy(originallyPrivate);
  }

  buildAngularLibrary();
  validateAngularDistPackage();
  publishAngularPackage();
}

publishAllPackages().catch((err) => {
  console.error(err);
  process.exit(1);
});

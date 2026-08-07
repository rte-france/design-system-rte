import { execSync } from "child_process";
import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const releaseDir = resolve(rootDir, ".release");
const publishedManifestPath = resolve(releaseDir, "published-packages.json");

const angularPackagePath = resolve(rootDir, "packages/angular/projects/ds-rte-lib/package.json");
const corePackagePath = resolve(rootDir, "packages/core/package.json");
const reactPackagePath = resolve(rootDir, "packages/react/package.json");
const coreDistPath = resolve(rootDir, "packages/core/dist");

const packageRegistry = {
  core: {
    name: "@design-system-rte/core",
    manifestPath: corePackagePath,
    changelogPath: resolve(rootDir, "packages/core/CHANGELOG.md"),
  },
  angular: {
    name: "@design-system-rte/angular",
    manifestPath: angularPackagePath,
    changelogPath: resolve(rootDir, "packages/angular/projects/ds-rte-lib/CHANGELOG.md"),
  },
  react: {
    name: "@design-system-rte/react",
    manifestPath: reactPackagePath,
    changelogPath: resolve(rootDir, "packages/react/CHANGELOG.md"),
  },
};

function run(command, options = {}) {
  console.log(`\n$ ${command}`);
  execSync(command, { stdio: "inherit", cwd: rootDir, ...options });
}

function readPackageJson(packageJsonPath) {
  const packageContent = fs.readFileSync(packageJsonPath, "utf8");
  return JSON.parse(packageContent);
}

function writePackageJson(packageJsonPath, packageData) {
  fs.writeFileSync(packageJsonPath, `${JSON.stringify(packageData, null, 2)}\n`);
}

function getPackageVersion(manifestPath) {
  return readPackageJson(manifestPath).version;
}

function isVersionOnNpm(packageName, version) {
  try {
    execSync(`npm view ${packageName}@${version} version`, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
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

function createPublishedEntry(packageKey) {
  const packageInfo = packageRegistry[packageKey];
  return {
    name: packageInfo.name,
    version: getPackageVersion(packageInfo.manifestPath),
    manifestPath: packageInfo.manifestPath,
    changelogPath: packageInfo.changelogPath,
  };
}

function writePublishedManifest(publishedPackages) {
  fs.mkdirSync(releaseDir, { recursive: true });
  fs.writeFileSync(publishedManifestPath, `${JSON.stringify(publishedPackages, null, 2)}\n`);
  console.log(`\nPublished manifest written to ${publishedManifestPath}`);
}

function publishWithChangeset() {
  run("changeset publish");
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

function publishCorePackageIfNew() {
  const { name, manifestPath } = packageRegistry.core;
  const version = getPackageVersion(manifestPath);

  if (isVersionOnNpm(name, version)) {
    console.log(`\nSkipping ${name}@${version} - already on npm.`);
    return null;
  }

  buildCoreLibrary();
  validateCoreDistPackage();
  run("npm publish --access public", { cwd: coreDistPath });
  console.log(`\n${name} published successfully.`);
  return createPublishedEntry("core");
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

function publishAngularPackageIfNew() {
  const { name, manifestPath } = packageRegistry.angular;
  const version = getPackageVersion(manifestPath);

  if (isVersionOnNpm(name, version)) {
    console.log(`\nSkipping ${name}@${version} - already on npm.`);
    return null;
  }

  buildAngularLibrary();
  validateAngularDistPackage();
  const distPath = resolve(rootDir, "packages/angular/dist/lib");
  run("npm publish --access public", { cwd: distPath });
  console.log(`\n${name} published successfully.`);
  return createPublishedEntry("angular");
}

function publishReactViaChangesetIfNew() {
  const { name, manifestPath } = packageRegistry.react;
  const version = getPackageVersion(manifestPath);

  if (isVersionOnNpm(name, version)) {
    console.log(`\nSkipping ${name}@${version} - already on npm.`);
    return null;
  }

  publishWithChangeset();
  console.log(`\n${name} published successfully.`);
  return createPublishedEntry("react");
}

async function publishAllPackages() {
  const publishedPackages = [];
  const angularOriginalPrivacyState = temporarilyMarkPrivate(angularPackagePath);
  const coreOriginalPrivacyState = temporarilyMarkPrivate(corePackagePath);

  try {
    const coreEntry = publishCorePackageIfNew();
    if (coreEntry) {
      publishedPackages.push(coreEntry);
    }

    const angularEntry = publishAngularPackageIfNew();
    if (angularEntry) {
      publishedPackages.push(angularEntry);
    }

    const reactEntry = publishReactViaChangesetIfNew();
    if (reactEntry) {
      publishedPackages.push(reactEntry);
    }
  } finally {
    restorePackagePrivacy(angularPackagePath, angularOriginalPrivacyState);
    restorePackagePrivacy(corePackagePath, coreOriginalPrivacyState);
  }

  writePublishedManifest(publishedPackages);

  if (!publishedPackages?.length) {
    console.log("\nNo packages were published in this run.");
  }
}

publishAllPackages().catch((error) => {
  console.error(error);
  process.exit(1);
});

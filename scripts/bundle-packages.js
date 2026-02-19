import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

import { copyDirectoryRecursive, cleanDirectory } from "./directory-helper.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parsePackagesArg() {
  const packagesArg = process.argv.find((arg) => arg.startsWith("--packages="));
  if (packagesArg) {
    const packagesValue = packagesArg.split("=")[1].replace(/^["']|["']$/g, "");
    return packagesValue
      .split(",")
      .map((pkg) => pkg.trim())
      .filter(Boolean);
  }
  return ["core", "angular", "react"];
}

const packages = parsePackagesArg();
const distDir = path.resolve(__dirname, "../dist/packages");

cleanDirectory(distDir);
copyBundlesToDist(packages);

function copyBundlesToDist(packages) {
  packages.forEach((pkg) => {
    const pkgRoot = path.resolve(__dirname, `../packages/${pkg}`);

    if (!fs.existsSync(pkgRoot)) {
      console.error(`❌ Package not found: ${pkgRoot}`);
      return;
    }

    console.log(`📦 Building ${pkg}...`);
    try {
      if (pkg !== "core") {
        execSync("npm run generate-icons", { cwd: pkgRoot, stdio: "inherit" });
      }
      execSync("npm run build", { cwd: pkgRoot, stdio: "inherit" });
    } catch {
      console.error(`❌ Failed to build ${pkg}`);
      return;
    }

    if (pkg === "core") {
      copyCoreToDist();
    } else {
      copyFrameworkToDist(pkg);
    }
  });
}

function copyCoreToDist() {
  const coreDistDir = path.resolve(__dirname, `../packages/core/dist`);
  const outputDir = path.join(distDir, "core");

  if (!fs.existsSync(coreDistDir)) {
    console.error(`❌ Core dist not found at ${coreDistDir}. Run core build first.`);
    return;
  }

  console.log(`📁 Copying core build output to ${outputDir}`);
  fs.mkdirSync(outputDir, { recursive: true });
  copyDirectoryRecursive(coreDistDir, outputDir);

  console.log(`✅ core copied to ${outputDir}`);
}

function copyFrameworkToDist(packageName) {
  const packageRoot = path.resolve(__dirname, `../packages/${packageName}`);
  const packageOut = path.join(distDir, packageName);
  const sourceDir = packageName === "angular" ? path.join(packageRoot, "dist/lib") : path.join(packageRoot, "dist");

  if (!fs.existsSync(sourceDir)) {
    console.error(`❌ Build output not found for ${packageName} at ${sourceDir}`);
    return;
  }

  console.log(`📁 Copying build output of ${packageName} to ${sourceDir}`);
  fs.mkdirSync(sourceDir, { recursive: true });
  copyDirectoryRecursive(sourceDir, packageOut);

  console.log(`✅ ${packageName} bundled to ${packageOut}`);
}

console.log("\n✅ All packages bundled into dist/packages\n");

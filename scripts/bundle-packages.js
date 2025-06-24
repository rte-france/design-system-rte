import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packages = ["core", "angular", "react"];
const distDir = path.resolve(__dirname, "../dist/packages");

cleanDistDir();
copyBundlesToDist(packages);

function cleanDistDir() {
  fs.rmSync(distDir, { recursive: true, force: true });
  fs.mkdirSync(distDir, { recursive: true });
}

function copyBundlesToDist(packages) {
  packages.forEach((pkg) => {
    const pkgRoot = path.resolve(__dirname, `../packages/${pkg}`);

    if (!fs.existsSync(pkgRoot)) {
      console.error(`❌ Package not found: ${pkgRoot}`);
      return;
    }

    console.log(`📦 Building ${pkg}...`);
    try {
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
  const packageRoot = path.resolve(__dirname, `../packages/core`);
  const outputDir = path.join(distDir, "core");

  console.log(`📁 Copying core source files to ${outputDir}`);
  fs.mkdirSync(outputDir, { recursive: true });

  const exclude = ["node_modules", "dist", "test", ".DS_Store"];
  copyFolderRecursive(packageRoot, outputDir, exclude);

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
  copyFolderRecursive(sourceDir, packageOut);

  console.log(`✅ ${packageName} bundled to ${packageOut}`);
}

function copyFolderRecursive(src, dest, exclude = []) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src)) {
    if (exclude.includes(item)) continue;

    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyFolderRecursive(srcPath, destPath, exclude);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log("\n✅ All packages bundled into dist/packages\n");

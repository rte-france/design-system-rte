#!/usr/bin/env node
/**
 * Build script for @design-system-rte/core
 * Compiles TypeScript to JS + .d.ts, copies assets, and creates the dist package.
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const packageRoot = path.resolve(__dirname, "..");
const distDir = path.join(packageRoot, "dist");

function copyRecursive(src: string, dest: string, exclude: string[] = []): void {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src)) {
    if (exclude.includes(item)) continue;

    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyRecursive(srcPath, destPath, exclude);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyDtsOnlyFiles(): void {
  function walk(dir: string): void {
    if (!fs.existsSync(dir)) return;
    for (const item of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (!["docs", "stories", "assets", "node_modules"].includes(item)) {
          walk(fullPath);
        }
      } else if (
        item.endsWith(".d.ts") &&
        !fs.existsSync(fullPath.replace(/\.d\.ts$/, ".ts")) &&
        !fs.existsSync(fullPath.replace(/\.d\.ts$/, ".tsx"))
      ) {
        // Preserve full path from package root (e.g. components/toast/toast.interface.d.ts)
        const relativePath = path.relative(packageRoot, fullPath);
        const destPath = path.join(distDir, relativePath);
        const destDir = path.dirname(destPath);
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
        fs.copyFileSync(fullPath, destPath);
      }
    }
  }

  walk(path.join(packageRoot, "common"));
  walk(path.join(packageRoot, "components"));
  walk(path.join(packageRoot, "constants"));
}

function main(): void {
  console.log("📦 Building @design-system-rte/core...\n");

  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true });
  }
  fs.mkdirSync(distDir, { recursive: true });

  // 1. Compile TypeScript
  console.log("1/4 Compiling TypeScript...");
  execSync("tsc -p tsconfig.build.json", { cwd: packageRoot, stdio: "inherit" });

  // 2. Copy .d.ts only files (type-only modules like *.interface.d.ts)
  console.log("2/4 Copying type declaration files...");
  copyDtsOnlyFiles();

  // 3. Copy design-tokens, assets, css
  console.log("3/4 Copying design-tokens, assets, css...");
  copyRecursive(path.join(packageRoot, "design-tokens"), path.join(distDir, "design-tokens"));
  copyRecursive(path.join(packageRoot, "assets"), path.join(distDir, "assets"));
  if (fs.existsSync(path.join(packageRoot, "css"))) {
    copyRecursive(path.join(packageRoot, "css"), path.join(distDir, "css"));
  }

  // 4. Create dist package.json
  console.log("4/4 Creating dist package.json...");
  const packageJson = JSON.parse(fs.readFileSync(path.join(packageRoot, "package.json"), "utf8"));
  const distPackageJson = {
    ...packageJson,
    main: "index.js",
    types: "index.d.ts",
    files: ["common", "components", "constants", "index.js", "index.d.ts", "design-tokens", "assets", "css"],
    exports: {
      ".": { types: "./index.d.ts", default: "./index.js" },
      "./design-tokens/*": "./design-tokens/*",
      "./assets/*": "./assets/*",
      "./css/*": "./css/*",
      "./*": { types: "./*.d.ts", default: "./*.js" },
      "./package.json": "./package.json",
    },
  };
  delete distPackageJson.scripts;
  delete distPackageJson.devDependencies;
  fs.writeFileSync(path.join(distDir, "package.json"), JSON.stringify(distPackageJson, null, 2));

  console.log("\n✅ Build complete: dist/");
}

main();

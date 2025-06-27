import path from "path";
import { fileURLToPath } from "url";

import { copyDirectoryRecursive, cleanDirectory } from "./directory-helper.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testAppIconsDir = path.resolve(__dirname, "../test-apps/angular/src/assets/icons");

cleanDirectory(testAppIconsDir);
copyPackageIconsToTestApp();

function copyPackageIconsToTestApp() {
  const bundleIconsDir = path.resolve(__dirname, `../dist/packages/angular/lib/assets/icons`);
  copyDirectoryRecursive(bundleIconsDir, testAppIconsDir);
}

console.log("\n✅ All icons copied from bundle into angular test app\n");

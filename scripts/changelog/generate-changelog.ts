import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { formatPackageChangelog } from "./services/changelog-formatter";
import { parseChangelogDocument } from "./services/document-parser";
import { filterPackageChangelogByMinorVersions } from "./services/version-scope-selector";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MINOR_VERSIONS_COUNT = 3;

const packages = [
  {
    name: "Angular",
    changelogPath: path.resolve(__dirname, "../../packages/angular/projects/ds-rte-lib/CHANGELOG.md"),
  },
  {
    name: "React",
    changelogPath: path.resolve(__dirname, "../../packages/react/CHANGELOG.md"),
  },
  {
    name: "Core",
    changelogPath: path.resolve(__dirname, "../../packages/core/CHANGELOG.md"),
  },
  {
    name: "Design Docs",
    changelogPath: path.resolve(__dirname, "../../packages/design-docs/CHANGELOG.md"),
  },
];

const outputPath = path.resolve(__dirname, "../../CHANGELOG.md");

generateChangelog();

function generateChangelog(): void {
  try {
    let changelogContent = `# Design System RTE - Latest changes\n\n`;

    packages.forEach((pkg) => {
      const packageChangelogObj = parseChangelogDocument(fs.readFileSync(pkg.changelogPath, "utf-8"));
      const filteredPackageChangelog = filterPackageChangelogByMinorVersions(packageChangelogObj, MINOR_VERSIONS_COUNT);
      if (filteredPackageChangelog.size > 0) {
        changelogContent += `# ${pkg.name}\n\n`;
        changelogContent += formatPackageChangelog(filteredPackageChangelog);
      }
    });

    fs.writeFileSync(outputPath, changelogContent, "utf-8");
  } catch (error) {
    console.error("Error generating changelog:", error);
    throw error;
  }
}

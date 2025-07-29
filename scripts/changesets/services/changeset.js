import { writeFileSync, mkdirSync, readdirSync, existsSync, unlinkSync } from "fs";
import { join } from "path";

import { getCommits, getChangedFiles, getRelevantCommitsForPackage, getCurrentBranch } from "./git.js";

const commits = getCommits();
const changedFiles = getChangedFiles();

function sanitizeBranchName(branchName) {
  return branchName.replace(/\//g, "-").toLowerCase();
}

export function cleanupExistingAutoChangesets() {
  if (!existsSync(".changeset")) {
    return;
  }

  const files = readdirSync(".changeset");
  files.forEach((file) => {
    if (file.endsWith(".md") && file.startsWith("auto-")) {
      try {
        unlinkSync(join(".changeset", file));
        console.log(`🗑️  Removed existing changeset: ${file}`);
      } catch (error) {
        console.warn(`Could not remove changeset file ${file}:`, error.message);
      }
    }
  });
}

export function addChangesetForAffectedPackages(packages) {
  const currentBranch = getCurrentBranch();
  const sanitizedBranch = sanitizeBranchName(currentBranch);

  Object.keys(packages).forEach((pkgKey) => {
    const { name, bump, dir } = packages[pkgKey];
    if (!bump) return;

    console.log(`📦 Adding ${bump} changeset for ${name}`);

    try {
      const relevantCommits = getRelevantCommitsForPackage(dir, commits, changedFiles);
      const changesetContent = formatChangesetContent(name, bump, relevantCommits);

      const changesetFile = join(".changeset", `auto-${pkgKey}-${sanitizedBranch}.md`);

      mkdirSync(".changeset", { recursive: true });
      writeFileSync(changesetFile, changesetContent);

      console.log(`✅ Created changeset: ${changesetFile}`);
      if (relevantCommits.length > 0) {
        console.log(`   📝 Included ${relevantCommits.length} relevant commits`);
      }
    } catch (error) {
      console.error(`Failed to add changeset for ${name}:`, error.message);
    }
  });
}

export function formatChangesetContent(packageName, bump, relevantCommits) {
  let content = `---
  "${packageName}": ${bump}
  ---
  
  `;

  if (relevantCommits.length > 0) {
    content += `## Changes\n\n`;
    relevantCommits.forEach((commit) => {
      const cleanCommit = commit.replace(/^(feat|fix|docs|style|refactor|test|chore)(\(.+?\))?:?\s*/i, "");
      content += `- ${cleanCommit}\n`;
    });
  } else {
    content += `Auto bump`;
  }

  return content;
}

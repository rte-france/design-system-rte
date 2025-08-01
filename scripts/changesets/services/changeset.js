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
    const branch = sanitizeBranchName(getCurrentBranch());
    if (file.startsWith("auto-") && file.includes(branch) && file.endsWith(".md")) {
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

  if (relevantCommits.length) {
    const PARENTHESIS_REGEX = /\((.+?)\)/;
    content += `## Changes\n\n`;
    relevantCommits.forEach((commit) => {
      const commitKeywords = commit.indexOf(":") !== -1 ? commit.substring(0, commit.indexOf(":")) : "";
      const commitContext = commitKeywords.match(PARENTHESIS_REGEX)
        ? commitKeywords.match(PARENTHESIS_REGEX)[1].trim()
        : "";
      const formattedCommitContext = commitContext ? `(${capitalizeText(commitContext)}) ` : "";
      const cleanCommit = commit.replace(/^(feat|fix|docs|style|refactor|test|chore)\s*(\([^)]+\))?\s*:?\s*/i, "");
      content += `- ${formattedCommitContext}${cleanCommit}\n`;
    });
  } else {
    content += `Auto bump`;
  }

  return content;
}

function capitalizeText(text) {
  if (text) {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
}

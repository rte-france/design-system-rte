import { execSync } from "child_process";

import { determineBump } from "./commit.js";

export function getCommits() {
  const commitData = execSync("git log origin/main..HEAD --pretty=format:'%H|%s'")
    .toString()
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const [hash, message] = line.split("|");
      return { hash, message };
    });

  return commitData;
}

export function getChangedFiles() {
  return execSync("git diff --name-only origin/main..HEAD")
    .toString()
    .split("\n")
    .filter((line) => line.trim() !== "");
}

export function getRelevantCommitsForPackage(packageDir, commits, changedFiles) {
  const packageFiles = changedFiles.filter((file) => file.startsWith(packageDir));

  if (packageFiles.length === 0) {
    return [];
  }

  const relevantCommits = [];

  commits.forEach((commitData) => {
    const hasPackageChanges = packageFiles.some((file) => {
      try {
        const commitFiles = execSync(`git show --name-only --pretty=format: ${commitData.hash}`, { encoding: "utf8" })
          .split("\n")
          .filter((line) => line.trim() !== "");

        return commitFiles.includes(file);
      } catch (error) {
        console.error(`Error getting relevant commits for package ${packageDir}:`, error.message);
        return determineBump(commitData.message) !== null;
      }
    });

    if (hasPackageChanges) {
      relevantCommits.push(commitData.message);
    }
  });

  return relevantCommits;
}

export function stageChangesetFiles() {
  try {
    execSync("git add .changeset/auto-*.md", { stdio: "inherit" });
    console.log("📝 Staged auto-generated changeset files");
  } catch (error) {
    console.warn("No auto-generated changeset files to stage:", error.message);
  }
}

function isOnMainBranch() {
  const currentBranch = execSync("git branch --show-current", { encoding: "utf8" }).trim();
  return currentBranch === "main";
}

function hasLocalCommits() {
  const commitsAhead = execSync("git log origin/main..HEAD --oneline", { encoding: "utf8" })
    .split("\n")
    .filter((line) => line.trim() !== "");
  return commitsAhead.length > 0;
}

function isLastCommitPushed() {
  const lastCommitHash = execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
  const remoteBranches = execSync(`git branch -r --contains ${lastCommitHash}`, { encoding: "utf8" })
    .split("\n")
    .filter((line) => line.trim() !== "");
  
  return remoteBranches.some((branch) => branch.trim().startsWith("origin/"));
}

function performAmend() {
  execSync("git commit --amend --no-edit --no-verify", { stdio: "inherit" });
  console.log("✅ Amended last commit with changeset files");
}

export function amendLastCommit() {
  try {
    if (isOnMainBranch()) {
      console.warn("⚠️  Cannot amend commit on main branch - skipping amendment");
      return;
    }

    if (!hasLocalCommits()) {
      console.warn("⚠️  No local commits to amend - skipping amendment");
      return;
    }

    if (isLastCommitPushed()) {
      console.warn("⚠️  Last commit is already pushed to remote - skipping amendment");
      return;
    }

    performAmend();
  } catch (error) {
    console.error("Failed to amend last commit:", error.message);
  }
}

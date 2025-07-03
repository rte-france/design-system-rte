import { packages } from "./changeset-config.js";
import { cleanupExistingAutoChangesets, addChangesetForAffectedPackages } from "./services/changeset.js";
import { determineBump, getHighestBump } from "./services/commit.js";
import {
  getCommits,
  getChangedFiles,
  getRelevantCommitsForPackage,
  stageChangesetFiles,
  commitChangesetFiles,
  amendLastCommit,
} from "./services/git.js";

const args = process.argv.slice(2);
const mode = args[0] || "amend";

if (mode === "commit") {
  generateAndCommitChangesets();
} else if (mode === "amend") {
  generateAndAmendChangesets();
} else {
  console.error("Invalid mode. Use 'commit' or 'amend'");
  process.exit(1);
}

function generateAndCommitChangesets() {
  console.log("🚀 Generating and committing changesets...");
  const commits = getCommits();
  const changedFiles = getChangedFiles();

  assignBumpsPerPackage(commits, changedFiles);
  cleanupExistingAutoChangesets();
  addChangesetForAffectedPackages(packages);
  stageChangesetFiles();
  commitChangesetFiles();

  console.log("✅ Changesets generated and committed.");
}

function generateAndAmendChangesets() {
  console.log("🔧 Generating and amending changesets to last commit...");
  const commits = getCommits();
  const changedFiles = getChangedFiles();

  assignBumpsPerPackage(commits, changedFiles);
  cleanupExistingAutoChangesets();
  addChangesetForAffectedPackages(packages);
  stageChangesetFiles();
  amendLastCommit();

  console.log("✅ Changesets generated and amended to last commit.");
}

function assignBumpsPerPackage(commits, changedFiles) {
  resetPackageBumps();
  const affectedPackages = determineAffectedPackages(changedFiles);
  logChangedInfo(changedFiles, affectedPackages);
  updatePackageBumps(affectedPackages, commits, changedFiles);
}

function resetPackageBumps() {
  Object.keys(packages).forEach((pkgKey) => {
    packages[pkgKey].bump = undefined;
  });
}

function determineAffectedPackages(changedFiles) {
  const affectedPackages = new Set();
  Object.keys(packages).forEach((pkgKey) => {
    const pkg = packages[pkgKey];
    if (isPackageAffected(pkg.dir, changedFiles)) {
      affectedPackages.add(pkgKey);
    }
  });
  return affectedPackages;
}

function isPackageAffected(packageDir, changedFiles) {
  return changedFiles.some((file) => file.startsWith(packageDir));
}

function logChangedInfo(changedFiles, affectedPackages) {
  console.log("📁 Changed files:", changedFiles);
  console.log(
    "🎯 Affected packages:",
    Array.from(affectedPackages).map((key) => packages[key].name),
  );
}

function updatePackageBumps(affectedPackages, commits, changedFiles) {
  affectedPackages.forEach((pkgKey) => {
    const pkg = packages[pkgKey];
    const relevantCommits = getRelevantCommitsForPackage(pkg.dir, commits, changedFiles);
    let highestBump = undefined;
    relevantCommits.forEach((commitMessage) => {
      const bump = determineBump(commitMessage);
      if (bump) {
        highestBump = getHighestBump(highestBump, bump);
      }
    });
    pkg.bump = highestBump;
  });
}

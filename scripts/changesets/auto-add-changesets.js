import { packages } from "./changeset-config.js";
import { cleanupExistingAutoChangesets, addChangesetForAffectedPackages } from "./services/changeset.js";
import { determineBump, getHighestBump } from "./services/commit.js";
import { getCommits, getChangedFiles, getRelevantCommitsForPackage } from "./services/git.js";

const commits = getCommits();
const changedFiles = getChangedFiles();

assignBumpsPerPackage(commits, changedFiles);
cleanupExistingAutoChangesets();
addChangesetForAffectedPackages(packages);

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

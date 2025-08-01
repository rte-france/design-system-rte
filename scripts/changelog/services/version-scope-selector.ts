import { PackageChangelog } from "../changelog.interface";

function _groupVersionsByMinorVersion(packageChangelog: PackageChangelog): Map<string, string[]> {
  const minorVersionGroups = new Map<string, string[]>();
  packageChangelog.forEach((_, versionName) => {
    const minorVersion = _getMinorVersion(versionName);
    if (!minorVersionGroups.has(minorVersion)) {
      minorVersionGroups.set(minorVersion, []);
    }
    minorVersionGroups.get(minorVersion)?.push(versionName);
  });
  return minorVersionGroups;
}

function _sortMinorVersions(minorVersionGroups: Map<string, string[]>, maxMinorVersions: number): string[] {
  return Array.from(minorVersionGroups.keys())
    .sort((a, b) => {
      const [aMajor, aMinor] = a.split(".").map(Number);
      const [bMajor, bMinor] = b.split(".").map(Number);
      return bMajor - aMajor || bMinor - aMinor;
    })
    .slice(0, maxMinorVersions);
}

function _filterPackageChangelogByMinorVersions(
  packageChangelog: PackageChangelog,
  sortedMinorVersions: string[],
  minorVersionGroups: Map<string, string[]>,
): PackageChangelog {
  const filteredPackageChangelog: PackageChangelog = new Map();
  sortedMinorVersions.forEach((minorVersion) => {
    const versionsInMinor = minorVersionGroups.get(minorVersion) || [];
    versionsInMinor.forEach((versionName) => {
      const contexts = packageChangelog.get(versionName);
      if (contexts) {
        filteredPackageChangelog.set(versionName, contexts);
      }
    });
  });
  return filteredPackageChangelog;
}

export function filterPackageChangelogByMinorVersions(
  packageChangelog: PackageChangelog,
  maxMinorVersions: number = 3,
): PackageChangelog {
  const minorVersionGroups = _groupVersionsByMinorVersion(packageChangelog);

  const sortedMinorVersions = _sortMinorVersions(minorVersionGroups, maxMinorVersions);

  const filteredPackageChangelog = _filterPackageChangelogByMinorVersions(
    packageChangelog,
    sortedMinorVersions,
    minorVersionGroups,
  );

  return filteredPackageChangelog;
}

function _getMinorVersion(version: string): string {
  const [major, minor] = version.split(".");
  return `${major}.${minor}`;
}

import { ChangeType, Context, Version } from "../changelog.interface";

const VERSION_HEADER_IDENTIFIER = "## ";
const CHANGE_TYPE_HEADER_IDENTIFIER = "### ";
const CHANGE_IDENTIFIER = "- ";

export function parseChangelogDocument(content: string): Map<string, Version> {
  const versions = _extractVersions(content);
  _assignChangesToVersions(versions, content);

  return versions;
}

function _extractVersions(document: string): Map<string, Version> {
  const lines = document.split("\n");
  const versions: Map<string, Version> = new Map();
  let currentVersion: string;

  lines.forEach((line) => {
    const lineContent = line.trim();
    if (_isVersionHeader(lineContent)) {
      currentVersion = _getVersionNameFromHeader(lineContent);
      versions.set(currentVersion, new Map());
    }

    if (_isChange(lineContent)) {
      if (_hasContextMark(lineContent)) {
        versions.get(currentVersion)?.set(_getContextFromLine(lineContent), new Context());
      }
      if (!versions.get(currentVersion)?.get("Other")) {
        versions.get(currentVersion)?.set("Other", new Context());
      }
    }
  });

  return versions;
}

function _assignChangesToVersions(versions: Map<string, Version>, document: string): void {
  const lines = document.split("\n");
  let currentVersion: string;
  let currentChangeType: ChangeType;

  lines.forEach((line) => {
    const lineContent = line.trim();
    if (_isVersionHeader(lineContent)) {
      currentVersion = _getVersionNameFromHeader(lineContent);
    }

    if (_isChangeTypeHeader(lineContent)) {
      currentChangeType = _getChangeTypeFromHeader(lineContent);
    }

    if (_isChange(lineContent)) {
      if (_hasContextMark(lineContent)) {
        versions
          .get(currentVersion)
          ?.get(_getContextFromLine(lineContent))
          ?.[currentChangeType].push(_getChangeFromLine(lineContent));
      } else {
        versions.get(currentVersion)?.get("Other")?.[currentChangeType].push(_getChangeFromLine(lineContent));
      }
    }
  });
}

function _isVersionHeader(lineContent: string): boolean {
  return lineContent.startsWith(VERSION_HEADER_IDENTIFIER);
}

function _getVersionNameFromHeader(lineContent: string): string {
  return lineContent.replace(VERSION_HEADER_IDENTIFIER, "");
}

function _isChangeTypeHeader(lineContent: string): boolean {
  return lineContent.startsWith(CHANGE_TYPE_HEADER_IDENTIFIER);
}

function _getChangeTypeFromHeader(lineContent: string): ChangeType {
  const changeType = lineContent.toLowerCase();
  if (changeType.includes("patch")) return "patch";
  if (changeType.includes("minor")) return "minor";
  if (changeType.includes("major")) return "major";
  throw new Error(`Invalid change type: ${changeType}`);
}

function _isChange(lineContent: string): boolean {
  return lineContent.startsWith(CHANGE_IDENTIFIER) && !lineContent.includes(VERSION_HEADER_IDENTIFIER);
}

function _getChangeFromLine(lineContent: string): string {
  const changeContent = lineContent.replace(CHANGE_IDENTIFIER, "").trim();
  return _hasContextMark(changeContent) ? changeContent.replace(/\([^)]*\)/g, "").trim() : changeContent;
}

function _hasContextMark(lineContent: string): boolean {
  return lineContent.includes("(") && lineContent.includes(")");
}

function _getContextFromLine(lineContent: string): string {
  const context = lineContent.split("(")[1].split(")")[0];
  return context.trim();
}

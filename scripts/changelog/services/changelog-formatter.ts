import { ChangeType, Context, PackageChangelog } from "../changelog.interface";

const VERSION_HEADER_IDENTIFIER = "##";
const CONTEXT_HEADER_IDENTIFIER = "###";
const CHANGE_TYPE_HEADER_IDENTIFIER = "####";
const CHANGE_IDENTIFIER = "-";

export function formatPackageChangelog(packageLog: PackageChangelog): string {
  const contentLines: string[] = [];
  packageLog.forEach((contexts, versionName) => {
    contentLines.push(_formatVersionHeader(versionName));
    const sortedContexts = _sortContexts(contexts);
    contentLines.push(_formatContexts(sortedContexts));
  });

  return contentLines.join("\n");
}

function _formatVersionHeader(versionName: string): string {
  return `${VERSION_HEADER_IDENTIFIER} ${versionName}\n`;
}

function _sortContexts(contexts: Map<string, Context>): [string, Context][] {
  return Array.from(contexts.entries()).sort(([a], [b]) => {
    if (a === "Other") return 1;
    if (b === "Other") return -1;
    return 0;
  });
}

function _formatContexts(contexts: [string, Context][]): string {
  const contentLines: string[] = [];
  contexts.forEach(([contextName, context]) => {
    if (!_hasOnlyOtherContext(contexts)) {
      contentLines.push(_formatContextHeader(contextName));
    }
    contentLines.push(_formatContext(context));
  });
  return contentLines.join("\n");
}

function _hasOnlyOtherContext(contexts: [string, Context][]): boolean {
  return contexts.length === 1 && contexts[0][0] === "Other";
}

function _formatContextHeader(contextName: string): string {
  return `${CONTEXT_HEADER_IDENTIFIER} ${contextName}\n`;
}

function _formatContext(context: Context): string {
  const changeTypes: ChangeType[] = ["major", "minor", "patch"];
  const contentLines: string[] = [];

  changeTypes.forEach((changeType) => {
    if (context[changeType].length) {
      contentLines.push(_formatChangeType(context, changeType));
    }
  });

  return contentLines.join("\n");
}

function _formatChangeTypeHeader(changeType: ChangeType): string {
  return `${CHANGE_TYPE_HEADER_IDENTIFIER} ${changeType.charAt(0).toUpperCase() + changeType.slice(1)} Changes\n`;
}

function _formatChangeType(context: Context, changeType: ChangeType): string {
  const contentLines: string[] = [];
  const changes = context[changeType];

  if (changes.length > 0) {
    contentLines.push(_formatChangeTypeHeader(changeType));
    changes.forEach((change) => {
      contentLines.push(_formatChange(change));
    });
  }
  contentLines.push("");

  return contentLines.join("\n");
}

function _formatChange(change: string): string {
  return `${CHANGE_IDENTIFIER} ${change}`;
}

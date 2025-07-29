export type ChangeType = "patch" | "minor" | "major";

export class Context {
  major: string[] = [];
  minor: string[] = [];
  patch: string[] = [];
}

export type Version = Map<string, Context>;

export type PackageChangelog = Map<string, Version>;

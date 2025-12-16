import { execSync } from "node:child_process";

type Candidate = {
  tag: string;
  year: number;
  month: number;
  day: number;
  patchNumber: number;
};

function listTags(): string[] {
  execSync("git fetch --tags --force", { stdio: "inherit" });

  const out = execSync("git tag --list", { encoding: "utf8" });
  return out
    .split("\n")
    .map((t) => t.trim())
    .filter(Boolean);
}

function parseDateTag(tag: string): Candidate | null {
  const NPM_PACKAGE_IDENTIFIER = "@design-system-rte/";
  
  if (tag.startsWith(NPM_PACKAGE_IDENTIFIER)) return null;

  return extractDateFromTag(tag);
}

function extractDateFromTag(tag: string): Candidate | null {
  const dateMatch = /^(\d{2})-(\d{2})-(\d{4})\.(\d+)$/.exec(tag);
  if (!dateMatch) return null;

  const day = Number(dateMatch[1]);
  const month = Number(dateMatch[2]);
  const year = Number(dateMatch[3]);
  const patchNumber = Number(dateMatch[4]);

  if (!validateDateMatch(day, month)) {
    return null;
  }

  return { tag, year, month, day, patchNumber };
}

function validateDateMatch(day: number, month: number): boolean {
  return month >= 1 && month <= 12 && day >= 1 && day <= 31
}

function compareCandidates(a: Candidate, b: Candidate): number {
  if (a.year !== b.year) return a.year - b.year;
  if (a.month !== b.month) return a.month - b.month;
  if (a.day !== b.day) return a.day - b.day;
  return a.patchNumber - b.patchNumber;
}

function getLatestDateTag(): void {
  const tags = listTags();
  const candidates = tags
    .map(parseDateTag)
    .filter((x): x is Candidate => x !== null)
    .sort(compareCandidates);

  if (candidates.length === 0) {
    console.error("No date tags found matching DD-MM-YYYY.N");
    process.exit(1);
  }

  const latest = candidates[candidates.length - 1].tag;
  process.stdout.write(latest);
}

getLatestDateTag();

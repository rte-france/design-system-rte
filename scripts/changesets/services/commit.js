export function determineBump(message) {
  if (message.includes("BREAKING CHANGE") || message.includes("!:")) {
    return "major";
  }

  if (message.startsWith("feat")) {
    return "minor";
  }

  if (message.startsWith("fix")) {
    return "patch";
  }

  return null;
}

export function getHighestBump(currentBump, newBump) {
  const BUMP_PRIORITIES = ["patch", "minor", "major"];
  const currentIndex = BUMP_PRIORITIES.indexOf(currentBump || "none");
  const newIndex = BUMP_PRIORITIES.indexOf(newBump);

  return newIndex > currentIndex ? newBump : currentBump;
}

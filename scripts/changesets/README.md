# Changeset Automation Scripts

This directory contains scripts for automatically generating changesets based on commit messages and file changes.

## Available Commands

### `npm run auto-changesets`
**Default behavior (amend mode)**: Generates changesets and amends them to the last commit.

### `npm run auto-changesets:commit`
**Commit mode**: Generates changesets and creates a new commit.
- Generates changesets based on commit messages and file changes
- Creates a new commit with message "chore: auto-generated changesets"
- Useful when you want changesets in a separate commit

### `npm run auto-changesets:amend`
**Amend mode**: Generates changesets and amends them to the last commit.
- Same as the default behavior
- Useful when you want to include changesets in the current commit

## How It Works

1. **Analyzes commits**: Reads recent commits to determine version bumps (patch, minor, major)
2. **Detects affected packages**: Identifies which packages have been modified
3. **Generates changesets**: Creates appropriate changeset files for affected packages
4. **Handles files**: Either creates a new commit or amends to last commit based on mode

## Usage Examples

```bash
# Generate and amend to last commit (default)
npm run auto-changesets

# Generate and create new commit
npm run auto-changesets:commit

# Explicitly use amend mode
npm run auto-changesets:amend
```

## Supported Bump Types

The script analyzes commit messages to determine version bumps:
- `fix:` → patch bump
- `feat:` → minor bump  
- `BREAKING CHANGE:` → major bump
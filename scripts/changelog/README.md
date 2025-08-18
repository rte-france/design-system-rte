# Changelog Generation Scripts

This directory contains scripts for automatically generating consolidated changelogs from individual package changelog files.

## Available Commands

### `npm run changelog`
Generates a consolidated changelog by combining the latest changes from all packages.
- Reads individual package changelog files
- Filters to show only the last 3 minor versions per package
- Generates a unified changelog at the root level
- Outputs to `CHANGELOG.md` in the project root

## How It Works

The changelog generation process follows these steps:

1. **Package Discovery**: Identifies all packages with changelog files:
   - Angular (`packages/angular/projects/ds-rte-lib/CHANGELOG.md`)
   - React (`packages/react/CHANGELOG.md`)
   - Core (`packages/core/CHANGELOG.md`)
   - Design Docs (`packages/design-docs/CHANGELOG.md`)

2. **Document Parsing**: For each package changelog:
   - Extracts version headers (e.g., `## 1.2.3`)
   - Identifies change type sections (Patch, Minor, Major)
   - Parses individual changes with context markers
   - Organizes changes by version, context, and type

3. **Version Filtering**: 
   - Groups versions by minor version (e.g., `1.2.x`)
   - Sorts by semantic version order (newest first)
   - Keeps only the last 3 minor versions per package
   - Filters out older versions to keep changelog focused

4. **Content Formatting**: 
   - Reconstructs changelog with consistent structure
   - Maintains context grouping (e.g., `(Angular)`, `(React)`)
   - Preserves change type categorization
   - Outputs clean, unified markdown format

## Architecture

### Core Files
- **`generate-changelog.ts`**: Main entry point that orchestrates the generation process
- **`changelog.interface.ts`**: TypeScript interfaces defining the data structures

### Services
- **`document-parser.ts`**: Parses markdown changelog files into structured data
- **`version-scope-selector.ts`**: Filters versions based on minor version grouping
- **`changelog-formatter.ts`**: Formats parsed data back into markdown

### Data Flow
```
Package CHANGELOG.md → Document Parser → Version Filter → Formatter → Consolidated CHANGELOG.md
```

## Configuration

### Version Filtering
- **Default**: Shows last 3 minor versions per package
- **Configurable**: Modify `MINOR_VERSIONS_COUNT` in `generate-changelog.ts`

## Usage Examples

```bash
# Generate consolidated changelog
npm run changelog

# Run directly with tsx
npx tsx scripts/changelog/generate-changelog.ts
```

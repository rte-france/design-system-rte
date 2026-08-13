import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateComponent() {
  const componentName = getComponentName();
  const componentDir = getComponentDir(componentName);
  const storiesDir = path.join(componentDir, "stories");
  const docsDir = path.join(componentDir, "docs");

  createDirectories(componentDir, storiesDir, docsDir);
  createComponentFiles(componentName, componentDir, storiesDir);
  generateDocs(componentName, docsDir);

  console.log(`Component ${componentName} and its story have been created.`);
}

function getComponentName() {
  const componentName = process.argv[2];
  if (!componentName) {
    console.error("Please provide a component name.");
    process.exit(1);
  }

  return componentName;
}

function getComponentDir(componentName) {
  const pkgRoot = path.resolve(__dirname, "..");
  return path.join(pkgRoot, "src", "components", toCamelCase(componentName));
}

function createDirectories(...directories) {
  directories.forEach((directory) => fs.mkdirSync(directory, { recursive: true }));
}

function createComponentFiles(componentName, componentDir, storiesDir) {
  fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), getComponentTemplate(componentName));
  fs.writeFileSync(path.join(storiesDir, `${componentName}.stories.tsx`), getStoriesTemplate(componentName));
  fs.writeFileSync(path.join(componentDir, `${componentName}.module.scss`), getScssTemplate(componentName));
}

function getComponentTemplate(componentName) {
  return `import styles from "./${componentName}.module.scss";
  
  const ${componentName} = () => {
  return <div>${componentName}</div>;
};

export default ${componentName};
`;
}

function getStoriesTemplate(componentName) {
  return `import type { Meta, StoryObj } from "@storybook/react";
import ${componentName} from "../${componentName}";

const meta = {
  title: "Composants/${componentName}/${componentName}",
  component: ${componentName},
  tags: ["autodocs"],
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
`;
}

function getScssTemplate(componentName) {
  return `@use '@design-system-rte/core/design-tokens/main-internal.scss' as *;
// Styles for ${componentName} will go here.
`;
}

function generateDocs(componentName, dir) {
  const overviewTemplate = `\`\`\`tsx
import { ${componentName} } from "@design-system-rte/react";
\`\`\``;

  fs.writeFileSync(path.join(dir, `Overview.md`), overviewTemplate);
  fs.writeFileSync(path.join(dir, `Usage.md`), "");
  fs.writeFileSync(path.join(dir, `API.md`), "");
  fs.writeFileSync(path.join(dir, `FAQ.md`), "");
  fs.writeFileSync(path.join(dir, `Limitation.md`), "");
}

function toCamelCase(value) {
  return value
    .replace(/^[A-Z]+/, (letters) => letters.toLowerCase())
    .replace(/[-_\s]+(.)?/g, (_, character) => character?.toUpperCase() ?? "");
}

generateComponent();

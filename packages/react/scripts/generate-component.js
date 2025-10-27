import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateComponent() {
  const componentName = process.argv[2];
  if (!componentName) {
    console.error("Please provide a component name.");
    process.exit(1);
  }

  const pkgRoot = path.resolve(__dirname, `..`);

  const componentDir = path.join(pkgRoot, "src", "components", componentName.toLocaleLowerCase());
  const storiesDir = path.join(componentDir, "stories");

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }
  if (!fs.existsSync(storiesDir)) {
    fs.mkdirSync(storiesDir, { recursive: true });
  }

  const componentTemplate = `import styles from "./${componentName}.module.scss";
  
  const ${componentName} = () => {
  return <div>${componentName}</div>;
};

export default ${componentName};
`;

  const storiesTemplate = `import type { Meta, StoryObj } from "@storybook/react";
import ${componentName} from "../${componentName}";

const meta = {
  title: "${componentName}",
  component: ${componentName},
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
`;

  fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentTemplate);
  fs.writeFileSync(path.join(storiesDir, `${componentName}.stories.tsx`), storiesTemplate);
  fs.writeFileSync(
    path.join(componentDir, `${componentName}.module.scss`),
    `@use '@design-system-rte/core/design-tokens/main-internal.scss' as *;
// Styles for ${componentName} will go here.`,
  );

  console.log(`Component ${componentName} and its story have been created.`);
}

generateComponent();

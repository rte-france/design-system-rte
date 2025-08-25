import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { BreadcrumbsComponent } from "./breadcrumbs.component";

export default {
  title: "Breadcrumbs",
  component: BreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      declarations: [BreadcrumbsComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const mockItems = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "Electronics", link: "/products/electronics" },
  { label: "Smartphones", link: "/products/electronics/smartphones" },
];

const Template: StoryObj<BreadcrumbsComponent> = {
  args: {
    items: mockItems,
  },
};

export const Default = Template;

export const Truncated = Template;
Truncated.args = {
  items: mockItems.slice(0, 2),
};

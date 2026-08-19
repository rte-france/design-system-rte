import { userEvent } from "@storybook/test";

export const focusElementBeforeComponent = async () => {
  await userEvent.tab();
};

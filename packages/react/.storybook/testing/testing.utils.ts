import { userEvent } from "@storybook/test";

export const focusElementBeforeComponent = async () => {
  await userEvent.tab();
};

export const acceptLogError = (errorMessage: string) => {
  const originalConsoleError = console.error;

  console.error = (...args: unknown[]) => {
    if (args[0] !== errorMessage) {
      originalConsoleError(...args);
    }
  };

  return () => {
    console.error = originalConsoleError;
  };
};

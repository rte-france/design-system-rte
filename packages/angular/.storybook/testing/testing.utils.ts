import { expect, userEvent } from "@storybook/test";

export const focusElementBeforeComponent = async () => {
  await userEvent.tab();
};

function consoleArgsIncludeMessage(args: unknown[], expectedMessage: string): boolean {
  return args.some((arg) => {
    return arg instanceof Error ? arg.message === expectedMessage : String(arg).includes(expectedMessage);
  });
}

export const acceptLogError = (errorMessage: string) => {
  const originalConsoleError = console.error;

  console.error = (...args: unknown[]) => {
    if (!consoleArgsIncludeMessage(args, errorMessage)) {
      originalConsoleError(...args);
    }
  };

  return () => {
    console.error = originalConsoleError;
  };
};

export async function expectConsoleErrorDuring(expectedMessage: string, action: () => Promise<void>): Promise<void> {
  let seenExpectedMessage = false;
  const originalConsoleError = console.error;

  console.error = (...args: unknown[]) => {
    if (consoleArgsIncludeMessage(args, expectedMessage)) {
      seenExpectedMessage = true;
    }
    originalConsoleError.apply(console, args);
  };

  try {
    await action();
  } finally {
    console.error = originalConsoleError;
  }

  expect(seenExpectedMessage).toBe(true);
}

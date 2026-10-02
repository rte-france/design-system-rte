import { expect, userEvent } from "@storybook/test";

export const focusElementBeforeComponent = async () => {
  await userEvent.tab();
};

function consoleArgsIncludeMessage(args: unknown[], expectedMessage: string): boolean {
  return args.some((arg) => {
    if (arg instanceof Error) {
      return arg.message === expectedMessage;
    }
    return String(arg).includes(expectedMessage);
  });
}

export const acceptLogError = (errorMessage: string) => {
  const consoleError = console.error;

  console.error = (...args: unknown[]) => {
    if (!consoleArgsIncludeMessage(args, errorMessage)) {
      consoleError(...args);
    }
  };

  return () => {
    console.error = consoleError;
  };
};

export async function expectConsoleErrorDuring(expectedMessage: string, action: () => Promise<void>): Promise<void> {
  const loggedCalls: unknown[][] = [];
  const consoleError = console.error;

  console.error = (...args: unknown[]) => {
    loggedCalls.push(args);
    consoleError(...args);
  };

  try {
    await action();
  } finally {
    console.error = consoleError;
  }

  expect(loggedCalls.some((args) => consoleArgsIncludeMessage(args, expectedMessage))).toBe(true);
}

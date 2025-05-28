import clsx from "clsx";

export function concatClassNames(...classes: (string | undefined | null | false)[]): string {
  return clsx(...classes);
}

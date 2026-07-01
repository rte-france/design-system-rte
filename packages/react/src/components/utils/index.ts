import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

export function concatClassNames(...classes: (string | undefined | null | false)[]): string {
  return clsx(...classes);
}

export function deleteFromProps<Props extends TextareaHTMLAttributes<HTMLTextAreaElement>>(
  props: Props,
  target: string,
): Props {
  const newProps = { ...props };
  delete newProps[target as keyof Props];
  return newProps;
}

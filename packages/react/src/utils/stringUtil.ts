import { getStringWidthFromContext } from "@design-system-rte/core/components/file-upload/file-upload.util";

export const computeContextStyle = (fileNameElement: HTMLElement) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  const style = window.getComputedStyle(fileNameElement);
  ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  return ctx;
};

export const getTextWidth = (fileNameElement: HTMLElement) => {
  const ctx = computeContextStyle(fileNameElement);
  return getStringWidthFromContext(ctx);
};

export const getComputedFont = (element: HTMLElement): string => {
  const style = window.getComputedStyle(element);
  return `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
};

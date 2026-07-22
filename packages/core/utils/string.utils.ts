export const getTextWidth = (element: HTMLElement) => {
  const ctx = computeContextStyle(element);
  return getStringWidthFromContext(ctx);
};

export const getComputedFont = (element: HTMLElement): string => {
  const { fontWeight, fontSize, fontFamily } = window.getComputedStyle(element);
  return `${fontWeight} ${fontSize} ${fontFamily}`;
};

export const getStringWidthFromContext = (ctx: CanvasRenderingContext2D) => (t: string) => ctx.measureText(t).width;

const computeContextStyle = (element: HTMLElement) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  ctx.font = getComputedFont(element);
  return ctx;
};

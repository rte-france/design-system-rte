export const computeTransform = (isAnimating: boolean, drawerLeftPosition: number, padding: number = 0) => {
  return isAnimating ? `translateX(-${drawerLeftPosition + padding}px)` : "none";
};

export function waitForNextFrame(callback: () => void): () => void {
  let innerFrameId = 0;
  const outerFrameId = requestAnimationFrame(() => {
    innerFrameId = requestAnimationFrame(() => {
      innerFrameId = 0;
      callback();
    });
  });

  return () => {
    cancelAnimationFrame(outerFrameId);
    if (innerFrameId !== 0) {
      cancelAnimationFrame(innerFrameId);
    }
  };
}

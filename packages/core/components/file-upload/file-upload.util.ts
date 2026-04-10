export const getStringWidthFromContext = (ctx: CanvasRenderingContext2D) => (t: string) => ctx.measureText(t).width;

export const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(2)} Ko`;
  if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(2)} Mo`;
  return `${(bytes / 1024 ** 3).toFixed(2)} Go`;
};

export const extractFileNameParts = (name: string) => {
  const fileTypeIndex = name.lastIndexOf(".");
  const fileType = fileTypeIndex !== -1 ? name.substring(fileTypeIndex) : "";
  const baseName = fileTypeIndex !== -1 ? name.substring(0, fileTypeIndex) : name;
  return { baseName, fileType };
};

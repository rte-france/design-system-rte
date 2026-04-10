import { FileItemProps } from "@design-system-rte/core";
import {
  extractFileNameParts,
  formatFileSize,
  getStringWidthFromContext,
} from "@design-system-rte/core/components/file-upload/file-upload.util";
import { useEffect, useRef, useState } from "react";

import AssistiveText from "../../assistivetext/AssistiveText";
import Icon from "../../icon/Icon";
import IconButton from "../../iconButton/IconButton";
import Loader from "../../loader/Loader";
import Tooltip from "../../tooltip/Tooltip";

import styles from "./FileItem.module.scss";

const FileItem = ({ file, removeFile, isError, errorMessage, compact, isLoading }: FileItemProps) => {
  const fileNameRef = useRef<HTMLSpanElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const fileSizeRef = useRef<HTMLSpanElement>(null);
  const fileInfoRef = useRef<HTMLDivElement>(null);

  const [truncatedFileName, setTruncatedFileName] = useState(file.name);

  const [hasEllipsis, setHasEllipsis] = useState(false);

  const truncateFileName = (fileName: string): string => {
    const availableWidth = getAvailableWidth();
    const ellipsis = "...";
    const { baseName, fileType } = extractFileNameParts(fileName);
    const defaultTruncatedName = `${ellipsis}${fileType}`;

    if (availableWidth <= 0) {
      return defaultTruncatedName;
    } else {
      const fileNameElement = fileNameRef.current;
      if (!fileNameElement) {
        return fileName;
      } else {
        const ctx = computeContextStyle(fileNameElement);
        const getTextWidth = getStringWidthFromContext(ctx);

        if (getTextWidth(fileName) <= availableWidth) return fileName;

        const availableFileNameSpace = availableWidth - getTextWidth(ellipsis) - getTextWidth(fileType);

        if (availableFileNameSpace <= 0) return defaultTruncatedName;

        let lowerIndex = 0;
        let higherIndex = baseName.length;
        while (lowerIndex < higherIndex) {
          const midIndex = Math.ceil((lowerIndex + higherIndex) / 2);
          const { startStr, endStr } = computeStartAndEndStr(midIndex, baseName);
          if (getTextWidth(startStr) + getTextWidth(endStr) <= availableFileNameSpace) {
            lowerIndex = midIndex;
          } else {
            higherIndex = midIndex - 1;
          }
        }

        if (lowerIndex === 0) return defaultTruncatedName;

        const prefixLength = Math.ceil(lowerIndex / 2);
        const suffixLength = Math.floor(lowerIndex / 2);
        const startStr = prefixLength > 0 ? baseName.substring(0, prefixLength) : "";
        const endStr = suffixLength > 0 ? baseName.substring(baseName.length - suffixLength) : "";

        return `${startStr}${ellipsis}${endStr}${fileType}`;
      }
    }
  };

  const getAvailableWidth = () => {
    const fileNameElement = fileNameRef.current;
    const sizeElement = fileSizeRef.current;
    const fileInformationElement = fileInfoRef.current;

    if (!fileNameElement || !sizeElement || !fileInformationElement) {
      return 0;
    } else {
      const gap = parseFloat(window.getComputedStyle(fileInformationElement).gap) || 0;
      const availableWidth = fileInformationElement.offsetWidth - sizeElement.offsetWidth - gap;
      return availableWidth;
    }
  };

  const computeContextStyle = (fileNameElement: HTMLSpanElement) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const style = window.getComputedStyle(fileNameElement);
    ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    return ctx;
  };

  const computeStartAndEndStr = (mid: number, baseName: string) => {
    const startIndex = Math.ceil(mid / 2);
    const endIndex = Math.floor(mid / 2);
    const startStr = startIndex > 0 ? baseName.substring(0, startIndex) : "";
    const endStr = endIndex > 0 ? baseName.substring(baseName.length - endIndex) : "";

    return { startStr, endStr };
  };

  useEffect(() => {
    const truncated = truncateFileName(file.name);
    setHasEllipsis(truncated !== file.name);
    setTruncatedFileName(truncated);
  }, [file]);

  return (
    <>
      <div className={styles["rte-file-upload-file-container"]}>
        <div className={styles["rte-file-upload-file"]}>
          <div className={styles["rte-file-upload-file-icon"]} ref={iconRef}>
            {isLoading ? (
              <Loader size="small" showLabel={false} />
            ) : (
              <>
                {isError ? (
                  <Icon name="error" size={20} color="var(--content-danger-default)" />
                ) : (
                  <Icon name="check-circle" size={20} color="var(--content-success-default)" />
                )}
              </>
            )}
          </div>
          <div ref={fileInfoRef} className={styles["rte-file-upload-file-info"]}>
            {hasEllipsis ? (
              <Tooltip
                label={file.name}
                alignment="center"
                arrow={true}
                shouldFocusTrigger={false}
                triggerStyles={{
                  maxWidth: `220px`,
                }}
              >
                <span ref={fileNameRef} className={styles["rte-file-upload-file-name"]} data-is-compact={compact}>
                  {truncatedFileName}
                </span>
              </Tooltip>
            ) : (
              <span ref={fileNameRef} className={styles["rte-file-upload-file-name"]} data-is-compact={compact}>
                {file.name}
              </span>
            )}
            <span ref={fileSizeRef} className={styles["rte-file-upload-file-size"]} data-is-compact={compact}>
              {formatFileSize(file.size)}
            </span>
          </div>
          <IconButton ref={closeButtonRef} name="close" variant="neutral" onClick={removeFile} size="m" />
        </div>
        {errorMessage && <AssistiveText label={errorMessage} appearance="error" />}
      </div>
    </>
  );
};

export default FileItem;

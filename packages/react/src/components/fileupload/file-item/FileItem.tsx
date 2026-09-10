import { FileItemProps, getTextWidth } from "@design-system-rte/core";
import { extractFileNameParts, formatFileSize } from "@design-system-rte/core/components/file-upload/file-upload.util";
import { FILE_UPLOAD_ITEM_ARIA_LABELS } from "@design-system-rte/core/dist/components/file-upload/file-upload.constants";
import { useCallback, useEffect, useRef, useState } from "react";

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

  const truncateFileName = useCallback((fileName: string): string => {
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
        const textWidth = getTextWidth(fileNameElement);

        if (textWidth(fileName) <= availableWidth) return fileName;

        const availableFileNameSpace = availableWidth - textWidth(ellipsis) - textWidth(fileType);

        if (availableFileNameSpace <= 0) return defaultTruncatedName;

        let lowerIndex = 0;
        let higherIndex = baseName.length;
        while (lowerIndex < higherIndex) {
          const midIndex = Math.ceil((lowerIndex + higherIndex) / 2);
          const { startStr, endStr } = computeStartAndEndStr(midIndex, baseName);
          if (textWidth(startStr) + textWidth(endStr) <= availableFileNameSpace) {
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
  }, []);

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
  }, [file, truncateFileName]);

  return (
    <>
      <div className={styles["rte-file-upload-file-container"]}>
        <div className={styles["rte-file-upload-file"]}>
          <div className={styles["rte-file-upload-file-icon"]} ref={iconRef} aria-live="polite" aria-atomic="true">
            {isLoading ? (
              <>
                <span className={styles["sr-only"]}>{FILE_UPLOAD_ITEM_ARIA_LABELS.LOADING}</span>
                <Loader size="small" showLabel={false} aria-hidden="true" />
              </>
            ) : (
              <>
                {isError ? (
                  <>
                    <span className={styles["sr-only"]}>{FILE_UPLOAD_ITEM_ARIA_LABELS.ERROR}</span>
                    <Icon aria-hidden="true" name="error" size={20} color="var(--content-danger-default)" />
                  </>
                ) : (
                  <>
                    <span className={styles["sr-only"]}>{FILE_UPLOAD_ITEM_ARIA_LABELS.SUCCESS}</span>
                    <Icon
                      aria-hidden="true"
                      name="check-circle"
                      size={20}
                      color="var(--content-success-default)"
                      aria-label={FILE_UPLOAD_ITEM_ARIA_LABELS.SUCCESS}
                    />
                  </>
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

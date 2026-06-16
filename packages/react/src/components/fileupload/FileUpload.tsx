import { FileUploadProps } from "@design-system-rte/core";
import { useRef, useState } from "react";

import { generateId } from "../../utils";
import AssistiveText from "../assistivetext/AssistiveText";
import Button from "../button/Button";
import Label from "../label/Label";

import FileItem from "./file-item/FileItem";
import styles from "./FileUpload.module.scss";

const FileUpload = ({
  id,
  compactSpacing,
  label,
  showLabel = true,
  required = false,
  showLabelRequirement = false,
  disabled = false,
  assistiveTextLabel,
  assistiveAppearance = "description",
  showAssistiveText = true,
  showAssistiveIcon,
  assistiveTextLink,
  isError,
  multiple = false,
  buttonLabel,
  accept,
  onChange,
  onUpload,
  errorFilesMap = [],
  onRemovingFile,
}: FileUploadProps) => {
  const localId = id ?? generateId();
  const labelId = generateId();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null);
  const [loadingFiles, setLoadingFiles] = useState<Set<File>>(new Set());

  const shouldDisplayAssistiveText =
    showAssistiveText && assistiveTextLabel && assistiveAppearance && errorFilesMap?.length === 0;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    onChange?.(files);
    setSelectedFiles(files);

    if (onUpload) {
      files.forEach((file) => {
        handleUploadFile(file);
      });
    }
  };

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const fileInput = document.getElementById(localId);
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleRemoveFile = (file: File) => {
    if (selectedFiles) {
      const index = selectedFiles.indexOf(file);
      if (index !== -1) {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(newFiles);
        onRemovingFile?.(file);
        onChange?.(newFiles);
      }
    }
  };

  const handleUploadFile = (file: File) => {
    setLoadingFiles((prev) => new Set(prev).add(file));
    onUpload!(file).finally(() => {
      setLoadingFiles((prev) => {
        const next = new Set(prev);
        next.delete(file);
        return next;
      });
    });
  };

  return (
    <div className={styles["rte-file-upload"]}>
      {showLabel && (
        <Label
          htmlFor={localId}
          id={labelId}
          label={label}
          required={required}
          showLabelRequirement={showLabelRequirement}
        />
      )}
      {shouldDisplayAssistiveText && (
        <AssistiveText
          label={assistiveTextLabel}
          appearance={isError ? "error" : assistiveAppearance}
          showIcon={showAssistiveIcon}
          href={assistiveTextLink}
        />
      )}
      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        id={localId}
        className={styles["rte-file-upload-input"]}
        onChange={handleOnChange}
        aria-label={showLabel ? undefined : label}
        aria-labelledby={labelId}
        disabled={disabled}
        accept={accept}
      />
      <Button
        disabled={disabled}
        variant="primary"
        label={buttonLabel}
        onClick={handleOnClick}
        icon="upload"
        iconPosition="left"
        ref={buttonRef}
        size={compactSpacing ? "s" : "m"}
        className={compactSpacing ? styles["rte-file-upload-button-compact"] : undefined}
      />

      <div style={{ width: buttonRef.current?.offsetWidth ?? undefined }}>
        {selectedFiles?.map((file, index) => (
          <FileItem
            key={file.lastModified + index}
            file={file}
            removeFile={() => handleRemoveFile(file)}
            isLoading={loadingFiles.has(file)}
            isError={errorFilesMap?.[index] !== undefined}
            errorMessage={errorFilesMap?.[index]}
            compact={compactSpacing}
          />
        ))}
      </div>
    </div>
  );
};

export default FileUpload;

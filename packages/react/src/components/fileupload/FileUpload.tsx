import { FileUploadProps, generateId } from "@design-system-rte/core";
import { useRef, useState } from "react";

import AssistiveText from "../assistivetext/AssistiveText";
import Button from "../button/Button";
import Label from "../label/Label";

import FileItem from "./file-item/FileItem";
import styles from "./FileUpload.module.scss";

const FileUpload = ({
  id,
  compactSpacing,
  label,
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
  uploadErrorMessage = "Erreur lors du téléchargement du fichier.",
  errorFilesMap = [],
  onRemovingFile,
}: FileUploadProps) => {
  const localId = id ?? generateId();
  const labelId = generateId();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null);
  const [loadingFiles, setLoadingFiles] = useState<Set<File>>(new Set());
  const [removalAnnouncement, setRemovalAnnouncement] = useState("");

  const [uploadErrors, setUploadErrors] = useState<Map<File, string>>(new Map());

  const shouldDisplayAssistiveText =
    showAssistiveText &&
    assistiveTextLabel &&
    assistiveAppearance &&
    errorFilesMap.length === 0 &&
    uploadErrors.size === 0;

  const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    onChange?.(files);
    if (multiple) {
      setSelectedFiles((prev) => {
        const next = prev ? [...prev, ...files] : files;
        return next;
      });
    } else {
      setSelectedFiles(files);
      setUploadErrors(new Map());
    }

    if (onUpload) {
      await Promise.all(files.map((file) => handleUploadFile(file)));
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
        setRemovalAnnouncement(
          `${file.name} a été supprimé. ${newFiles.length} fichier${newFiles.length > 1 ? "s" : ""} restant${newFiles.length > 1 ? "s" : ""}.`,
        );
        setLoadingFiles((prev) => {
          const next = new Set(prev);
          next.delete(file);
          return next;
        });
        setUploadErrors((prev) => {
          const next = new Map(prev);
          next.delete(file);
          return next;
        });
        onRemovingFile?.(file);
        onChange?.(newFiles);
        if (buttonRef.current) {
          if (inputRef.current) {
            inputRef.current.value = "";
          }
          buttonRef.current?.focus();
        }
      }
    }
  };

  const handleUploadFile = (file: File) => {
    setLoadingFiles((prev) => new Set(prev).add(file));
    return onUpload!(file)
      .then(() => {
        setLoadingFiles((prev) => {
          const next = new Set(prev);
          next.delete(file);
          return next;
        });
      })
      .catch((error: unknown) => {
        setLoadingFiles((prev) => {
          const next = new Set(prev);
          next.delete(file);
          return next;
        });
        const message = typeof uploadErrorMessage === "function" ? uploadErrorMessage(file, error) : uploadErrorMessage;
        setUploadErrors((prev) => new Map(prev).set(file, message));
      });
  };

  return (
    <div className={styles["rte-file-upload"]}>
      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        id={localId}
        className={styles["rte-file-upload-input"]}
        onChange={handleOnChange}
        aria-labelledby={label ? labelId : `${localId}-button`}
        aria-describedby={shouldDisplayAssistiveText ? `${localId}-assistive-text` : undefined}
        disabled={disabled}
        accept={accept}
      />
      {label && (
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
          id={`${localId}-assistive-text`}
          label={assistiveTextLabel}
          appearance={isError ? "error" : assistiveAppearance}
          showIcon={showAssistiveIcon}
          href={assistiveTextLink}
        />
      )}

      <Button
        id={`${localId}-button`}
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
            isError={errorFilesMap[index] !== undefined || uploadErrors.has(file)}
            errorMessage={uploadErrors.get(file) ?? errorFilesMap[index]}
            compact={compactSpacing}
          />
        ))}
      </div>
      <div role="status" aria-live="polite" aria-atomic="true" className={styles["sr-only"]}>
        {removalAnnouncement}
      </div>
    </div>
  );
};

export default FileUpload;

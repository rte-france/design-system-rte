import { InputProps } from "../common/input-props";

export interface FileUploadProps extends Omit<InputProps, "value" | "onChange"> {
  id: string;
  label: string;
  showLabel?: boolean;
  compactSpacing?: boolean;
  multiple?: boolean;
  buttonLabel: string;
  accept?: string;
  onChange?: (files: File[]) => void;
  onUpload?: (file: File) => Promise<void>;
  errorFilesMap?: string[];
  onRemovingFile?: (file: File) => void;
  onUploadingFile?: (file: File) => void;
}

export interface FileItemProps {
  file: File;
  removeFile: () => void;
  isError?: boolean;
  errorMessage?: string;
  compact?: boolean;
  isLoading?: boolean;
}

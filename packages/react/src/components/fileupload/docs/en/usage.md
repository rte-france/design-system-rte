Import `FileUpload` and manage the selected files in parent state through `onChange`. Validation, size limits, and upload logic are consumer responsibilities.

Pass per-file errors through `errorFilesMap` and field-level errors through `isError` and `assistiveTextLabel`.

```tsx
const [files, setFiles] = useState<File[]>([]);
const [errorFilesMap, setErrorFilesMap] = useState<string[]>([]);

const handleChange = (newFiles: File[]) => {
  setFiles(newFiles);
  // Validate files and update errorFilesMap / isError
};

const handleRemovingFile = (file: File) => {
  setFiles((prev) => prev.filter((currentFile) => currentFile !== file));
  // Sync errorFilesMap after removal
};

return (
  <FileUpload
    id="documents-upload"
    label="Upload your documents"
    buttonLabel="Select a file"
    required
    assistiveTextLabel="Accepted formats: .jpg, .png, .pdf"
    showAssistiveIcon
    errorFilesMap={errorFilesMap}
    onChange={handleChange}
    onRemovingFile={handleRemovingFile}
  />
);
```

#### Disabled

```tsx
<FileUpload
  id="file-upload-disabled"
  label="Upload your documents"
  buttonLabel="Select a file"
  disabled
/>
```

Disables both the hidden file input and the upload button.

#### Multiple Files

```tsx
<FileUpload
  id="file-upload-multiple"
  label="Upload your documents"
  buttonLabel="Select a file"
  multiple
  onChange={(files) => setFiles(files)}
/>
```

Allows selecting more than one file in the native picker.

#### With Error

```tsx
<FileUpload
  id="file-upload-error"
  label="Upload your documents"
  buttonLabel="Select a file"
  assistiveTextLabel="Please select a file before submitting."
  isError
  showAssistiveText={files.length === 0}
  onChange={(newFiles) => setFiles(newFiles)}
/>
```

Shows field-level assistive text in error appearance when no files are selected.

#### Without Label

```tsx
<FileUpload
  id="file-upload-no-label"
  label="Upload your documents"
  buttonLabel="Select a file"
  showLabel={false}
/>
```

Hides the visible label and exposes the label text to assistive technologies via `aria-label`.

#### Compact Spacing

```tsx
<FileUpload
  id="file-upload-compact"
  label="Upload your documents"
  buttonLabel="Select a file"
  compactSpacing
/>
```

Reduces spacing on the upload button and file list items.

#### Max Size Exceeded

```tsx
const [errorFilesMap, setErrorFilesMap] = useState<string[]>([]);
const [error, setError] = useState<string>();

const handleChange = (files: File[]) => {
  if (files.some((file) => file.size > 1024)) {
    setError("One or more files exceed the 1 KB limit.");
    setErrorFilesMap(
      files.map((file) => (file.size > 1024 ? "This file exceeds the 1 KB limit." : "")),
    );
  }
};

return (
  <FileUpload
    id="file-upload-max-size"
    label="Upload your documents"
    buttonLabel="Select a file"
    isError={!!error}
    assistiveTextLabel={error}
    errorFilesMap={errorFilesMap}
    onChange={handleChange}
    onRemovingFile={handleRemove}
  />
);
```

Displays a field-level error and per-file messages when validation fails. Consumers build and maintain `errorFilesMap` from their validation rules.

#### Async

```tsx
const uploadFile = (file: File): Promise<void> => {
  return uploadToServer(file);
};

return (
  <FileUpload
    id="file-upload-async"
    label="Upload your documents"
    buttonLabel="Select a file"
    multiple
    onUpload={uploadFile}
    onChange={(files) => setFiles(files)}
    onRemovingFile={handleRemove}
  />
);
```

Runs an async upload per selected file and shows a loading indicator on each file item until the promise settles.

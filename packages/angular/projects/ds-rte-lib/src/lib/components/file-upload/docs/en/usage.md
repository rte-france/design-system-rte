Use `rte-file-upload` in templates and handle file selection through `(filesChange)` and `(fileRemoved)`. Do not use the internal `rte-file-item` selector in application templates.

Validation, size limits, and upload logic are consumer responsibilities. Pass per-file errors through `errorFilesMap` and field-level errors through `isError` and `assistiveTextLabel`.

```typescript
@Component({
  template: `
    <rte-file-upload
      id="documents-upload"
      label="Upload your documents"
      buttonLabel="Select a file"
      [required]="true"
      assistiveTextLabel="Accepted formats: .jpg, .png, .pdf"
      [showAssistiveIcon]="true"
      [errorFilesMap]="errorFilesMap"
      [isError]="hasError"
      (filesChange)="onFilesChange($event)"
      (fileRemoved)="onFileRemoved($event)"
    />
  `,
})
export class MyFormComponent {
  errorFilesMap: string[] = [];
  hasError = false;

  onFilesChange(files: File[]): void {
    // Validate files and update errorFilesMap / hasError
  }

  onFileRemoved(file: File): void {
    // Sync errorFilesMap after removal
  }
}
```

#### Disabled

```html
<rte-file-upload
  id="file-upload-disabled"
  label="Upload your documents"
  buttonLabel="Select a file"
  [disabled]="true"
/>
```

Disables both the hidden file input and the upload button.

#### Multiple Files

```html
<rte-file-upload
  id="file-upload-multiple"
  label="Upload your documents"
  buttonLabel="Select a file"
  [multiple]="true"
  (filesChange)="onFilesChange($event)"
/>
```

Allows selecting more than one file in the native picker.
Selecting files again adds them to the current list.

#### With Error

```html
<rte-file-upload
  id="file-upload-error"
  label="Upload your documents"
  buttonLabel="Select a file"
  assistiveTextLabel="Please select a file before submitting."
  [isError]="true"
/>
```

Shows field-level assistive text in error appearance.

#### Without Label

```html
<rte-file-upload
  id="file-upload-no-label"
  label="Upload your documents"
  buttonLabel="Select a file"
  [showLabel]="false"
/>
```

Hides the visible label and exposes the label text to assistive technologies via `aria-label`.

#### Compact Spacing

```html
<rte-file-upload
  id="file-upload-compact"
  label="Upload your documents"
  buttonLabel="Select a file"
  [compactSpacing]="true"
/>
```

Reduces spacing on the upload button and file list items.

#### Max Size Exceeded

```html
<rte-file-upload
  id="file-upload-max-size"
  label="Upload your documents"
  buttonLabel="Select a file"
  assistiveTextLabel="One or more files exceed the 1 KB limit."
  [isError]="true"
  [errorFilesMap]="['This file exceeds the 1 KB limit.']"
  (filesChange)="onFilesChange($event)"
  (fileRemoved)="onFileRemoved($event)"
/>
```

Displays a field-level error and per-file messages when validation fails. Consumers build and maintain `errorFilesMap` from their validation rules.

#### Async

```typescript
@Component({
  template: `
    <rte-file-upload
      id="file-upload-async"
      label="Upload your documents"
      buttonLabel="Select a file"
      [multiple]="true"
      [onUploadFile]="onUploadFile"
      [uploadErrorMessage]="uploadErrorMessage"
      (filesChange)="onFilesChange($event)"
    />
  `,
})
export class AsyncUploadComponent {
  onUploadFile = (file: File): Promise<void> => {
    return uploadToServer(file);
  };

  uploadErrorMessage = (file: File, error: unknown): string => {
    if (error instanceof Error && error.message === "FILE_TOO_LARGE") {
      return `${file.name} exceeds the maximum allowed size.`;
    }
    return `The upload of ${file.name} failed.`;
  };

  onFilesChange(files: File[]): void {
    // Handle updated file list
  }
}
```

Runs an async upload per selected file and shows a loading indicator on each file item until the promise settles.
When an upload rejects, the file displays the default upload error message.

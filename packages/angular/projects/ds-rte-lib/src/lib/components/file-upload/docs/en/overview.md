```html
<rte-file-upload
  id="file-upload-1"
  label="Upload your documents"
  buttonLabel="Select a file"
  [required]="true"
  assistiveTextLabel="Accepted formats: .jpg, .png, .pdf"
  [showAssistiveIcon]="true"
  (filesChange)="onFilesChange($event)"
  (fileRemoved)="onFileRemoved($event)"
/>
```

```tsx
<FileUpload
  id="file-upload-1"
  label="Upload your documents"
  buttonLabel="Select a file"
  required
  assistiveTextLabel="Accepted formats: .jpg, .png, .pdf"
  showAssistiveIcon
  onChange={(files) => setFiles(files)}
  onRemovingFile={(file) => handleRemove(file)}
/>
```

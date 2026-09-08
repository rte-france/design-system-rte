import { Component } from "@angular/core";
import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";

import { FileUploadComponent } from "../file-upload.component";

@Component({
  selector: "story-file-upload-async-wrapper",
  imports: [FileUploadComponent],
  template: `
    <rte-file-upload
      id="file-upload-async"
      label="Uploader vos documents"
      buttonLabel="Sélectionner un fichier"
      [multiple]="true"
      [onUploadFile]="onUploadFile"
    />
  `,
})
class FileUploadAsyncWrapperComponent {
  onUploadFile = (file: File): Promise<void> => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("Fichier uploadé :", file.name);
        resolve();
      }, 5000);
    });
  };
}

const meta: Meta<FileUploadComponent> = {
  title: "Composants/FileUpload",
  component: FileUploadComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [FileUploadAsyncWrapperComponent],
    }),
  ],
  argTypes: {
    assistiveAppearance: {
      control: "select",
      options: ["description", "error", "success", "link"],
    },
    filesChange: { action: "filesChange" },
    fileRemoved: { action: "fileRemoved" },
  },
};

export default meta;

type Story = StoryObj<FileUploadComponent>;

export const Default: Story = {
  args: {
    id: "file-upload-1",
    label: "Uploader vos documents",
    compactSpacing: false,
    showLabel: true,
    showLabelRequirement: false,
    required: true,
    disabled: false,
    assistiveTextLabel: "Formats acceptés : .jpg, .png, .pdf",
    assistiveAppearance: "description",
    showAssistiveIcon: true,
    assistiveTextLink: "#",
    isError: false,
    multiple: false,
    errorFilesMap: [],
    showAssistiveText: true,
    buttonLabel: "Sélectionner un fichier",
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <rte-file-upload
        [id]="id"
        [label]="label"
        [buttonLabel]="buttonLabel"
        [showLabel]="showLabel"
        [compactSpacing]="compactSpacing"
        [multiple]="multiple"
        [disabled]="disabled"
        [required]="required"
        [showLabelRequirement]="showLabelRequirement"
        [assistiveTextLabel]="assistiveTextLabel"
        [assistiveAppearance]="assistiveAppearance"
        [showAssistiveText]="showAssistiveText"
        [showAssistiveIcon]="showAssistiveIcon"
        [assistiveTextLink]="assistiveTextLink"
        [isError]="isError"
        [errorFilesMap]="errorFilesMap"
        (filesChange)="filesChange($event)"
        (fileRemoved)="fileRemoved($event)"
      />
    `,
  }),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true,
  },
  render: Default.render,
};

export const MultipleFiles: Story = {
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true,
  },
  render: Default.render,
};

export const WithError: Story = {
  args: {
    ...Default.args,
    id: "file-upload-4",
    isError: true,
    assistiveTextLabel: "Veuillez sélectionner un fichier avant de soumettre.",
  },
  render: Default.render,
};

export const WithoutLabel: Story = {
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false,
  },
  render: Default.render,
};

export const CompactSpacing: Story = {
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true,
  },
  render: Default.render,
};

export const MaxSizeExceeded: Story = {
  args: {
    ...Default.args,
    id: "file-upload-7",
    assistiveTextLabel: "Un ou plusieurs fichiers dépassent la limite de 1Ko.",
    isError: true,
    errorFilesMap: ["Ce fichier dépasse la limite de 1Ko."],
  },
  render: Default.render,
};

export const Async: Story = {
  render: () => ({
    template: `<story-file-upload-async-wrapper />`,
  }),
};

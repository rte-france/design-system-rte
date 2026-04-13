import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import FileUpload from "../FileUpload";

const meta = {
  title: "Composants/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    buttonLabel: "Sélectionner un fichier",
  },

  render: (args) => {
    const [, setFiles] = useState<File[]>([]);
    const handleChange = (files: File[]) => {
      setFiles(files);
    };

    const handleRemovingFile = (file: File) => {
      setFiles((prev) => prev.filter((f) => f !== file));
    };

    return <FileUpload {...args} onChange={handleChange} onRemovingFile={handleRemovingFile} />;
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true,
  },
};

export const MultipleFiles: Story = {
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    id: "file-upload-4",
    isError: true,
    assistiveTextLabel: "Veuillez sélectionner un fichier avant de soumettre.",
  },

  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const handleChange = (newFiles: File[]) => {
      setFiles(newFiles);
    };

    const handleRemovingFile = (file: File) => {
      setFiles((prev) => prev.filter((f) => f !== file));
    };

    return (
      <FileUpload
        {...args}
        onChange={handleChange}
        onRemovingFile={handleRemovingFile}
        isError={files.length === 0}
        showAssistiveText={files.length === 0}
      />
    );
  },
};

export const WithoutLabel: Story = {
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false,
  },
};

export const CompactSpacing: Story = {
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true,
  },
};

export const MaxSizeExceeded: Story = {
  args: {
    ...Default.args,
    id: "file-upload-7",
    assistiveTextLabel: "Un ou plusieurs fichiers dépassent la limite de 1Ko.",
    isError: true,
  },

  render: (args) => {
    const [error, setError] = useState<string | undefined>(undefined);
    const [, setFiles] = useState<File[]>([]);
    const [errorFilesMap, setErrorFilesMap] = useState<string[]>([]);
    const handleChange = (files: File[]) => {
      setFiles(files);
      if (files.some((file) => file.size > 1 * 1024)) {
        setError("Un ou plusieurs fichiers dépassent la limite de 1Ko.");
        const nextErrorFilesMap = files.map((file) =>
          file.size > 1 * 1024 ? "Ce fichier dépasse la limite de 1Ko." : "",
        );
        setError("Un ou plusieurs fichiers dépassent la limite de 1Ko.");
        setErrorFilesMap(nextErrorFilesMap);
      }
    };

    const handleRemovingFile = (file: File) => {
      setFiles((prev) => {
        const nextFiles = prev.filter((f) => f !== file);
        setErrorFilesMap(
          nextFiles
            .filter((currentFile) => currentFile.size > 1 * 1024)
            .map(() => "Ce fichier dépasse la limite de 1Ko."),
        );
        return nextFiles;
      });
    };

    return (
      <FileUpload
        {...args}
        onChange={handleChange}
        isError={!!error}
        assistiveTextLabel={error}
        errorFilesMap={errorFilesMap}
        onRemovingFile={handleRemovingFile}
      />
    );
  },
};

export const Async: Story = {
  args: {
    ...Default.args,
  },

  render: (args) => {
    const [, setFiles] = useState<File[]>([]);
    const handleChange = (file: File) => {
      return new Promise<void>((resolve) => {
        setFiles((prev) => [...prev, file]);
        setTimeout(() => {
          resolve();
        }, 5000);
      });
    };

    const handleRemovingFile = (file: File) => {
      setFiles((prev) => prev.filter((f) => f !== file));
    };

    return <FileUpload {...args} multiple onUpload={handleChange} onRemovingFile={handleRemovingFile} />;
  },
};

import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  NgZone,
  OnDestroy,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { generateId } from "@design-system-rte/core";
import { AssistiveTextProps } from "@design-system-rte/core/components/assistive-text/assistive-text.interface";

import { AssistiveTextComponent } from "../assistive-text/assistive-text.component";
import { ButtonComponent } from "../button/button.component";
import { RequiredIndicatorComponent } from "../input/required-indicator/required-indicator.component";

import { FileItemComponent } from "./file-item/file-item.component";

@Component({
  selector: "rte-file-upload",
  imports: [CommonModule, ButtonComponent, AssistiveTextComponent, FileItemComponent, RequiredIndicatorComponent],
  templateUrl: "./file-upload.component.html",
  styleUrl: "./file-upload.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent implements AfterViewInit, OnDestroy {
  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly buttonLabel = input.required<string>();
  readonly showLabel = input<boolean>(true);
  readonly compactSpacing = input<boolean>(false);
  readonly multiple = input<boolean>(false);
  readonly accept = input<string>();
  readonly required = input<boolean>(false);
  readonly showLabelRequirement = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly assistiveTextLabel = input<string>();
  readonly assistiveAppearance = input<AssistiveTextProps["appearance"]>("description");
  readonly showAssistiveText = input<boolean>(true);
  readonly showAssistiveIcon = input<boolean>(false);
  readonly assistiveTextLink = input<string>();
  readonly isError = input<boolean>(false);
  readonly errorFilesMap = input<string[]>([]);
  readonly onUploadFile = input<(file: File) => Promise<void>>();
  readonly uploadErrorMessage = input<string | ((file: File, error: unknown) => string)>(
    "Erreur lors du téléchargement du fichier.",
  );

  readonly inputRef = viewChild<ElementRef<HTMLInputElement>>("inputRef");
  readonly buttonRef = viewChild("buttonRef", { read: ElementRef });

  readonly buttonWidth = signal<string | undefined>(undefined);

  readonly filesChange = output<File[]>();
  readonly fileRemoved = output<File>();

  readonly selectedFiles = signal<File[]>([]);
  readonly loadingFiles = signal<Set<File>>(new Set());
  readonly removingFiles = signal<Set<File>>(new Set());
  readonly uploadErrors = signal<Map<File, string>>(new Map());
  readonly removalAnnouncement = signal("");

  private resizeObserver?: ResizeObserver;
  private readonly removalTimers = new Map<File, ReturnType<typeof setTimeout>>();
  private readonly zone = inject(NgZone);

  readonly shouldDisplayAssistiveText = computed(() => {
    return (
      this.showAssistiveText() &&
      !!this.assistiveTextLabel() &&
      this.errorFilesMap().length === 0 &&
      this.uploadErrors().size === 0
    );
  });

  readonly buttonSize = computed(() => (this.compactSpacing() ? "s" : "m"));

  readonly internalId = computed(() => this.id() ?? generateId());

  ngAfterViewInit(): void {
    const buttonEl = this.buttonRef()?.nativeElement as HTMLElement | undefined;
    if (!buttonEl) return;

    this.updateButtonWidth(buttonEl);

    this.resizeObserver = new ResizeObserver(() => {
      this.zone.run(() => this.updateButtonWidth(buttonEl));
    });
    this.resizeObserver.observe(buttonEl);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.removalTimers.forEach((timer) => clearTimeout(timer));
  }

  private updateButtonWidth(el: HTMLElement): void {
    this.buttonWidth.set(`${el.offsetWidth}px`);
  }

  isFileLoading(file: File): boolean {
    return this.loadingFiles().has(file);
  }

  isFileRemoving(file: File): boolean {
    return this.removingFiles().has(file);
  }

  isFileError(index: number): boolean {
    return this.errorFilesMap()[index] !== undefined || this.uploadErrors().has(this.selectedFiles()[index]);
  }

  getFileErrorMessage(index: number): string | undefined {
    return this.uploadErrors().get(this.selectedFiles()[index]) ?? this.errorFilesMap()[index];
  }

  async handleOnChange(event: Event): Promise<void> {
    const fileInput = event.target as HTMLInputElement;
    const files = Array.from(fileInput.files || []);
    if (this.multiple()) {
      this.selectedFiles.update((previousFiles) => [...previousFiles, ...files]);
    } else {
      this.selectedFiles.set(files);
      this.uploadErrors.set(new Map());
    }
    this.filesChange.emit(files);
    fileInput.focus();

    const onUpload = this.onUploadFile();
    if (onUpload) {
      await Promise.all(files.map((file) => this.handleUploadFile(file, onUpload)));
    }
  }

  private handleUploadFile(file: File, onUpload: (file: File) => Promise<void>): Promise<void> {
    this.loadingFiles.update((prev) => new Set(prev).add(file));
    return onUpload(file)
      .then(() => {
        this.loadingFiles.update((prev) => {
          const next = new Set(prev);
          next.delete(file);
          return next;
        });
      })
      .catch((error: unknown) => {
        this.loadingFiles.update((prev) => {
          const next = new Set(prev);
          next.delete(file);
          return next;
        });
        const errorMessage = this.uploadErrorMessage();
        const message = typeof errorMessage === "function" ? errorMessage(file, error) : errorMessage;
        this.uploadErrors.update((previousErrors) => {
          if (!this.selectedFiles().includes(file)) return previousErrors;
          return new Map(previousErrors).set(file, message);
        });
      });
  }

  handleOnClick(event: MouseEvent): void {
    event.stopPropagation();
    this.inputRef()?.nativeElement.click();
  }

  handleRemoveFile(file: File): void {
    const files = this.selectedFiles();
    const index = files.indexOf(file);
    if (index !== -1 && !this.removingFiles().has(file)) {
      const newFiles = files.filter((_, i) => i !== index);
      this.removingFiles.update((previousFiles) => new Set(previousFiles).add(file));
      this.removalAnnouncement.set(
        `${file.name} a été supprimé. ${newFiles.length} fichier${newFiles.length > 1 ? "s" : ""} restant${newFiles.length > 1 ? "s" : ""}.`,
      );
      const input = this.inputRef()?.nativeElement;
      const button = this.buttonRef()?.nativeElement as HTMLButtonElement | undefined;
      if (input) {
        input.value = "";
      }
      if (button) {
        button.focus();
      }

      const timer = setTimeout(() => {
        this.uploadErrors.update((previousErrors) => {
          const next = new Map(previousErrors);
          next.delete(file);
          return next;
        });
        this.loadingFiles.update((previousFiles) => {
          const next = new Set(previousFiles);
          next.delete(file);
          return next;
        });
        this.selectedFiles.set(newFiles);
        this.removingFiles.update((previousFiles) => {
          const next = new Set(previousFiles);
          next.delete(file);
          return next;
        });
        this.fileRemoved.emit(file);
        this.filesChange.emit(newFiles);
        this.removalTimers.delete(file);
      }, 200);
      this.removalTimers.set(file, timer);
    }
  }
}

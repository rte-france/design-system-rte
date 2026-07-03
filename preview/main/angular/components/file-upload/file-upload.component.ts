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

  readonly inputRef = viewChild<ElementRef<HTMLInputElement>>("inputRef");
  readonly buttonRef = viewChild("buttonRef", { read: ElementRef });

  readonly buttonWidth = signal<string | undefined>(undefined);

  readonly filesChange = output<File[]>();
  readonly fileRemoved = output<File>();

  readonly selectedFiles = signal<File[]>([]);
  readonly loadingFiles = signal<Set<File>>(new Set());

  private resizeObserver?: ResizeObserver;
  private readonly zone = inject(NgZone);

  readonly shouldDisplayAssistiveText = computed(() => {
    return this.showAssistiveText() && !!this.assistiveTextLabel() && this.errorFilesMap()?.length === 0;
  });

  readonly buttonSize = computed(() => (this.compactSpacing() ? "s" : "m"));

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
  }

  private updateButtonWidth(el: HTMLElement): void {
    this.buttonWidth.set(`${el.offsetWidth}px`);
  }

  isFileLoading(file: File): boolean {
    return this.loadingFiles().has(file);
  }

  isFileError(index: number): boolean {
    const errorFiles = this.errorFilesMap();
    return errorFiles !== undefined && errorFiles[index] !== undefined;
  }

  getFileErrorMessage(index: number): string | undefined {
    return this.errorFilesMap()?.[index];
  }

  handleOnChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const files = Array.from(fileInput.files || []);
    fileInput.value = "";
    this.selectedFiles.set(files);
    this.filesChange.emit(files);

    const onUpload = this.onUploadFile();
    if (onUpload) {
      files.forEach((file) => {
        this.loadingFiles.update((prev) => new Set(prev).add(file));
        onUpload(file).finally(() => {
          this.loadingFiles.update((prev) => {
            const next = new Set(prev);
            next.delete(file);
            return next;
          });
        });
      });
    }
  }

  handleOnClick(event: MouseEvent): void {
    event.stopPropagation();
    this.inputRef()?.nativeElement.click();
  }

  handleRemoveFile(file: File): void {
    const files = this.selectedFiles();
    const index = files.indexOf(file);
    if (index !== -1) {
      const newFiles = files.filter((_, i) => i !== index);
      this.selectedFiles.set(newFiles);
      this.fileRemoved.emit(file);
      this.filesChange.emit(newFiles);
    }
  }
}

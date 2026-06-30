import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import {
  extractFileNameParts,
  formatFileSize,
  getStringWidthFromContext,
} from "@design-system-rte/core/components/file-upload/file-upload.util";

import { AssistiveTextComponent } from "../../assistive-text/assistive-text.component";
import { IconComponent } from "../../icon/icon.component";
import { IconButtonComponent } from "../../icon-button/icon-button.component";
import { LoaderComponent } from "../../loader/loader.component";
import { TooltipDirective } from "../../tooltip/tooltip.directive";

@Component({
  selector: "rte-file-item",
  imports: [
    CommonModule,
    AssistiveTextComponent,
    IconComponent,
    IconButtonComponent,
    LoaderComponent,
    TooltipDirective,
  ],
  templateUrl: "./file-item.component.html",
  styleUrl: "./file-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileItemComponent implements AfterViewInit {
  readonly file = input.required<File>();
  readonly isError = input<boolean>(false);
  readonly errorMessage = input<string>();
  readonly compact = input<boolean>(false);
  readonly isLoading = input<boolean>(false);

  readonly removeFile = output<void>();

  readonly fileNameRef = viewChild<ElementRef<HTMLSpanElement>>("fileNameRef");
  readonly fileSizeRef = viewChild<ElementRef<HTMLSpanElement>>("fileSizeRef");
  readonly fileInfoRef = viewChild<ElementRef<HTMLDivElement>>("fileInfoRef");

  readonly truncatedFileName = signal<string>("");
  readonly hasEllipsis = signal<boolean>(false);

  private readonly cdr = inject(ChangeDetectorRef);
  private isViewInitialized = false;

  readonly formatFileSize = formatFileSize;

  constructor() {
    effect(() => {
      const fileName = this.file().name;
      this.truncatedFileName.set(fileName);
      this.hasEllipsis.set(false);
      if (this.isViewInitialized) {
        this.updateTruncation();
      }
    });
  }

  ngAfterViewInit(): void {
    this.isViewInitialized = true;
    this.updateTruncation();
  }

  onRemove(): void {
    this.removeFile.emit();
  }

  private truncateFileName(fileName: string): string {
    const availableWidth = this.getAvailableWidth();
    const ellipsis = "...";
    const { baseName, fileType } = extractFileNameParts(fileName);
    const defaultTruncatedName = `${ellipsis}${fileType}`;

    if (availableWidth <= 0) {
      return defaultTruncatedName;
    }

    const fileNameElement = this.fileNameRef()?.nativeElement;
    if (!fileNameElement) {
      return fileName;
    }

    const ctx = this.computeContextStyle(fileNameElement);
    const getTextWidth = getStringWidthFromContext(ctx);

    if (getTextWidth(fileName) <= availableWidth) return fileName;

    const availableFileNameSpace = availableWidth - getTextWidth(ellipsis) - getTextWidth(fileType);

    if (availableFileNameSpace <= 0) return defaultTruncatedName;

    let lowerIndex = 0;
    let higherIndex = baseName.length;
    while (lowerIndex < higherIndex) {
      const midIndex = Math.ceil((lowerIndex + higherIndex) / 2);
      const { startStr, endStr } = this.computeStartAndEndStr(midIndex, baseName);
      if (getTextWidth(startStr) + getTextWidth(endStr) <= availableFileNameSpace) {
        lowerIndex = midIndex;
      } else {
        higherIndex = midIndex - 1;
      }
    }

    if (lowerIndex === 0) return defaultTruncatedName;

    const prefixLength = Math.ceil(lowerIndex / 2);
    const suffixLength = Math.floor(lowerIndex / 2);
    const startStr = prefixLength > 0 ? baseName.substring(0, prefixLength) : "";
    const endStr = suffixLength > 0 ? baseName.substring(baseName.length - suffixLength) : "";

    return `${startStr}${ellipsis}${endStr}${fileType}`;
  }

  private getAvailableWidth(): number {
    const sizeElement = this.fileSizeRef()?.nativeElement;
    const fileInformationElement = this.fileInfoRef()?.nativeElement;

    if (!sizeElement || !fileInformationElement) return 0;

    const gap = parseFloat(window.getComputedStyle(fileInformationElement).gap) || 0;
    return fileInformationElement.offsetWidth - sizeElement.offsetWidth - gap;
  }

  private computeContextStyle(fileNameElement: HTMLSpanElement): CanvasRenderingContext2D {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const style = window.getComputedStyle(fileNameElement);
    ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    return ctx;
  }

  private computeStartAndEndStr(mid: number, baseName: string) {
    const startIndex = Math.ceil(mid / 2);
    const endIndex = Math.floor(mid / 2);
    const startStr = startIndex > 0 ? baseName.substring(0, startIndex) : "";
    const endStr = endIndex > 0 ? baseName.substring(baseName.length - endIndex) : "";
    return { startStr, endStr };
  }

  private updateTruncation(): void {
    const truncated = this.truncateFileName(this.file().name);
    this.hasEllipsis.set(truncated !== this.file().name);
    this.truncatedFileName.set(truncated);
    this.cdr.markForCheck();
  }
}

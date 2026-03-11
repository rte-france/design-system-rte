import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  DestroyRef,
  effect,
  inject,
  input,
  output,
  signal,
  Signal,
} from "@angular/core";
import { BadgeProps } from "@design-system-rte/core/components/badge/badge.interface";
import type { TreeviewItemProps } from "@design-system-rte/core/components/treeview/treeview-item.interface";
import type { TreeviewSpacerType } from "@design-system-rte/core/components/treeview/treeview.constants";
import {
  TREEVIEW_INDENTATION_COMPACT_PX,
  TREEVIEW_INDENTATION_STEP_PX,
  updateSpacerForAncestor,
} from "@design-system-rte/core/components/treeview/treeview.constants";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { BadgeComponent } from "../../badge/badge.component";
import { CheckboxComponent } from "../../checkbox/checkbox.component";
import { IconComponent } from "../../icon/icon.component";

export interface TreeviewOpenChangeEvent {
  id: string | undefined;
  open: boolean;
}

export interface TreeviewSelectionChangeEvent {
  id: string | undefined;
  selected: boolean;
}

@Component({
  selector: "rte-treeview-item",
  imports: [CommonModule, CheckboxComponent, IconComponent, BadgeComponent],
  standalone: true,
  templateUrl: "./treeview-item.component.html",
  styleUrl: "./treeview-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeviewItemComponent implements AfterViewInit {
  readonly labelText = input.required<string>();
  readonly icon = input<string | undefined>();
  readonly link = input<string | undefined>();
  readonly disabled = input<boolean>(false);
  readonly isCompact = input<boolean>(false);
  readonly hasCheckbox = input<boolean>(false);
  readonly isSelected = input<boolean>(false);
  readonly isOpen = input<boolean>(false);
  readonly hasIcon = input<boolean>(false);
  readonly hasAction = input<boolean>(false);
  readonly hasBadge = input<boolean>(false);
  readonly newLine = input<boolean>(false);
  readonly dottedLine = input<boolean>(false);
  readonly dottedLineSignal = signal<boolean>(false);
  readonly items = input<TreeviewItemProps[]>([]);
  readonly badge = input<BadgeProps | undefined>();
  readonly id = input<string | undefined>();
  readonly depth = input<number | undefined>(undefined);
  readonly isLastChild = input<boolean | undefined>(undefined);
  readonly depthSpacer = input<TreeviewSpacerType[]>([]);
  readonly depthSpacerSignal = signal<TreeviewSpacerType[]>([]);

  readonly isOpenSignal = signal<boolean>(false);
  readonly isLastChildSignal = signal<boolean>(true);

  readonly itemClick = output<string | undefined>();
  readonly openChange = output<TreeviewOpenChangeEvent>();
  readonly selectionChange = output<TreeviewSelectionChangeEvent>();

  private readonly treeviewItemComponent = contentChildren(TreeviewItemComponent, { descendants: false });

  private readonly parentItem = inject(TreeviewItemComponent, { optional: true, skipSelf: true });
  private readonly destroyRef = inject(DestroyRef);

  readonly hasProjectedChildrenSignal = signal(false);

  readonly hasDataDrivenChildren = computed(() => (this.items()?.length ?? 0) > 0);

  readonly hasChildren = computed(() => this.hasDataDrivenChildren() || this.hasProjectedChildrenSignal());

  readonly isLeaf = computed(() => !this.hasChildren());

  readonly isParent = computed(() => !this.isLeaf());

  readonly effectiveDepth: Signal<number> = computed(() => {
    const depthInput = this.depth();
    if (depthInput !== undefined) {
      return depthInput;
    }
    const parent = this.parentItem;
    return parent ? parent.effectiveDepth() + 1 : 0;
  });

  readonly indentationPx = computed(() => {
    const depthValue = this.effectiveDepth();
    const step = this.isCompact() ? TREEVIEW_INDENTATION_COMPACT_PX : TREEVIEW_INDENTATION_STEP_PX;
    return depthValue * step;
  });

  readonly checkboxId = computed(() => `treeview-checkbox-${this.id() ?? this.labelText()}-${this.effectiveDepth()}`);

  readonly resolvedIsLastChild = computed(() => this.isLastChild() ?? this.isLastChildSignal());

  readonly resolvedDepthSpacer = computed(() => {
    const inputSpacer = this.depthSpacer();
    const signalSpacer = this.depthSpacerSignal();
    return inputSpacer.length > 0 ? inputSpacer : signalSpacer;
  });

  readonly connectorBorderTypes = computed(() => {
    const spacer = this.resolvedDepthSpacer();
    const depth = this.effectiveDepth();
    const types: Array<"vertical" | "corner" | "branch" | "spacer" | "horizontal"> = [];
    for (let index = 0; index < spacer.length; index++) {
      const isLastSpacer = index === spacer.length - 1;
      types.push(isLastSpacer ? spacer[index] : updateSpacerForAncestor(spacer[index]));
    }
    const hasSpacerFromAncestor = types.includes("spacer");
    if (depth >= 2 && !hasSpacerFromAncestor && types.length > 1) {
      const lastType = types.pop()!;
      types.push("spacer");
      types.push(lastType);
    }
    if (depth > 0 && types.length > 0) {
      types.push("horizontal");
    }
    return types;
  });

  setLastChild(value: boolean): void {
    this.isLastChildSignal.set(value);
  }

  setDepthSpacer(value: TreeviewSpacerType[]): void {
    this.depthSpacerSignal.set(value);
  }

  setDottedLine(value: boolean): void {
    this.dottedLineSignal.set(value);
  }

  getChildDepthSpacer(isLastChild: boolean): TreeviewSpacerType[] {
    const nextType: TreeviewSpacerType = isLastChild ? "corner" : "branch";
    return [...this.resolvedDepthSpacer(), nextType];
  }

  constructor() {
    effect(
      () => {
        this.isOpenSignal.set(this.isOpen());
      },
      { allowSignalWrites: true },
    );
  }

  ngAfterViewInit(): void {
    this.updateHasProjectedChildren();
    this.updateLastChildFlags();
    this.treeviewItemComponent().forEach(() => {
      effect(
        () => {
          this.updateHasProjectedChildren();
          this.updateLastChildFlags();
        },
        { allowSignalWrites: true },
      );
    });
  }

  private updateLastChildFlags(): void {
    const children = this.treeviewItemComponent();
    const dotted = this.dottedLine() || this.dottedLineSignal();
    children.forEach((child, index) => {
      const isLast = index === children.length - 1;
      child.setLastChild(isLast);
      child.setDepthSpacer(this.getChildDepthSpacer(isLast));
      child.setDottedLine(dotted);
    });
  }

  private updateHasProjectedChildren(): void {
    this.hasProjectedChildrenSignal.set(this.treeviewItemComponent()?.length > 0);
  }

  toggleOpen(): void {
    if (!this.isParent() || this.disabled()) {
      return;
    }
    const newOpen = !this.isOpenSignal();
    this.isOpenSignal.set(newOpen);
    this.openChange.emit({ id: this.id(), open: newOpen });
  }

  handleContentClick(): void {
    if (this.disabled()) {
      return;
    }
    this.itemClick.emit(this.id());
  }

  handleChevronKeyDown(event: KeyboardEvent): void {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();
      this.toggleOpen();
    }
  }

  handleContentKeyDown(event: KeyboardEvent): void {
    if ([SPACE_KEY, ENTER_KEY].includes(event.key)) {
      event.preventDefault();
      this.handleContentClick();
    }
  }

  handleCheckboxClick(event: Event): void {
    event.stopPropagation();
    if (this.disabled()) {
      return;
    }
    this.selectionChange.emit({ id: this.id(), selected: !this.isSelected() });
  }
}

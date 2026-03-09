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
import {
  TREEVIEW_INDENTATION_COMPACT_PX,
  TREEVIEW_INDENTATION_STEP_PX,
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
  readonly items = input<TreeviewItemProps[]>([]);
  readonly badge = input<BadgeProps | undefined>();
  readonly id = input<string | undefined>();
  readonly depth = input<number | undefined>(undefined);
  readonly isLastChild = input<boolean | undefined>(undefined);

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

  readonly connectorBorderTypes = computed(() => {
    const depth = this.effectiveDepth();
    const isLast = this.resolvedIsLastChild();
    const types: Array<"vertical" | "corner"> = [];
    for (let index = 0; index < depth; index++) {
      types.push(index === depth - 1 && isLast ? "corner" : "vertical");
    }
    return types;
  });

  setLastChild(value: boolean): void {
    this.isLastChildSignal.set(value);
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
    children.forEach((child, index) => {
      child.setLastChild(index === children.length - 1);
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

import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  Signal,
} from "@angular/core";
import { BadgeProps } from "@design-system-rte/core/components/badge/badge.interface";
import {
  TreeviewBorderType,
  TreeviewItemProps,
} from "@design-system-rte/core/components/treeview/treeview-item.interface";
import {
  TREEVIEW_INDENTATION_COMPACT_PX,
  TREEVIEW_INDENTATION_STEP_PX,
  updateSpacerForAncestor,
} from "@design-system-rte/core/components/treeview/treeview.constants";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { BadgeComponent } from "../../badge/badge.component";
import { CheckboxComponent } from "../../checkbox/checkbox.component";
import { IconComponent } from "../../icon/icon.component";

import { TreeviewItemBorderComponent } from "./treeview-item-border/treeview-item-border.component";

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
  imports: [CommonModule, CheckboxComponent, IconComponent, BadgeComponent, TreeviewItemBorderComponent],
  standalone: true,
  templateUrl: "./treeview-item.component.html",
  styleUrl: "./treeview-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeviewItemComponent {
  readonly labelText = input.required<string>();
  readonly icon = input<string | undefined>();
  readonly link = input<string | undefined>();
  readonly disabled = input<boolean>(false);
  readonly isCompact = input<boolean>(false);
  readonly hasCheckbox = input<boolean>(false);
  readonly isSelected = input<boolean>(false);
  readonly isOpen = input<boolean>(false);
  readonly hasIcon = input<boolean>(false);
  readonly hasBadge = input<boolean>(false);
  readonly newLine = input<boolean>(false);
  readonly dottedLine = input<boolean>(false);
  readonly items = input<TreeviewItemProps[]>([]);
  readonly badge = input<BadgeProps | undefined>();
  readonly id = input<string | undefined>();
  readonly depth = input<number | undefined>(undefined);
  readonly isLastChild = input<boolean | undefined>(undefined);
  readonly borderTypes = input<TreeviewBorderType[]>([]);

  readonly isOpenSignal = signal<boolean>(false);

  readonly itemClick = output<string | undefined>();
  readonly openChange = output<TreeviewOpenChangeEvent>();
  readonly selectionChange = output<TreeviewSelectionChangeEvent>();

  private readonly parentItem = inject(TreeviewItemComponent, { optional: true, skipSelf: true });

  readonly hasChildren = computed(() => (this.items()?.length ?? 0) > 0);

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

  readonly resolvedIsLastChild = computed(() => this.isLastChild() ?? true);

  readonly resolvedBorderTypes = computed(() => {
    const inputBorderTypes = this.borderTypes();
    return inputBorderTypes.length > 0 ? inputBorderTypes : [];
  });

  readonly connectorBorderTypes = computed(() => {
    if (this.isCompact()) {
      return Array(this.effectiveDepth()).fill("spacer");
    } else {
      const currentBorders = this.resolvedBorderTypes();
      const depth = this.effectiveDepth();
      const outputBorders: Array<TreeviewBorderType> = [];
      for (let index = 0; index < currentBorders.length; index++) {
        const isLastSpacer = index === currentBorders.length - 1;
        outputBorders.push(isLastSpacer ? currentBorders[index] : updateSpacerForAncestor(currentBorders[index]));
      }
      if (depth && outputBorders.length && !this.hasChildren()) {
        outputBorders.push("horizontal");
      }
      return outputBorders;
    }
  });

  getChildBorderTypes(isLastChild: boolean): TreeviewBorderType[] {
    const nextType: TreeviewBorderType = isLastChild ? "corner" : "branch";
    return [...this.resolvedBorderTypes(), nextType];
  }

  constructor() {
    effect(
      () => {
        this.isOpenSignal.set(this.isOpen());
      },
      { allowSignalWrites: true },
    );
  }

  toggleOpen(): void {
    if (!this.hasChildren() || this.disabled()) {
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

  trackChild(child: TreeviewItemProps): string {
    return child.id ?? child.labelText;
  }
}

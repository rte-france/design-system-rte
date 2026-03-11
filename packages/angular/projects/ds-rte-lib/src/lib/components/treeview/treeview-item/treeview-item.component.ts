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
  TreeviewOpenChangeEvent,
  TreeviewSelectionChangeEvent,
} from "@design-system-rte/core/components/treeview/treeview-item.interface";
import {
  canToggleOpen,
  computeCheckboxId,
  computeConnectorBorderTypes,
  getChildBorderTypes,
  getTreeviewItemKey,
  hasChildren as hasChildrenUtil,
  isItemSelected,
  computeIndentationPx,
} from "@design-system-rte/core/components/treeview/treeview.utils";
import { ENTER_KEY, SPACE_KEY } from "@design-system-rte/core/constants/keyboard/keyboard.constants";

import { BadgeComponent } from "../../badge/badge.component";
import { CheckboxComponent } from "../../checkbox/checkbox.component";
import { IconComponent } from "../../icon/icon.component";
import { TreeviewSelectionService } from "../treeview-selection.service";

import { TreeviewItemBorderComponent } from "./treeview-item-border/treeview-item-border.component";

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
  readonly isChecked = input<boolean | undefined>(undefined);
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
  private readonly selectionService = inject(TreeviewSelectionService, { optional: true });

  readonly hasChildren = computed(() => hasChildrenUtil(this.items()));

  readonly effectiveIsSelected = computed(() => {
    const service = this.selectionService;
    if (service) {
      return isItemSelected(this.id(), service.selectedId());
    }
    return this.isSelected();
  });

  readonly effectiveDepth: Signal<number> = computed(() => {
    const depthInput = this.depth();
    if (depthInput !== undefined) {
      return depthInput;
    }
    const parent = this.parentItem;
    return parent ? parent.effectiveDepth() + 1 : 0;
  });

  readonly indentationPx = computed(() => computeIndentationPx(this.effectiveDepth(), this.isCompact()));

  readonly checkboxId = computed(() => computeCheckboxId(this.id(), this.labelText(), this.effectiveDepth()));

  readonly resolvedIsLastChild = computed(() => this.isLastChild() ?? true);

  readonly resolvedBorderTypes = computed(() => {
    const inputBorderTypes = this.borderTypes();
    return inputBorderTypes.length > 0 ? inputBorderTypes : [];
  });

  readonly connectorBorderTypes = computed(() =>
    computeConnectorBorderTypes({
      depth: this.effectiveDepth(),
      isCompact: this.isCompact(),
      resolvedBorderTypes: this.resolvedBorderTypes(),
      hasChildren: this.hasChildren(),
    }),
  );

  getChildBorderTypes(isLastChild: boolean): TreeviewBorderType[] {
    return getChildBorderTypes(this.resolvedBorderTypes(), isLastChild);
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
    if (!canToggleOpen(this.hasChildren(), this.disabled())) {
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
    const service = this.selectionService;
    if (service) {
      service.select(this.id());
      this.selectionChange.emit({ id: this.id(), selected: true });
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
    const currentChecked = this.isChecked() ?? this.isSelected();
    this.selectionChange.emit({ id: this.id(), selected: !currentChecked });
  }

  trackChild(child: TreeviewItemProps): string {
    return getTreeviewItemKey(child);
  }
}

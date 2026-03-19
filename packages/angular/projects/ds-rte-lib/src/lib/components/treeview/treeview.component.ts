import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
} from "@angular/core";
import {
  type TreeviewItemProps,
  TreeviewOpenChangeEvent,
  TreeviewSelectionChangeEvent,
  hasNestedItemsInTree,
} from "@design-system-rte/core/components/treeview";

import { DropdownItemConfig } from "../dropdown/dropdown.types";

import { TreeviewCheckService } from "./treeview-check.service";
import { TreeviewItemComponent } from "./treeview-item/treeview-item.component";
import { TreeviewKeyboardService } from "./treeview-keyboard.service";
import { TreeviewSelectionService } from "./treeview-selection.service";

@Component({
  selector: "rte-treeview",
  imports: [CommonModule, TreeviewItemComponent],
  standalone: true,
  templateUrl: "./treeview.component.html",
  styleUrl: "./treeview.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TreeviewSelectionService, TreeviewCheckService, TreeviewKeyboardService],
})
export class TreeviewComponent implements AfterViewInit {
  readonly treeRef = viewChild<ElementRef<HTMLElement>>("treeRef");

  readonly isCompact = input<boolean>(false);
  readonly dottedLine = input<boolean>(false);
  readonly hasCheckbox = input<boolean>(false);
  readonly items = input<TreeviewItemProps[]>([]);
  readonly selectedId = input<string | undefined>(undefined);
  readonly selectedPath = input<string | undefined>(undefined);
  readonly id = input<string>("treeview");
  readonly itemClick = output<string | undefined>();
  readonly openChange = output<TreeviewOpenChangeEvent>();
  readonly actionIconClick = output<{ itemId: string; event: Event }>();
  readonly actionMenuClick = output<{
    itemId: string;
    menuItemId: string;
    menuItemLabel: string;
    event: Event;
    item?: DropdownItemConfig;
  }>();
  readonly selectionChange = output<TreeviewSelectionChangeEvent>();
  readonly checkedIdsChange = output<ReadonlySet<string>>();

  readonly selectionService = inject(TreeviewSelectionService);
  readonly checkService = inject(TreeviewCheckService);

  private cdr = inject(ChangeDetectorRef);
  private keyboardService = inject(TreeviewKeyboardService);
  private destroyRef = inject(DestroyRef);

  readonly hasCheckedItems = computed(() => this.hasCheckbox() && this.checkService.checkedIds().size > 0);

  readonly hasNestedItems = computed(() => hasNestedItemsInTree(this.items()));

  constructor() {
    effect(
      () => {
        const id = this.selectedId();
        this.selectionService.select(id);
        this.selectionChange.emit({ id, selected: true });
      },
      { allowSignalWrites: true },
    );
    effect(
      () => {
        const pathString = this.selectedPath();
        const currentItems = this.items();
        if (pathString != null && pathString !== "" && currentItems.length > 0) {
          this.selectionService.selectByNodePath(pathString, currentItems);
        }
      },
      { allowSignalWrites: true },
    );
    effect(
      () => {
        const ids = this.checkService.checkedIds();
        this.checkedIdsChange.emit(ids);
        this.cdr.markForCheck();
      },
      { allowSignalWrites: true },
    );
    effect(
      () => {
        this.checkService.setRootItems(this.items());
      },
      { allowSignalWrites: true },
    );
  }

  private setupKeyboardListeners(): void {
    const treeElement = this.treeRef()?.nativeElement;
    if (!treeElement) {
      return;
    }

    this.keyboardService.initialize(treeElement);

    const handleKeyDown = (event: KeyboardEvent): void => {
      this.keyboardService.handleKeyDown(event, treeElement);
    };

    const handleFocusIn = (event: FocusEvent): void => {
      this.keyboardService.onFocusIn(treeElement, event);
    };

    const handleFocusOut = (event: FocusEvent): void => {
      this.keyboardService.onFocusOut(treeElement, event);
    };

    treeElement.addEventListener("keydown", handleKeyDown, true);
    treeElement.addEventListener("focusin", handleFocusIn);
    treeElement.addEventListener("focusout", handleFocusOut);

    this.destroyRef.onDestroy(() => {
      treeElement.removeEventListener("keydown", handleKeyDown, true);
      treeElement.removeEventListener("focusin", handleFocusIn);
      treeElement.removeEventListener("focusout", handleFocusOut);
    });
  }

  ngAfterViewInit(): void {
    this.setupKeyboardListeners();
  }

  itemTrack(item: TreeviewItemProps): string {
    return item.id ?? item.labelText;
  }
}

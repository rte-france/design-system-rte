import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  inject,
  input,
  output,
} from "@angular/core";
import {
  type TreeviewItemProps,
  TreeviewOpenChangeEvent,
  TreeviewSelectionChangeEvent,
} from "@design-system-rte/core/components/treeview";

import { TreeviewCheckService } from "./treeview-check.service";
import { TreeviewItemComponent } from "./treeview-item/treeview-item.component";
import { TreeviewSelectionService } from "./treeview-selection.service";

@Component({
  selector: "rte-treeview",
  imports: [CommonModule, TreeviewItemComponent],
  standalone: true,
  templateUrl: "./treeview.component.html",
  styleUrl: "./treeview.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TreeviewSelectionService, TreeviewCheckService],
})
export class TreeviewComponent {
  readonly isCompact = input<boolean>(false);
  readonly dottedLine = input<boolean>(false);
  readonly hasCheckbox = input<boolean>(false);
  readonly items = input<TreeviewItemProps[]>([]);
  readonly selectedId = input<string | undefined>(undefined);
  readonly selectedPath = input<string | undefined>(undefined);
  readonly id = input<string>("treeview");
  readonly itemClick = output<string | undefined>();
  readonly openChange = output<TreeviewOpenChangeEvent>();
  readonly selectionChange = output<TreeviewSelectionChangeEvent>();
  readonly checkedIdsChange = output<ReadonlySet<string>>();

  readonly selectionService = inject(TreeviewSelectionService);
  readonly checkService = inject(TreeviewCheckService);

  private cdr = inject(ChangeDetectorRef);

  readonly hasCheckedItems = computed(() => this.hasCheckbox() && this.checkService.checkedIds().size > 0);

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
  }

  itemTrack(item: TreeviewItemProps): string {
    return item.id ?? item.labelText;
  }
}

import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "rte-treeview",
  imports: [CommonModule],
  standalone: true,
  template: `<div class="treeview" role="tree"><ng-content /></div>`,
  styleUrl: "./treeview.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeviewComponent {}

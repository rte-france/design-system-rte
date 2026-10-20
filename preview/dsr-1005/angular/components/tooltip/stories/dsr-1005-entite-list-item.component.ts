import { NgTemplateOutlet } from "@angular/common";
import { Component, input } from "@angular/core";

import { TagComponent } from "../../tag/tag.component";
import { TooltipDirective } from "../tooltip.directive";

export type Dsr1005Entite = {
  code: string;
  type: string;
};

@Component({
  selector: "dsr-1005-entite-list-item",
  imports: [NgTemplateOutlet, TooltipDirective, TagComponent],
  template: `
    <div class="entite-list-item" [class.entite-list-item--selected]="selected()">
      @if (enableTooltip()) {
        <div
          class="entite-list-item__container"
          [class.entite-list-item__container--debug-relative]="debugContainerPositionRelative()"
          [rteTooltip]="entite().code"
          [rteTooltipPosition]="'top'"
        >
          <ng-container *ngTemplateOutlet="content" />
        </div>
      } @else {
        <div
          class="entite-list-item__container"
          [class.entite-list-item__container--debug-relative]="debugContainerPositionRelative()"
        >
          <ng-container *ngTemplateOutlet="content" />
        </div>
      }
    </div>

    <ng-template #content>
      <div class="entite-list-item__content">
        <div class="entite-list-item__title">
          <span>{{ entite().code }}</span>
        </div>
        <rte-tag [compactSpacing]="true" color="neutral" [label]="entite().type" tagType="decorative" />
      </div>
    </ng-template>
  `,
  styleUrl: "./dsr-1005-entite-list-item.component.scss",
})
export class Dsr1005EntiteListItemComponent {
  readonly entite = input.required<Dsr1005Entite>();
  readonly selected = input(false);
  readonly enableTooltip = input(true);
  /** Storybook only: mimics `rteTooltip` setting `position: relative` on the trigger. */
  readonly debugContainerPositionRelative = input(false);
}

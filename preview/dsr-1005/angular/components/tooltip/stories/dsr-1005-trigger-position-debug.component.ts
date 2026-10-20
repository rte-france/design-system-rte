import { Component, signal } from "@angular/core";

import { Dsr1005CanonicalPaginationComponent } from "./dsr-1005-canonical-pagination.component";
import { Dsr1005EntiteListItemComponent } from "./dsr-1005-entite-list-item.component";
import { CORESSY_DSR1005_ENTITIES } from "./dsr-1005-story.constants";

type RectSnapshot = {
  top: number;
  bottom: number;
  height: number;
  width: number;
};

type DebugSnapshot = {
  triggerPosition: string;
  triggerRect: RectSnapshot;
  entiteRowRect: RectSnapshot | null;
  linkRect: RectSnapshot | null;
  tooltipHostRect: RectSnapshot | null;
  tooltipBodyRect: RectSnapshot | null;
  gapTriggerTopToTooltipBottom: number | null;
};

@Component({
  selector: "dsr-1005-trigger-position-debug",
  imports: [Dsr1005CanonicalPaginationComponent, Dsr1005EntiteListItemComponent],
  template: `
    <p class="debug-intro">
      Canonical Coressy layout (paginated card + router link + entite list item). Hover a row: metrics refresh after
      tooltip open. Compare with static rows below — middle row keeps
      <code>position: relative</code> on <code>__container</code> (what <code>rteTooltip</code> sets in
      <code>positionTooltip()</code>) without using the directive.
    </p>

    <div class="debug-static__host" (mouseenter)="onListMouseEnter($event)" (focusin)="onListMouseEnter($event)">
      <dsr-1005-canonical-pagination [entities]="entities" [selectedIndex]="2" />
    </div>

    <pre class="debug-metrics">{{ metricsText() }}</pre>

    <section class="debug-static">
      <p class="debug-static__title">Static layout comparison (no tooltip)</p>

      <div class="debug-static__row">
        <p class="debug-static__label">A — default (no position on __container)</p>
        <div class="debug-static__host">
          <dsr-1005-entite-list-item [entite]="sampleEntite" [enableTooltip]="false" />
        </div>
      </div>

      <div class="debug-static__row">
        <p class="debug-static__label">B — __container with position: relative (directive side effect, no tooltip)</p>
        <div class="debug-static__host">
          <dsr-1005-entite-list-item
            [entite]="sampleEntite"
            [enableTooltip]="false"
            [debugContainerPositionRelative]="true"
          />
        </div>
      </div>
    </section>
  `,
  styleUrl: "./dsr-1005-trigger-position-debug.component.scss",
})
export class Dsr1005TriggerPositionDebugComponent {
  readonly entities = CORESSY_DSR1005_ENTITIES;
  readonly sampleEntite = CORESSY_DSR1005_ENTITIES[2];
  readonly metricsText = signal("Hover a row in the list above…");

  onListMouseEnter(event: Event): void {
    const eventTarget = event.target;
    if (!(eventTarget instanceof HTMLElement)) {
      return;
    }

    const container = eventTarget.closest(".entite-list-item__container");
    if (!container) {
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.metricsText.set(JSON.stringify(this.buildSnapshot(container), null, 2));
      });
    });
  }

  private buildSnapshot(container: Element): DebugSnapshot {
    const trigger = container as HTMLElement;
    const row = trigger.closest(".entite-list-item");
    const link = trigger.closest(".card-pagination-entite__link");
    const tooltipHost = document.querySelector("#overlay-root rte-tooltip");
    const tooltipBody = tooltipHost?.querySelector(".tooltip");

    const triggerRect = this.toRectSnapshot(trigger.getBoundingClientRect());
    const tooltipBodyRect = tooltipBody ? this.toRectSnapshot(tooltipBody.getBoundingClientRect()) : null;

    return {
      triggerPosition: getComputedStyle(trigger).position,
      triggerRect,
      entiteRowRect: row ? this.toRectSnapshot(row.getBoundingClientRect()) : null,
      linkRect: link ? this.toRectSnapshot(link.getBoundingClientRect()) : null,
      tooltipHostRect: tooltipHost ? this.toRectSnapshot(tooltipHost.getBoundingClientRect()) : null,
      tooltipBodyRect,
      gapTriggerTopToTooltipBottom: tooltipBodyRect ? triggerRect.top - tooltipBodyRect.bottom : null,
    };
  }

  private toRectSnapshot(rect: DOMRect): RectSnapshot {
    return {
      top: Math.round(rect.top * 10) / 10,
      bottom: Math.round(rect.bottom * 10) / 10,
      height: Math.round(rect.height * 10) / 10,
      width: Math.round(rect.width * 10) / 10,
    };
  }
}

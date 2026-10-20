import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Dsr1005Entite, Dsr1005EntiteListItemComponent } from "./dsr-1005-entite-list-item.component";

@Component({
  selector: "dsr-1005-entite-list-panel",
  imports: [Dsr1005EntiteListItemComponent, RouterLink],
  template: `
    <div class="panel">
      <p class="panel__title">Liens avec d'autres entités</p>
      <p class="panel__subtitle">{{ entities().length }} entité(s)</p>
      @if (wrapWithRouterLink()) {
        <div
          class="card-pagination-entite__selectors panel__list"
          [class.panel__list--scroll]="scrollable()"
          [class.card-pagination-entite__selectors--link-stretch]="linkStretch()"
        >
          @for (entite of entities(); track entite.code; let index = $index) {
            <a
              class="card-pagination-entite__link"
              [routerLink]="routerLinkFor(entite)"
            >
              <dsr-1005-entite-list-item [entite]="entite" [selected]="index === selectedIndex()" />
            </a>
          }
        </div>
      } @else {
        <div
          class="panel__list"
          [class.panel__list--scroll]="scrollable()"
          [class.panel__list--stretch]="stretchList()"
        >
          @for (entite of entities(); track entite.code; let index = $index) {
            <dsr-1005-entite-list-item [entite]="entite" [selected]="index === selectedIndex()" />
          }
        </div>
      }
    </div>
  `,
  styleUrl: "./dsr-1005-entite-list-panel.component.scss",
})
export class Dsr1005EntiteListPanelComponent {
  readonly entities = input.required<Dsr1005Entite[]>();
  readonly scrollable = input(false);
  readonly stretchList = input(false);
  readonly linkStretch = input(false);
  readonly wrapWithRouterLink = input(false);
  readonly selectedIndex = input<number | null>(2);

  routerLinkFor(entite: Dsr1005Entite): string[] {
    return ["/referentiel-des-entites/fiche-entite", entite.type, entite.code, "demo-journee"];
  }
}

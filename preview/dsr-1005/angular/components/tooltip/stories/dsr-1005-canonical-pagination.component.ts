import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Dsr1005Entite, Dsr1005EntiteListItemComponent } from "./dsr-1005-entite-list-item.component";

@Component({
  selector: "dsr-1005-canonical-pagination",
  imports: [Dsr1005EntiteListItemComponent, RouterLink],
  template: `
    <div class="card-pagination-entite">
      <div class="card-pagination-entite__header">
        <div class="card-pagination-entite__title">{{ title() }}</div>
      </div>

      <div class="card-pagination-entite__body">
        <div class="card-pagination-entite__quantite">{{ entities().length }} entité(s)</div>
        <div class="card-pagination-entite__selectors">
          @for (entite of entities(); track entite.code; let index = $index) {
            <a class="card-pagination-entite__link" [routerLink]="routerLinkFor(entite)">
              <dsr-1005-entite-list-item [entite]="entite" [selected]="index === selectedIndex()" />
            </a>
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: "./dsr-1005-canonical-pagination.component.scss",
})
export class Dsr1005CanonicalPaginationComponent {
  readonly title = input("Liens avec d'autres entités");
  readonly entities = input.required<Dsr1005Entite[]>();
  readonly selectedIndex = input<number | null>(2);

  routerLinkFor(entite: Dsr1005Entite): string[] {
    return ["/referentiel-des-entites/fiche-entite", entite.type, entite.code, "demo-journee"];
  }
}

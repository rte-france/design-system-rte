### Utilisation de base

```html
<rte-searchbar
  id="searchbar-default"
  appearance="primary"
  label="Rechercher"
  value=""
  assistiveText="Texte assistif"
  [showResetButton]="true"
  (valueChange)="value = $event"
/>
```

### Apparences

Utiliser `appearance="primary"` pour afficher un bouton de recherche à droite du champ. Utiliser `appearance="secondary"` pour afficher une icône de recherche dans le champ sans bouton séparé.

```html
<rte-searchbar appearance="primary" /> <rte-searchbar appearance="secondary" />
```

### Espacement compact

Activer `compactSpacing` lorsque l’espace vertical est limité :

```html
<rte-searchbar appearance="primary" [compactSpacing]="true" />
<rte-searchbar appearance="secondary" [compactSpacing]="true" />
```

### Effacement et recherche

`showResetButton` affiche l’action d’effacement. `clear` est émis lorsque cette action est utilisée. `searchEvent` reçoit la valeur courante lors d’un clic sur le bouton de recherche ou lorsque l’utilisateur appuie sur Entrée.

```html
<rte-searchbar [value]="value" (valueChange)="value = $event" (clear)="value = ''" (searchEvent)="search($event)" />
```

### Suggestions et options filtrées

La Searchbar peut être utilisée comme trigger d’un dropdown contrôlé par le parent. Dans cet exemple, les options sont filtrées à partir de trois caractères et la sélection remplace la valeur :

```ts
import { computed, signal } from "@angular/core";
import { DropdownItemConfig } from "../../dropdown/dropdown.types";

readonly allOptions = [
  "Apple",
  "Apple2",
  "Banana",
  "Banana2",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
];

readonly searchValue = signal("");

readonly filteredOptions = computed<DropdownItemConfig[]>(() => {
  const value = this.searchValue();
  if (!value || value.length < 3) {
    return [];
  }

  return this.allOptions
    .filter((option) => option.toLowerCase().includes(value.toLowerCase()))
    .map((label) => ({ label }));
});

readonly isOpen = computed(() => this.filteredOptions().length > 0);

handleChange(value: string): void {
  this.searchValue.set(value);
}

handleOptionSelect(event: { event: Event; id: string }): void {
  this.searchValue.set(event.id);
}
```

```html
<div
  rteDropdown
  rteDropdownPosition="bottom"
  [rteDropdownIsOpen]="isOpen()"
  [rteDropdownOffset]="10"
  [rteDropdownAutofocus]="false"
  [rteDropdownAutoOpen]="false"
  (menuEvent)="handleOptionSelect($event)"
>
  <div rteDropdownTrigger style="width: fit-content">
    <rte-searchbar
      id="searchbar-filtered"
      appearance="primary"
      [value]="searchValue()"
      assistiveText="Type at least 3 characters to filter options"
      [showResetButton]="true"
      (valueChange)="handleChange($event)"
    />
  </div>
  <rte-dropdown-menu [items]="filteredOptions()" />
</div>
```

### Formulaire réactif

`SearchbarComponent` peut être relié à un `FormControl` :

```html
<rte-searchbar id="searchbar-reactive-form" [showResetButton]="true" [formControl]="control" />
```

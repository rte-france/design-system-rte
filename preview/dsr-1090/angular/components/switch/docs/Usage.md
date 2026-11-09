### Utilisation de base

Importez `SwitchComponent` dans le tableau `imports` du composant standalone consommateur, puis utilisez l'élément hôte `<rte-switch>`.

```ts
import { Component } from "@angular/core";
import { SwitchComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-preferences",
  imports: [SwitchComponent],
  template: `
    <rte-switch
      label="Switch"
      [checked]="isEnabled"
      (stateChange)="isEnabled = $any($event.target).checked"
    />
  `,
})
export class PreferencesComponent {
  isEnabled = false;
}
```

### Variantes

#### Apparence

Les apparences disponibles sont `brand` et `neutral`.

```html
<rte-switch label="Brand" appearance="brand"></rte-switch>
<rte-switch label="Neutral" appearance="neutral"></rte-switch>
```

#### Label et icône

Le label est affiché lorsqu'il est fourni et l'icône est affichée par défaut. Utilisez le property binding `showIcon` pour masquer l'icône.

```html
<rte-switch label="Avec label et icône"></rte-switch>
<rte-switch label="Sans icône" [showIcon]="false"></rte-switch>
```

Un nom accessible est obligatoire. Vous pouvez fournir un `label`, `ariaLabel` ou `ariaLabelledBy`.

```html
<rte-switch ariaLabel="Activer l'option"></rte-switch>
<rte-switch ariaLabelledBy="option-label"></rte-switch>
```

#### États désactivé et en lecture seule

```html
<rte-switch label="Disabled Switch" [disabled]="true"></rte-switch>
<rte-switch label="Read-Only Switch" [readOnly]="true"></rte-switch>
```

#### État initial

Utilisez `[checked]` pour fournir l'état initial et `stateChange` pour observer les changements.

```html
<rte-switch label="Checked Switch" [checked]="true"></rte-switch>
```

#### Formulaire réactif

`SwitchComponent` implémente `ControlValueAccessor` et peut être associé à un `FormControl`.

```ts
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { SwitchComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-preferences",
  imports: [ReactiveFormsModule, SwitchComponent],
  template: `
    <rte-switch label="Switch" [formControl]="control" />
  `,
})
export class PreferencesComponent {
  control = new FormControl(false, { nonNullable: true });
}
```

# Composants contrôlés et non contrôlés (Angular)

## Overview

```typescript
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { TextInputComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-example",
  imports: [ReactiveFormsModule, TextInputComponent],
  template: `
    <rte-text-input label="Name" id="name" [formControl]="nameControl" />
  `,
})
export class ExampleComponent {
  readonly nameControl = new FormControl("");
}
```

## Usage

En Angular, « qui possède la valeur » dépend de la façon dont vous liez le composant. Le design system propose deux schémas d'intégration principaux :

1. **Angular Forms (recommandé pour les formulaires)** — liaison via `[formControl]`, `formControlName` ou `ngModel`. Le composant implémente `ControlValueAccessor` et Angular possède le modèle.
2. **Liaison input / output** — liaison de `[value]` (ou d'un input équivalent) et gestion de `(valueChange)` dans le parent. Le parent possède explicitement le modèle.

Ces schémas correspondent à la même idée que contrôlé / non contrôlé en React, mais Angular les exprime via son API de formulaires plutôt que via `value` vs `defaultValue`.

### Composants compatibles avec ControlValueAccessor

Les composants suivants s'intègrent aux formulaires Angular via `[formControl]`, `formControlName` ou `ngModel` :

- `rte-text-input`
- `rte-textarea`
- `rte-select`
- `rte-switch`
- `rte-searchbar`
- `rte-datepicker`
- `rte-daterangepicker`
- `rte-time-picker`

Lorsque vous utilisez `[formControl]`, Angular est la source de vérité. Le composant reçoit les mises à jour via `writeValue`, émet les changements via le callback `onChange` enregistré et respecte l'état désactivé via `setDisabledState`.

### Formulaires réactifs (formControl)

Utilisez ce schéma dans les formulaires, lorsque vous avez besoin de validation, de réinitialisation ou de mises à jour programmatiques :

```typescript
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { TextInputComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-profile",
  imports: [ReactiveFormsModule, TextInputComponent],
  template: `
    <rte-text-input label="Name" id="name" [formControl]="nameControl" />
    <button type="button" (click)="nameControl.setValue('from model')">Reset from model</button>
    <span>{{ nameControl.value }}</span>
  `,
})
export class ProfileComponent {
  readonly nameControl = new FormControl("");
}
```

La même liaison fonctionne pour `rte-select`, `rte-switch` et les autres composants CVA :

```html
<rte-select
  id="country"
  label="Country"
  [options]="options"
  [formControl]="countryControl"
/>
```

Angular met à jour le composant lorsque vous appelez `setValue`, `patchValue`, `reset` ou `disable` sur le contrôle. L'interaction utilisateur met à jour la valeur du contrôle et déclenche `valueChanges`.

### Liaison input / output (état possédé par le parent)

Lorsque vous n'utilisez pas Angular Forms, liez l'input de valeur et mettez-le à jour dans le gestionnaire de sortie :

```typescript
import { Component, signal } from "@angular/core";
import { SelectComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-filter",
  imports: [SelectComponent],
  template: `
    <rte-select
      id="filter"
      label="Status"
      [options]="options"
      [value]="selectedValue()"
      (valueChange)="selectedValue.set($event)"
    />
  `,
})
export class FilterComponent {
  readonly selectedValue = signal("option-2");
  readonly options = [
    { value: "option-1", label: "Option 1" },
    { value: "option-2", label: "Option 2" },
  ];
}
```

C'est l'équivalent Angular d'un composant React contrôlé : le parent conserve la valeur et la repasse à chaque changement.

Pour les champs texte, `rte-text-input` et `rte-textarea` exposent `(valueChange)` de la même manière lorsqu'ils sont utilisés sans `[formControl]`.

### Ne pas mélanger formControl et value

Choisissez une intégration par instance :

```html
<!-- Correct : formControl uniquement -->
<rte-text-input [formControl]="control" />

<!-- Correct : value + valueChange uniquement -->
<rte-text-input [value]="text()" (valueChange)="text.set($event)" />

<!-- Incorrect : ne pas combiner -->
<rte-text-input [formControl]="control" [value]="text()" />
```

`ControlValueAccessor` et la liaison explicite `[value]` entrent en concurrence sur le même état interne et produisent des résultats incohérents.

### Composants contrôlés par des inputs dédiés

Certains composants sont contrôlés via des inputs spécifiques plutôt que `value` :

| Composant | Input contrôlé | Output / callback |
|-----------|----------------|-------------------|
| `rte-modal` (directive) | `[rteModalIsOpen]` | événements de fermeture via l'API de la directive |
| `rte-side-nav` | `[isCollapsed]` | repli basculé en interne ; re-lier `isCollapsed` depuis le parent pour imposer l'état |
| `rte-switch` | `[checked]` ou `[formControl]` | `(stateChange)` pour l'événement DOM ; utiliser le form control ou `[checked]` pour l'état booléen |

### État replié du SideNav

`rte-side-nav` accepte `[isCollapsed]` et le synchronise avec son état interne. Lorsque l'utilisateur clique sur le contrôle de repli, le composant se met à jour en interne. Pour contrôler entièrement le repli depuis le parent, conservez `isCollapsed` dans un signal ou une propriété et mettez-le à jour lorsque vous devez imposer un état replié ou développé :

```typescript
readonly collapsed = signal(false);

// template
<rte-side-nav [isCollapsed]="collapsed()" [items]="items" collapsible />
```

## Limitations

### Ne pas combiner formControl et value sur la même instance

Lier à la fois `[formControl]` et `[value]` sur un composant provoque des mises à jour contradictoires. Choisissez les formulaires réactifs/template-driven ou la liaison input/output, pas les deux.

### formControl requiert ReactiveFormsModule ou FormsModule

`[formControl]` et `formControlName` nécessitent le module Angular Forms correspondant dans le tableau `imports` du composant.

### L'input value ne remplace pas formControl pour la validation

La liaison input/output ne se connecte pas aux validateurs Angular, ni aux états `touched` ou `dirty`. Utilisez `[formControl]` lorsque vous avez besoin d'une validation au niveau du formulaire et d'un affichage d'erreurs lié au statut du contrôle.

### Synchronisation de la value du Select

`rte-select` s'initialise depuis `[value]` dans `ngAfterViewInit`. Si les options se chargent de façon asynchrone après l'init, vérifiez que la sélection affichée correspond toujours à la valeur liée une fois les options disponibles.

### Le repli du SideNav n'est pas lié dans les deux sens

`rte-side-nav` n'expose pas de output `(collapsedChange)`. Passer `[isCollapsed]` définit l'état depuis le parent ; les basculements utilisateur ne mettent à jour que l'état interne jusqu'à ce que la liaison parent change à nouveau.

### Switch : checked vs formControl

`rte-switch` accepte à la fois `[checked]` et `[formControl]`. Utilisez une seule source de vérité. Privilégiez `[formControl]` dans les formulaires et `[checked]` avec gestion manuelle de l'état uniquement en dehors des formulaires.

## FAQ

Q : Dois-je utiliser `[formControl]` ou `[value]` avec `(valueChange)` ?

R : Utilisez `[formControl]` (ou `formControlName`) dans les formulaires lorsque vous avez besoin de validation, de réinitialisation ou d'un état désactivé géré par Angular. Utilisez `[value]` et `(valueChange)` pour un état simple possédé par le parent en dehors d'un form group. Voir Usage / Formulaires réactifs et Liaison input / output.

Q : Mon champ ne se met pas à jour quand je saisis — j'ai lié `[value]` mais rien ne change côté parent.

R : Vous devez gérer `(valueChange)` et mettre à jour la propriété ou le signal lié. `[value]` seul est un flux entrant vers le composant tant que vous ne réécrivez pas la valeur au changement. Voir Usage / Liaison input / output.

Q : J'utilise `[formControl]` mais `setValue` depuis le code ne se reflète pas dans l'interface.

R : Vérifiez que la même instance de `FormControl` est liée au composant et que le contrôle n'est pas désactivé lorsque vous attendez des modifications. Les composants CVA implémentent `writeValue` et doivent refléter les mises à jour programmatiques. Vérifiez aussi que vous n'avez pas lié `[value]` sur le même élément.

Q : Puis-je utiliser `ngModel` au lieu de `[formControl]` ?

R : Oui. Les composants CVA fonctionnent avec les formulaires template-driven lorsque `FormsModule` est importé et que `ngModel` est utilisé à la place de `[formControl]`.

Q : Pourquoi mon Select affiche-t-il la mauvaise option après le chargement des options depuis une API ?

R : Voir Limitations / Synchronisation de la value du Select. Assurez-vous que `[value]` correspond à un `value` d'option une fois les options chargées, ou définissez la valeur du contrôle après la disponibilité des options.

Q : L'état replié de mon SideNav et l'état de mon composant parent se désynchronisent.

R : Voir Limitations / Le repli du SideNav n'est pas lié dans les deux sens. La navigation gère les clics de bascule en interne ; mettez à jour `[isCollapsed]` depuis le parent lorsque vous devez imposer un état précis.

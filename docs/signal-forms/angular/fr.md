# Signal Forms et composants Luciole (Angular)

## Overview

```typescript
import { Component, signal } from "@angular/core";
import { form, FormField } from "@angular/forms/signals";
import { TextInputComponent } from "@design-system-rte/angular";

interface ProfileModel {
  name: string;
}

@Component({
  selector: "app-profile",
  imports: [FormField, TextInputComponent],
  template: `
    <rte-text-input label="Name" id="name" [formField]="profileForm.name" />
  `,
})
export class ProfileComponent {
  readonly profileModel = signal<ProfileModel>({ name: "" });
  readonly profileForm = form(this.profileModel);
}
```

Si votre application est en **Angular 21+** avec [Signal Forms](https://angular.dev/essentials/signal-forms) (`@angular/forms/signals`), liez les composants Luciole avec `[formField]` plutôt qu’avec `[formControl]` ou `[value]` / `(valueChange)`. Les champs de formulaire Luciole implémentent `ControlValueAccessor` ; la directive `FormField` d’Angular les raccorde à votre arbre de champs comme un `<input>` natif.

## Usage

Ce guide s’adresse aux équipes qui construisent déjà leurs formulaires avec Signal Forms (`form()`, modèle en `signal`, `[formField]` sur les contrôles natifs). Pour intégrer les champs, sélecteurs et bascules Luciole, placez `[formField]` sur l’hôte du composant — le même nœud de champ que pour un `<input>`. Ces composants implémentent `ControlValueAccessor` : c’est le mécanisme qu’Angular utilise pour les connecter à Signal Forms, sans API d’intégration dédiée côté design system.

Références officielles :

- [Forms with signals (essentials)](https://angular.dev/essentials/signal-forms#1-create-a-form-model-with-signal)
- [FormField API](https://angular.dev/api/forms/signals/FormField)
- [Custom controls — how FormField works with CVA](https://angular.dev/guide/forms/signals/custom-controls#how-the-formfield-directive-works)



### Composants avec `ControlValueAccessor`

Seuls les composants ci-dessous enregistrent `NG_VALUE_ACCESSOR` dans `@design-system-rte/angular`. Ils fonctionnent avec `[formControl]`, `formControlName`, `ngModel` et Signal Forms via `[formField]`. Aucun autre composant Luciole n’implémente CVA à ce jour.


| Composant (import)         | Sélecteur             | Type de valeur CVA                                     |
| -------------------------- | --------------------- | ------------------------------------------------------ |
| `TextInputComponent`       | `rte-text-input`      | `string`                                               |
| `TextareaComponent`        | `rte-textarea`        | `string`                                               |
| `SearchbarComponent`       | `rte-searchbar`       | `string`                                               |
| `SelectComponent`          | `rte-select`          | `string` (simple) ou `string[]` si `[multiple]="true"` |
| `SwitchComponent`          | `rte-switch`          | `boolean`                                              |
| `DatepickerComponent`      | `rte-datepicker`      | `Date | null`                                          |
| `DaterangepickerComponent` | `rte-daterangepicker` | `[Date | null, Date | null] | null`                    |
| `TimePickerComponent`      | `rte-time-picker`     | `TimeFormat`                                           |


Le CVA du time picker lit et écrit toujours un objet `TimeFormat` complet.


| Propriété | Type     | Description                                          |
| --------- | -------- | ---------------------------------------------------- |
| `hh`      | `string` | Segment heures (souvent deux chiffres, `00`–`23`).   |
| `mm`      | `string` | Segment minutes (souvent deux chiffres, `00`–`59`).  |
| `ss`      | `string` | Segment secondes (souvent deux chiffres, `00`–`59`). |


Exemple : `{ hh: "09", mm: "30", ss: "00" }`. Privilégiez des segments renseignés lorsque le champ n’est pas vide ; des chaînes vides (`""`) correspondent à une saisie incomplète côté composant.

Initialisez chaque propriété du modèle avec une **valeur définie** (`''`, `false`, `null`, `{ hh: '00', mm: '00', ss: '00' }`, etc.). Avec Signal Forms, `undefined` signifie l’absence du champ, pas une valeur vide.

### Formulaire de base

1. Définir un `signal` modèle avec tous les champs initialisés.
2. Appeler `form(model)` (optionnellement avec un schéma de validation).
3. Placer `[formField]="yourForm.fieldName"` sur le composant Luciole.
4. Lire ou mettre à jour via `yourForm.fieldName().value()` et `yourForm.fieldName().value.set(...)`, ou lire le modèle entier avec `yourModel()`.

```typescript
import { Component, signal } from "@angular/core";
import { form, FormField } from "@angular/forms/signals";
import { TextInputComponent, TextareaComponent } from "@design-system-rte/angular";

interface ContactModel {
  name: string;
  message: string;
}

@Component({
  selector: "app-contact",
  imports: [FormField, TextInputComponent, TextareaComponent],
  template: `
    <form (submit)="onSubmit($event)">
      <rte-text-input label="Name" id="contact-name" [formField]="contactForm.name" />
      <rte-textarea label="Message" id="contact-message" [formField]="contactForm.message" />
      <button type="submit">Send</button>
    </form>
    <p>Name: {{ contactForm.name().value() }}</p>
  `,
})
export class ContactComponent {
  readonly contactModel = signal<ContactModel>({
    name: "",
    message: "",
  });

  readonly contactForm = form(this.contactModel);

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.contactModel());
  }
}
```

`FormField` assure la liaison bidirectionnelle avec le CVA (`writeValue`, `registerOnChange`, `registerOnTouched`, `setDisabledState`). Les saisies utilisateur mettent à jour le signal modèle ; un `value.set()` programmatique met à jour le composant.

### Validation et état des champs

Ajoutez les règles dans le second argument de `form()` :

```typescript
import { email, form, FormField, required } from "@angular/forms/signals";

readonly profileModel = signal({ email: "" });

readonly profileForm = form(this.profileModel, (schemaPath) => {
  required(schemaPath.email, { message: "Email is required" });
  email(schemaPath.email, { message: "Enter a valid email address" });
});
```

Chaque nœud expose des signaux tels que `valid()`, `invalid()`, `touched()`, `dirty()`, `disabled()` et `errors()`. Utilisez-les dans le template pour bloquer l’envoi et afficher les messages :

```html
<button type="submit" [disabled]="profileForm().invalid()">Save</button>

@if (profileForm.email().touched() && profileForm.email().invalid()) {
  @for (error of profileForm.email().errors(); track error.message) {
    <p>{{ error.message }}</p>
  }
}
```



#### Afficher les erreurs sur les champs Luciole

Les champs Luciole ne lisent pas automatiquement les erreurs Signal Forms. Ils utilisent des entrées comme `error`, `assistiveAppearance` et `assistiveTextLabel`. Reliez explicitement l’état du champ :

```html
<rte-text-input
  label="Email"
  id="profile-email"
  [formField]="profileForm.email"
  assistiveAppearance="error"
  [error]="profileForm.email().touched() && profileForm.email().invalid()"
  [assistiveTextLabel]="profileForm.email().errors()[0]?.message ?? ''"
/>
```

Définissez la validation dans le schéma du formulaire ; utilisez les entrées du composant uniquement pour la présentation.

### Sélecteurs de date et switch

Même liaison `[formField]` ; adaptez le type du modèle au CVA :

```typescript
import type { TimeFormat } from "@design-system-rte/core";

interface SchedulingModel {
  active: boolean;
  day: Date | null;
  range: [Date | null, Date | null] | null;
  time: TimeFormat;
}

readonly schedulingModel = signal<SchedulingModel>({
  active: false,
  day: null,
  range: null,
  time: { hh: "09", mm: "00", ss: "00" },
});
```

```html
<rte-switch label="Enabled" [formField]="schedulingForm.active" />
<rte-datepicker label="Date" id="day" [formField]="schedulingForm.day" />
<rte-daterangepicker label="Range" id="range" [formField]="schedulingForm.range" />
<rte-time-picker label="Time" id="time" [formField]="schedulingForm.time" />
```

Pour `rte-select`, liez `[options]` comme d’habitude ; la valeur sélectionnée transite par `[formField]`.

### État désactivé

Lorsque l’arbre de champs marque un champ comme désactivé (par exemple via le schéma ou `disabled()` sur l’état du champ), `FormField` appelle `setDisabledState` sur le CVA. Les composants Luciole fusionnent cet état avec leur entrée `[disabled]`. Privilégiez le pilotage depuis le formulaire signal plutôt qu’un `[disabled]` concurrent sur le même champ, sauf override volontaire.

### Signal Forms vs `[formControl]` réactif


| Intégration                         | Quand l’utiliser                                                       |
| ----------------------------------- | ---------------------------------------------------------------------- |
| `[formField]="form.field"`          | Nouveaux formulaires Angular 21+ avec modèle signal et arbre de champs |
| `[formControl]` / `formControlName` | Formulaires réactifs ou template-driven existants                      |


Ne combinez pas `[formField]` avec `[formControl]`, `formControlName`, `ngModel`, ou `[value]` / `(valueChange)` Luciole sur la **même** instance. Choisissez une seule voie d’intégration par composant.

### Mises à jour programmatiques

Les mises à jour via l’arbre de champs restent synchronisées avec l’interface :

```typescript
this.profileForm.email().value.set("user@example.com");
// profileModel().email est mis à jour également
```

Réinitialisez un champ avec `this.profileForm.email().reset()` pour effacer l’état d’interaction et de validation de ce nœud.

## Limitations

### Passerelle CVA, pas contrôles Signal Forms natifs

Les composants de formulaire Luciole implémentent `ControlValueAccessor`. Angular les connecte via la voie de compatibilité décrite dans [Custom controls](https://angular.dev/guide/forms/signals/custom-controls#how-the-formfield-directive-works). Ils n’implémentent pas encore `FormValueControl` / `FormCheckboxControl` ; les entrées optionnelles comme `invalid` ou `errors` injectées par `FormField` ne sont pas disponibles sur l’API composant.

### Les erreurs de validation ne sont pas reliées au libellé assistif

Les composants ne consomment pas `NgControl` ni les signaux d’erreur Signal Forms en interne. Reliez `error`, `assistiveAppearance` et `assistiveTextLabel` (ou votre propre messagerie) depuis `field().errors()`, `field().invalid()` et `field().touched()`.

### Ne pas combiner `[formField]` avec d’autres liaisons de valeur

Sur une instance : soit `[formField]`, soit formulaires réactifs / template-driven (`[formControl]`, `formControlName`, `ngModel`), soit `[value]` et `(valueChange)` Luciole. Les mélanges provoquent des mises à jour incohérentes, comme mélanger `[formControl]` et `[value]`.
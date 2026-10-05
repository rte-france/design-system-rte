### Utilisation de base

```html
<rte-select
  id="select1"
  label="Choisir une option"
  [value]="'option-2'"
  [options]="[
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' }
  ]"
  placeholder="Select an option"
  (valueChange)="onValueChange($event)"
></rte-select>
```

### Variantes

#### États

```html
<rte-select [options]="options" label="Choisir" [isError]="true"></rte-select>
<rte-select [options]="options" label="Choisir" [readOnly]="true"></rte-select>
<rte-select [options]="options" label="Choisir" [disabled]="true"></rte-select>
```

#### Espacement compact

```html
<rte-select [options]="options" label="Choisir" [compactSpacing]="true"></rte-select>
```

#### Sélection visible

```html
<rte-select [options]="options" label="Choisir" variant="visibly-selected"></rte-select>
```

#### Sélection multiple

```html
<rte-select
  [options]="options"
  label="Rôles"
  [multiple]="true"
  [value]="['option-1', 'option-2']"
  [withSelectAll]="true"
  optionToDisplay="first-selected"
  (valueChange)="onValuesChange($event)"
></rte-select>
```

#### Formulaire réactif

```html
<rte-select
  label="Role"
  id="select-reactive-form"
  [options]="options"
  [showResetButton]="true"
  [formControl]="control"
></rte-select>
```

#### Réinitialisation

```html
<rte-select [options]="options" label="Choisir" [value]="'option-2'" [showResetButton]="true"></rte-select>
```

#### En-tête et pied de liste

Les contenus projetés avec les sélecteurs `select-header` et `select-footer` sont placés dans l’en-tête et le pied de la liste déroulante.

```html
<rte-select [options]="options" label="Choisir">
  <div select-header>Filtres</div>
  <button type="button" select-footer>Confirmer</button>
</rte-select>
```

Des `TemplateRef` peuvent également être fournis avec `headerTemplate` et `footerTemplate`.

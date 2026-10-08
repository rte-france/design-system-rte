### États

```html
<rte-radio-button
  label="Disabled"
  value="radio-value"
  groupName="disabled-radio-group"
  [disabled]="true"
></rte-radio-button>
<rte-radio-button label="Error" value="radio-value" groupName="error-radio-group" [error]="true"></rte-radio-button>
<rte-radio-button
  label="Read Only"
  value="radio-value"
  groupName="readonly-radio-group"
  [readOnly]="true"
></rte-radio-button>
<rte-radio-button
  label="Initially Checked"
  value="radio-value"
  groupName="checked-radio-group"
  [isChecked]="true"
></rte-radio-button>
```

### Libellé absent

Le libellé visuel n'est pas rendu lorsque `label` est vide. Un nom accessible reste requis.

```html
<rte-radio-button label="" value="radio-button" groupName="hidden-label-radio-group" />
```

Utilisez `ariaLabel` ou `ariaLabelledBy` pour fournir un nom accessible ou un élément accessible référençant le radio button.

```html
<rte-radio-button
  label=""
  ariaLabel="Radio Button"
  value="radio-button"
  groupName="hidden-label-aria-only-radio-group"
/>
```

### Groupe de boutons radio

Pour regrouper plusieurs options, utilisez la même valeur `groupName` sur chaque `rte-radio-button`.
Chaque option doit avoir une valeur `value` distincte. Le composant utilitaire `rte-radio-button-group` prend en charge ce fonctionnement en ajoutant la gestion d'un titre, le texte d'aide, le message d'erreur ou la sélection centralisée,

```html
<rte-radio-button-group
  [items]="[
    { label: 'Option A', value: 'option-a', isChecked: true },
    { label: 'Option B', value: 'option-b' },
    { label: 'Option C', value: 'option-c' }
  ]"
  groupName="group1"
  direction="horizontal"
  [showItemsLabel]="true"
  groupTitle="Radio Button Group Title"
  [showGroupTitle]="true"
  groupHelpText="This is a help text for the radio button group."
  [showHelpText]="true"
  errorMessage="This is an error message. Please select an option."
  [error]="false"
  [disabled]="false"
  [readOnly]="false"
/>
```

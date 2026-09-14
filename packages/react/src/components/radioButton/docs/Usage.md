### États

```tsx
<RadioButton label="Disabled" value="disabled-radio-button" groupName="disabled-radio-group" disabled />
<RadioButton label="Read Only" value="readonly-radio-button" groupName="readonly-radio-group" readOnly />
<RadioButton label="Error" value="error-radio-button" groupName="error-radio-group" error />
<RadioButton
  label="Initially Checked"
  value="initial-checked-radio-button"
  groupName="initial-checked-radio-group"
  isChecked
/>
```

### Libellé absent

Le libellé visuel n'est pas rendu lorsque `label` est vide. Un nom accessible reste requis.

```tsx
<RadioButton label="" value="radio-button" groupName="hidden-label-radio-group" />
```

Utilisez `aria-label` ou `aria-labelledby` pour fournir un nom accessible ou un élément accessible référençant le radio button.

```tsx
<span id="radio-button-label">Radio Button</span>
<RadioButton
  label=""
  value="radio-button"
  groupName="hidden-label-aria-only-radio-group"
  ariaLabel="Radio Button"
/>
```

### Groupe de boutons radio

Pour regrouper plusieurs options, utilisez la même valeur `groupName` sur chaque `RadioButton`.
Chaque option doit avoir une valeur `value` distincte. Le composant utilitaire `RadioButtonGroup` prend en charge ce fonctionnement en ajoutant la gestion d'un titre, le texte d'aide, le message d'erreur ou la sélection centralisée,

```tsx
<RadioButton label="Option A" value="option-a" groupName="options" isChecked />
<RadioButton label="Option B" value="option-b" groupName="options" />
<RadioButton label="Option C" value="option-c" groupName="options" />
```

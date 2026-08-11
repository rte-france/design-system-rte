## Usage

La propriété `tagType` détermine la manière dont le composant Tag utilise ses autres propriétés visuelles :

- Avec `tagType="status"`, la valeur de `status` contrôle à la fois l’état sémantique et l’icône. Le composant sélectionne automatiquement :
  - `check-circle` pour `success`,
  - `info` pour `information`,
  - `warning` pour `warning`,
  - `dangerous` pour `alert`.
- Avec `tagType="decorative"`, la valeur de `color` contrôle l’arrière-plan du tag.
- En mode décoratif, `showLeftIcon` doit être activé pour afficher l’icône fournie par `iconName`.

```html
<rte-tag tagType="status" status="success" label="Validé" />
```

```html
<rte-tag tagType="decorative" color="bleu-rte" label="Énergie" iconName="check" [showLeftIcon]="true" />
```

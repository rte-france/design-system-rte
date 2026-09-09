### Tag de statut

Utilisez le composant `rte-tag` avec `tagType="status"` pour afficher un état. L'icône est choisie automatiquement à partir de `status` :

- `check-circle` pour `success` ;
- `info` pour `information` ;
- `warning` pour `warning` ;
- `dangerous` pour `alert`.

```html
<rte-tag tagType="status" status="success" color="brand" label="Tag"></rte-tag>
```

L'exemple avec `status="success"` affiche automatiquement l'icône `check-circle`. Fournir une autre valeur à `iconName` ne la remplace pas, car les Tags de type `status` utilisent toujours l'icône associée à leur statut.

### Tag décoratif

Utilisez `tagType="decorative"` pour afficher une catégorie ou une information contextuelle. Avec ce type, vous pouvez fournir une icône avec `iconName`.

```html
<rte-tag tagType="decorative" color="saumon" label="Decorative Tag"></rte-tag>
```

### Compact spacing

```html
<rte-tag tagType="decorative" color="saumon" [compactSpacing]="true" label="Compact"></rte-tag>
```

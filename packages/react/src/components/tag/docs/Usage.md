### Tag de statut

Utilisez `tagType="status"` pour afficher un état. L'icône est choisie automatiquement à partir de `status`.

- `check-circle` pour `success`,

- `info` pour `information`,

- `warning` pour `warning`,

- `dangerous` pour `alert`

```tsx
<Tag tagType="status" status="success" color="brand" label="Tag Label" />
```

L’exemple ci-dessus affiche automatiquement l’icône `check-circle`. Fournir une autre valeur à `iconName` ne la remplace pas, car les tags de type statut utilisent toujours l’icône associée à leur statut.

### Tag décoratif

Utilisez `tagType="decorative"` pour afficher une catégorie ou une information contextuelle. Avec ce type, vous pouvez fournir une icône avec `iconName`.

```tsx
<Tag tagType="decorative" color="jaune" label="Decorative Tag with Icon" />
```

### Espacement compact

```tsx
<Tag tagType="decorative" color="saumon" compactSpacing label="Compact" />
```

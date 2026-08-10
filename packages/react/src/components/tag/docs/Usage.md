La propriété `tagType` détermine la manière dont le composant Tag utilise ses autres propriétés visuelles :

- Avec `tagType="status"`, la valeur de `status` contrôle à la fois l’état sémantique et l’icône. Le composant sélectionne automatiquement :
  - `check-circle` pour `success`,
  - `info` pour `information`,
  - `warning` pour `warning`,
  - `dangerous` pour `alert`
- Avec `tagType="decorative"`, la valeur de `color` contrôle l’arrière-plan du tag. Le composant ne sélectionne pas automatiquement d’icône : `iconName` doit donc être fourni lorsqu’une icône est nécessaire.
- `color` est destiné aux tags décoratifs. Lorsque `tagType="status"`, le style associé au statut prend le dessus sur `color`.

```tsx
<Tag tagType="status" status="success" label="Tag Label" />
```

L’exemple ci-dessus affiche automatiquement l’icône `check-circle`. Fournir une autre valeur à `iconName` ne la remplace pas, car les tags de type statut utilisent toujours l’icône associée à leur statut.

```tsx
<Tag tagType="decorative" color="jaune" iconName="check" label="Decorative Tag with Icon" iconName="check" />
```

L’exemple utilise ici `jaune` pour son arrière-plan et affiche explicitement l’icône `check`.

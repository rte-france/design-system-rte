## L’absence de `title` ou de `header` empêche le rendu du Drawer

Lorsque `showHeader` est activé, le Drawer n’est pas rendu si ni `title` ni `header` n’est fourni ; un avertissement est écrit dans la console.

## Une chaîne vide ne valide pas `title` ou `primaryButtonLabel`

Les règles évaluent la présence de la valeur ; une chaîne vide ne constitue donc pas un titre ou un libellé valide pour `title` ou `primaryButtonLabel`.

## `onClose` doit mettre à jour `isOpen` pour fermer avec Escape

`closeOnEscape` dépend de `onClose` ; le callback doit mettre à jour `isOpen` pour que le Drawer se ferme réellement.

## Le focus reste piégé dans le Drawer pendant son affichage

Le focus est piégé dans le Drawer pendant son affichage ; les contenus interactifs doivent donc rester accessibles depuis le Drawer.

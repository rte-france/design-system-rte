## L’absence de `rteDrawerTitle` ou de `#drawerHeader` empêche l’ouverture du Drawer

Lorsque `rteDrawerShowHeader` est activé, l’ouverture est refusée si ni `rteDrawerTitle` ni `#drawerHeader` n’est fourni ; un avertissement est écrit dans la console.

## L’absence de `rteDrawerAriaLabel` empêche l’ouverture lorsque le header par défaut n’est pas utilisé

Lorsque `rteDrawerShowHeader={false}` ou qu’un `#drawerHeader` personnalisé est fourni, l’ouverture est refusée sans `rteDrawerAriaLabel` ; une erreur est écrite dans la console.

## Une chaîne vide ne valide pas `rteDrawerTitle` ou `rteDrawerPrimaryButtonLabel`

Une chaîne vide ne constitue pas un titre ou un libellé valide pour `rteDrawerTitle` ou `rteDrawerPrimaryButtonLabel`.

## `rteDrawerIsOpen` ne contrôle que l’état initial

`rteDrawerIsOpen` est lu uniquement à l’initialisation ; pour les changements ultérieurs, utiliser `open()` ou `close()` via `#drawerHost`, ou un élément `rteDrawerTrigger`.

## Le focus reste piégé dans le Drawer en position modal

En position `modal`, le focus est piégé dans le Drawer pendant son affichage ; les contenus interactifs doivent rester accessibles depuis le Drawer. En position `responsive`, Tab et Shift+Tab peuvent quitter le Drawer pour atteindre le reste de la page.

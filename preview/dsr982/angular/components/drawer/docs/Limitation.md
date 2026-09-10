## L’absence de `rteDrawerTitle` ou de `#drawerHeader` empêche l’ouverture du Drawer

Lorsque `rteDrawerShowHeader` est activé, l’ouverture est refusée si ni `rteDrawerTitle` ni `#drawerHeader` n’est fourni ; un avertissement est écrit dans la console.

## Une chaîne vide ne valide pas `rteDrawerTitle` ou `rteDrawerPrimaryButtonLabel`

Une chaîne vide ne constitue pas un titre ou un libellé valide pour `rteDrawerTitle` ou `rteDrawerPrimaryButtonLabel`.

## `rteDrawerIsOpen` ne contrôle que l’état initial

`rteDrawerIsOpen` est lu uniquement à l’initialisation ; pour les changements ultérieurs, utiliser `open()` ou `close()` via `#drawerHost`, ou un élément `rteDrawerTrigger`.

## Le focus reste piégé dans le Drawer pendant son affichage

Le focus est piégé dans le Drawer pendant son affichage ; les contenus interactifs doivent rester accessibles depuis le Drawer.

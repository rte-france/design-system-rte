## DrawerDirective

| Nom                           | Type                            | Valeur par défaut | Description                                                                                                |
| ----------------------------- | ------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------- |
| rteDrawerCloseOnEscape        | input `boolean`                 | false             | Ferme le Drawer avec Escape lorsqu’il est ouvert.                                                          |
| rteDrawerCloseOnOverlayClick  | input `boolean`                 | false             | Ferme le Drawer modal lors d’un clic sur l’overlay.                                                        |
| rteDrawerFixedHeader          | input `boolean`                 | false             | Fixe le header et laisse le contenu défiler séparément.                                                    |
| rteDrawerId                   | input `string`                  | -                 | Identifiant requis du Drawer.                                                                              |
| rteDrawerIcon                 | input `string`                  | -                 | Icône du header par défaut. La valeur doit appartenir aux clés `RegularIconIdKey` ou `TogglableIconIdKey`. |
| rteDrawerIconAppearance       | input `"outlined" \| "filled"`  | `"outlined"`      | Apparence de l’icône du header.                                                                            |
| rteDrawerIsClosable           | input `boolean`                 | true              | Affiche le contrôle de fermeture du header par défaut.                                                     |
| rteDrawerIsCollapsible        | input `boolean`                 | false             | Affiche un bouton permettant d’ouvrir ou fermer le Drawer.                                                 |
| rteDrawerIsOpen               | input `boolean`                 | false             | État initial d’ouverture ; utilisez ensuite `open()` ou `close()` via `#drawerHost`.                       |
| rteDrawerPosition             | input `"modal" \| "responsive"` | `"modal"`         | Positionnement du Drawer.                                                                                  |
| rteDrawerPrimaryButtonLabel   | input `string`                  | -                 | Libellé de l’action primaire et activation du footer par défaut.                                           |
| rteDrawerSecondaryButtonLabel | input `string`                  | -                 | Libellé optionnel de l’action secondaire par défaut.                                                       |
| rteDrawerShowFooter           | input `boolean`                 | true              | Affiche le footer.                                                                                         |
| rteDrawerShowHeader           | input `boolean`                 | true              | Affiche le header.                                                                                         |
| rteDrawerTitle                | input `string`                  | -                 | Titre du header par défaut.                                                                                |
| rteDrawerWidth                | input `string`                  | -                 | Largeur CSS du Drawer.                                                                                     |
| rteDrawerOnPrimary            | output `void`                   | -                 | Émis lors du clic sur l’action primaire par défaut.                                                        |
| rteDrawerOnSecondary          | output `void`                   | -                 | Émis lors du clic sur l’action secondaire par défaut.                                                      |
| drawerContent                 | template `TemplateRef<unknown>` | -                 | Template requis du contenu du Drawer.                                                                      |
| drawerContextContent          | template `TemplateRef<unknown>` | -                 | Template du contexte voisin en mode `responsive`.                                                          |
| drawerFooter                  | template `TemplateRef<unknown>` | -                 | Footer personnalisé.                                                                                       |
| drawerHeader                  | template `TemplateRef<unknown>` | -                 | Header personnalisé.                                                                                       |
| close()                       | méthode                         | -                 | Ferme le Drawer. Disponible via `#drawerHost`.                                                             |
| open()                        | méthode                         | -                 | Ouvre le Drawer après validation de sa configuration. Disponible via `#drawerHost`.                        |

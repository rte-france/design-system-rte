| Nom                    | Type                                 | Valeur par défaut | Description                                                                                                |
| ---------------------- | ------------------------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------- |
| children               | React.ReactNode \| React.ReactNode[] | -                 | Contenu principal voisin du Drawer en mode `responsive`.                                                   |
| closeOnEscape          | boolean                              | false             | Ferme le Drawer avec Escape lorsqu’il est ouvert.                                                          |
| closeOnOverlayClick    | boolean                              | false             | Ferme le Drawer modal lors d’un clic sur l’overlay.                                                        |
| content                | React.ReactNode \| React.ReactNode[] | -                 | Contenu du Drawer.                                                                                         |
| fixedHeader            | boolean                              | false             | Fixe le header et laisse le contenu défiler séparément.                                                    |
| footer                 | React.ReactNode \| React.ReactNode[] | -                 | Footer personnalisé.                                                                                       |
| header                 | React.ReactNode \| React.ReactNode[] | -                 | Header personnalisé.                                                                                       |
| icon                   | string                               | -                 | Icône du header par défaut. La valeur doit appartenir aux clés `RegularIconIdKey` ou `TogglableIconIdKey`. |
| iconAppearance         | "outlined" \| "filled"               | "outlined"        | Apparence de l’icône du header.                                                                            |
| id                     | string                               | -                 | Identifiant du Drawer, utilisé notamment pour son titre accessible.                                        |
| isClosable             | boolean                              | true              | Affiche le contrôle de fermeture du header par défaut.                                                     |
| isCollapsible          | boolean                              | false             | Affiche un bouton permettant d’ouvrir ou fermer le Drawer.                                                 |
| isOpen                 | boolean                              | -                 | État ouvert du Drawer.                                                                                     |
| onClickPrimaryButton   | () => void                           | -                 | Appelé au clic sur l’action primaire par défaut.                                                           |
| onClickSecondaryButton | () => void                           | -                 | Appelé au clic sur l’action secondaire par défaut.                                                         |
| onClickToggle          | () => void                           | -                 | Appelé par le bouton d’ouverture ou de fermeture.                                                          |
| onClose                | () => void                           | -                 | Appelé lors d’une fermeture.                                                                               |
| position               | "modal" \| "responsive"              | "modal"           | Positionnement du Drawer.                                                                                  |
| primaryButtonLabel     | string                               | -                 | Libellé de l’action primaire et activation du footer par défaut.                                           |
| secondaryButtonLabel   | string                               | -                 | Libellé optionnel de l’action secondaire par défaut.                                                       |
| showFooter             | boolean                              | true              | Affiche le footer.                                                                                         |
| showHeader             | boolean                              | true              | Affiche le header.                                                                                         |
| title                  | string                               | -                 | Titre du header par défaut.                                                                                |
| width                  | string                               | -                 | Largeur CSS du Drawer.                                                                                     |

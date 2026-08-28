| Nom             | Type                                                            | Valeur par défaut | Description                                                        |
| --------------- | --------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------ |
| alt             | string                                                          | -                 | Texte alternatif de l'image.                                       |
| aria-label      | string                                                          | "Avatar button"   | Libellé accessible du bouton lorsque `onClick` est fourni.         |
| colorType       | neutral \| brand \| decorative                                  | "neutral"         | Type de couleur utilisé pour les layouts autres que `image`.       |
| decorativeColor | DecorativeColor                                                 | -                 | Couleur décorative lorsque `colorType` vaut `decorative`.          |
| id              | string                                                          | -                 | Identifiant HTML de l'avatar.                                      |
| imgSrc          | string                                                          | -                 | Source de l'image lorsque `layout` vaut `image`.                   |
| initials        | string                                                          | -                 | Une ou deux initiales lorsque `layout` vaut `initials`.            |
| layout          | image \| icon \| initials                                       | "image"           | Mode de rendu de l'avatar.                                         |
| onClick         | () => void                                                      | -                 | Rend l'avatar interactif et exécute le callback au clic.           |
| size            | 24 \| 28 \| 32 \| 36 \| 40 \| 48 \| 56 \| 64 \| 72 \| 96 \| 120 | 32                | Taille de l'avatar en pixels.                                      |
| status          | available \| away \| busy \| offline \| unknown                 | -                 | Statut affiché par un indicateur.                                  |
| type            | user \| entity                                                  | "user"            | Type représenté ; détermine l'icône utilisée avec `layout="icon"`. |

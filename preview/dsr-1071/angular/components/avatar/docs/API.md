| Nom             | Type                                                            | Valeur par défaut | Description                                                        |
| --------------- | --------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------ |
| alt             | string                                                          | Avatar            | Texte alternatif de l'image.                                       |
| avatarClick     | output\<MouseEvent\>                                            | -                 | Output émis au clic lorsque `isInteractive` vaut `true`.           |
| colorType       | neutral \| brand \| decorative                                  | neutral           | Type de couleur utilisé pour les layouts autres que `image`.       |
| decorativeColor | DecorativeColor                                                 | -                 | Couleur décorative lorsque `colorType` vaut `decorative`.          |
| imgSrc          | string                                                          | -                 | Source de l'image lorsque `layout` vaut `image`.                   |
| initials        | string                                                          | -                 | Une ou deux initiales lorsque `layout` vaut `initials`.            |
| isInteractive   | boolean                                                         | false             | Rend l'avatar cliquable.                                           |
| layout          | image \| icon \| initials                                       | initials          | Mode de rendu de l'avatar.                                         |
| size            | 24 \| 28 \| 32 \| 36 \| 40 \| 48 \| 56 \| 64 \| 72 \| 96 \| 120 | 32                | Taille de l'avatar en pixels.                                      |
| status          | available \| away \| busy \| offline \| unknown                 | -                 | Statut affiché par un indicateur.                                  |
| type            | user \| entity                                                  | user              | Type représenté ; détermine l'icône utilisée avec `layout="icon"`. |

### Format et plages

La valeur est toujours composée de trois chaînes `hh`, `mm` et `ss`, affichées dans l'ordre heures, minutes et secondes avec des séparateurs fixes. Les heures sont limitées à `00`–`23`, les minutes à `00`–`59` et les secondes à `00`–`59`.

### Valeur complète en lecture seule

Lorsque `readOnly` vaut `true`, les trois segments doivent être renseignés. Une valeur incomplète provoque un avertissement et le composant ne rend rien.

### Texte d'aide

Le texte d'aide est masqué pendant l'ouverture du menu. Il n'est donc pas disponible dans le nom descriptif de l'input durant cette interaction.

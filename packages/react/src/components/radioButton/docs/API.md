| Nom | Type | Valeur par défaut | Description |
| --- | ---- | ----------------- | ----------- |
| aria-label | string \| undefined | - | Nom accessible utilisé lorsque `label` n'est pas fourni ou lorsque le libellé visuel est masqué. |
| aria-labelledby | string \| undefined | - | Identifiant ou liste d'identifiants des éléments fournissant le nom accessible. |
| className | string | "" | Classes CSS ajoutées à l'input et à son label. |
| disabled | boolean | false | Désactive le bouton radio. |
| error | boolean | false | Affiche l'état d'erreur. Cet état ne peut pas être combiné avec `disabled`. |
| groupName | string | - | Nom du groupe HTML auquel appartient le bouton radio. |
| isChecked | boolean \| undefined | - | Contrôle l'état sélectionné du bouton radio. |
| label | string \| undefined | - | Libellé affiché et utilisé comme nom accessible. |
| onChange | React.ChangeEventHandler\<HTMLInputElement\> \| undefined | - | Callback appelé lors d'un changement de sélection. Il n'est pas appelé lorsque le bouton est `disabled` ou `readOnly`. |
| readOnly | boolean | false | Empêche la modification de la sélection tout en conservant l'affichage du bouton radio. |
| value | string | - | Valeur HTML du bouton radio et identifiant utilisé pour associer le label. |

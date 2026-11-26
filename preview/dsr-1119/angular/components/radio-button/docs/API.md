| Nom | Type | Valeur par défaut | Description |
| --- | ---- | ----------------- | ----------- |
| ariaLabel | string | "" | Nom accessible utilisé lorsque le libellé visuel est masqué. |
| ariaLabelledBy | string | "" | Identifiant ou liste d'identifiants des éléments fournissant le nom accessible via `aria-labelledby`. |
| changeEvent | output\<string\> | - | Output émis avec la valeur du bouton radio lorsqu'une sélection est modifiée. Il n'est pas émis lorsque le bouton est `disabled` ou `readOnly`. |
| disabled | boolean | false | Désactive le bouton radio. |
| error | boolean | false | Affiche l'état d'erreur. Cet état ne peut pas être combiné avec `disabled`. |
| groupName | string | "" | Nom du groupe HTML auquel appartient le bouton radio. |
| isChecked | boolean | false | Définit l'état initialement sélectionné du bouton radio. |
| label | string | "" | Libellé affiché et utilisé comme nom accessible. |
| readOnly | boolean | false | Empêche la modification de la sélection tout en conservant l'affichage du bouton radio. |
| showLabel | boolean | true | Affiche ou masque le libellé visuel. |
| value | string | "" | Valeur HTML du bouton radio et identifiant utilisé pour associer le label. |

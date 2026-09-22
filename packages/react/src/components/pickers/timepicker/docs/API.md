| Nom | Type | Valeur par défaut | Description |
| --- | ---- | ----------------- | ----------- |
| assistiveAppearance | "description" \| "error" \| "success" \| "link" | - | Apparence du texte d'aide. |
| assistiveTextLabel | string | - | Texte d'aide affiché lorsque le menu est fermé. |
| assistiveTextLink | string | - | URL associée au texte d'aide. |
| defaultValue | { hh: string; mm: string; ss: string } | - | Valeur initiale du composant en mode non contrôlé. |
| disabled | boolean | - | Désactive le champ et empêche l'ouverture du menu. |
| errorMessage | string | - | Message affiché à la place de `assistiveTextLabel` lorsque `isError` vaut `true`. |
| hourIncrement | number | 1 | Pas utilisé par les boutons et les touches d'incrémentation des heures. |
| id | string | - | Identifiant de l'input. |
| isError | boolean | - | Active l'état visuel d'erreur. |
| isHourReadOnly | boolean | false | Empêche la modification du segment des heures. |
| isMinuteReadOnly | boolean | false | Empêche la modification du segment des minutes. |
| isSecondReadOnly | boolean | false | Empêche la modification du segment des secondes. |
| label | string | - | Libellé du champ. |
| labelId | string | - | Identifiant référencé par `aria-labelledby`. |
| minuteIncrement | number | 1 | Pas utilisé par les boutons et les touches d'incrémentation des minutes. |
| onChange | (value: { hh: string; mm: string; ss: string }) => void | - | Callback appelé lorsque la valeur interne change. |
| readOnly | boolean | - | Rend les segments non modifiables et empêche l'ouverture du menu. |
| required | boolean | false | Indique que le champ est requis dans le libellé. |
| secondIncrement | number | 1 | Pas utilisé par les boutons et les touches d'incrémentation des secondes. |
| showAssistiveIcon | boolean | - | Affiche l'icône du texte d'aide. |
| showLabel | boolean | - | Affiche le libellé. |
| showLabelRequirement | boolean | - | Affiche l'indication de champ requis dans le libellé. |
| value | { hh: string; mm: string; ss: string } | - | Valeur du composant en mode contrôlé. |

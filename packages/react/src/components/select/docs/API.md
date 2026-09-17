| Nom | Type | Valeur par défaut | Description |
| --- | ---- | ----------------- | ----------- |
| assistiveAppearance | description \| error \| success \| link | "description" | Apparence du texte d’aide. |
| assistiveTextLabel | string | - | Texte d’aide affiché sous le Select. |
| assistiveTextLink | string | - | Lien associé au texte d’aide. |
| body | React.ReactNode | - | Contenu personnalisé affiché à la place de la liste d’options. |
| compactSpacing | boolean | false | Réduit l’espacement et la taille des icônes. |
| defaultValue | string \| string[] | - | Valeur initiale utilisée lorsque le composant n’est pas contrôlé. |
| disabled | boolean | false | Désactive le Select et retire son focus clavier. |
| footer | React.ReactNode | - | Contenu affiché dans le pied de la liste déroulante. |
| header | React.ReactNode | - | Contenu affiché dans l’en-tête de la liste déroulante. |
| id | string | - | Identifiant du Select. |
| isError | boolean | - | Affiche le Select dans un état d’erreur. |
| label | string | - | Libellé du Select. |
| labelPosition | top \| side | "top" | Position du libellé. |
| maxHeight | number \| string | - | Hauteur maximale de la liste déroulante. |
| multiple | false \| true | - | Active la sélection multiple et modifie le type de `value` et de `onChange`. |
| onChange | (value: string) => void \| (value: string[]) => void | - | Callback appelé lorsqu’une option est sélectionnée ou désélectionnée. |
| onClear | () => void | - | Callback appelé lorsque la sélection est effacée. |
| options | { value: string; label: string }[] | [] | Options proposées dans la liste. |
| optionToDisplay | first-selected \| last-selected \| highest-selected | "highest-selected" | Option affichée lorsque plusieurs options sont sélectionnées. |
| placeholder | string | - | Texte affiché lorsqu’aucune option n’est sélectionnée. |
| readonly | boolean | false | Rend le Select non interactif tout en conservant sa valeur. |
| readOnly | boolean | - | Alias de lecture seule hérité du type d’entrée. |
| required | boolean | false | Indique que le champ est requis. |
| showAssistiveIcon | boolean | false | Affiche l’icône du texte d’aide. |
| showLabel | boolean | true | Affiche ou masque le libellé. |
| showLabelRequirement | boolean | false | Affiche l’indicateur de caractère requis ou facultatif. |
| showResetButton | boolean | - | Affiche le bouton d’effacement lorsqu’une valeur est sélectionnée. |
| value | string \| string[] | - | Valeur contrôlée du Select. |
| variant | default \| visibly-selected | "default" | Variante visuelle du Select. |
| width | number | "350px" | Largeur du Select. |

| Nom | Type | Valeur par défaut | Description |
| --- | ---- | ----------------- | ----------- |
| ariaLabelledby | string | - | Identifiant de l’élément qui labellise le Select. |
| assistiveTextAppearance | description \| error \| success \| link | "description" | Apparence du texte d’aide. |
| assistiveTextLabel | string | - | Texte d’aide affiché sous le Select. |
| assistiveTextLink | string | - | Lien associé au texte d’aide. |
| compactSpacing | boolean | false | Réduit l’espacement et la taille des icônes. |
| disabled | boolean | false | Désactive le Select et retire son focus clavier. |
| footerTemplate | TemplateRef\<HTMLElement\> \| undefined | - | Template affiché dans le pied de la liste déroulante. |
| headerTemplate | TemplateRef\<HTMLElement\> \| undefined | - | Template affiché dans l’en-tête de la liste déroulante. |
| id | string | - | Identifiant du Select. |
| isError | boolean | false | Affiche le Select dans un état d’erreur. |
| label | string | - | Libellé du Select. |
| labelId | string | - | Identifiant du libellé associé au Select. |
| labelPosition | top \| side | "top" | Position du libellé. |
| maxHeight | number | 200 | Hauteur maximale de la liste déroulante. |
| multiple | boolean | false | Active la sélection multiple. |
| name | string | - | Nom du champ. |
| optionToDisplay | first-selected \| last-selected \| highest-selected | "first-selected" | Option affichée lorsque plusieurs options sont sélectionnées. |
| options | { value: string; label: string }[] | [] | Options proposées dans la liste. |
| placeholder | string | - | Texte affiché lorsqu’aucune option n’est sélectionnée. |
| readOnly | boolean | false | Rend le Select non interactif tout en conservant sa valeur. |
| required | boolean | false | Indique que le champ est requis. |
| showAssistiveIcon | boolean | false | Affiche l’icône du texte d’aide. |
| showLabelRequirement | boolean | false | Affiche l’indicateur de caractère requis ou facultatif. |
| showResetButton | boolean | false | Affiche le bouton d’effacement lorsqu’une valeur est sélectionnée. |
| value | string \| string[] | - | Valeur du Select. L’input est compatible avec `ControlValueAccessor`. |
| valueChange | output\<string \| string[]\> | - | Output émis lorsque la valeur change. |
| variant | default \| visibly-selected | "default" | Variante visuelle du Select. |
| width | number \| string | "350px" | Largeur du Select. Une valeur numérique est convertie en pixels. |
| withSelectAll | boolean | false | Ajoute une option permettant de sélectionner ou désélectionner toutes les options en mode multiple. |

Les directives `SelectHeaderDirective` et `SelectFooterDirective` s’appliquent respectivement aux templates marqués `rteSelectHeader` et `rteSelectFooter`. Le composant accepte également les éléments projetés avec les attributs `select-header` et `select-footer`.

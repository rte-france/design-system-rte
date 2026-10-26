### Utilisation de base

```tsx
import { IconButtonGroup } from "@design-system-rte/react";

const iconButtons = [
  { name: "visibility-show", label: "Read only" },
  { name: "edit", label: "Edit" },
];

const App = () => (
  <IconButtonGroup
    iconButtons={iconButtons}
    selectionMode="single"
    defaultSelectedId="visibility-show"
    aria-label="Icon selection"
  />
);
```

### Modes de sélection

| Mode          | Sélection autorisée     | Interaction sur le bouton sélectionné |
| ------------- | ----------------------- | ------------------------------------- |
| single        | Zéro ou un bouton       | Désélectionne le bouton.              |
| single-strict | Exactement un bouton    | Conserve la sélection sans callback.  |
| multiple      | Zéro à tous les boutons | Désélectionne uniquement ce bouton.   |

Les modes `single` et `single-strict` utilisent `selectedId` et `defaultSelectedId`, avec une chaîne ou `null`. Le mode `multiple` utilise `selectedIds` et `defaultSelectedIds`, avec des tableaux d'IDs. Ces deux familles de props ne se mélangent pas.

`onSelectionChange` conserve le même nom dans tous les modes. Il reçoit une chaîne ou `null` dans les modes simples, et un nouveau tableau dans le mode multiple. Activer le bouton déjà sélectionné en `single-strict` ne déclenche pas de callback et ne vide jamais la sélection.

Fournir un `aria-label` pour nommer le groupe. Son absence produit un avertissement et aucun rendu.

#### Sélection exclusive obligatoire

```tsx
<IconButtonGroup
  iconButtons={[
    { name: "format-align-left", label: "Align Left" },
    { name: "format-align-center", label: "Align Center" },
    { name: "format-align-right", label: "Align Right" },
    { name: "format-align-justify", label: "Align Justify" },
  ]}
  selectionMode="single-strict"
  defaultSelectedId="format-align-left"
  aria-label="Icon selection"
/>
```

#### Sélection multiple

```tsx
<IconButtonGroup
  iconButtons={[
    { name: "mic", label: "Microphone" },
    { name: "volume-up", label: "Volume" },
    { name: "video-camera", label: "Video Camera" },
  ]}
  selectionMode="multiple"
  defaultSelectedIds={["mic"]}
  aria-label="Icon selection"
/>
```

### Identifiants des boutons

L'identifiant effectif est `id ?? name`. Utiliser un `id` explicite permet de changer l'icône sans perdre la sélection et de réutiliser une même icône pour des boutons différents.

```tsx
<IconButtonGroup
  iconButtons={[
    { id: "first-edit", name: "edit", label: "Edit first" },
    { id: "second-edit", name: "edit", label: "Edit second" },
  ]}
  selectionMode="multiple"
  defaultSelectedIds={["first-edit"]}
  aria-label="Icon selection"
/>
```

Les identifiants effectifs doivent être non vides et uniques, y compris entre un `id` explicite et un `name` utilisé en repli. Une liste de moins de deux boutons ou des identifiants invalides produisent un avertissement et aucun rendu.

### Orientation verticale

```tsx
<IconButtonGroup
  iconButtons={iconButtons}
  selectionMode="single"
  defaultSelectedId="visibility-show"
  aria-label="Icon selection"
  orientation="vertical"
  tooltipPosition="left"
/>
```

### Apparence neutre

```tsx
<IconButtonGroup
  iconButtons={iconButtons}
  selectionMode="single"
  defaultSelectedId="visibility-show"
  aria-label="Icon selection"
  appearance="neutral"
/>
```

### Groupe désactivé

```tsx
<IconButtonGroup
  iconButtons={iconButtons}
  selectionMode="single"
  defaultSelectedId="visibility-show"
  aria-label="Icon selection"
  isDisabled
/>
```

### Sélection non contrôlée

Omettre `selectedId` dans les modes simples, ou `selectedIds` en multiple, laisse le composant gérer la sélection. `defaultSelectedId` ou `defaultSelectedIds` est lu uniquement au montage, puis normalisé. Un rendu du parent, même avec un nouveau tableau de boutons équivalent, ne réinitialise pas la sélection. Modifier ensuite la prop de sélection initiale ne change pas la sélection courante.

`onSelectionChange` permet d'écouter les changements sans contrôler l'état. Sa présence seule n'active pas le mode contrôlé.

### Sélection contrôlée

```tsx
import { useState } from "react";
import { IconButtonGroup } from "@design-system-rte/react";

const App = () => {
  const [selectedId, setSelectedId] = useState<string | null>("visibility-show");

  return (
    <IconButtonGroup
      iconButtons={[
        { name: "visibility-show", label: "Read only" },
        { name: "edit", label: "Edit" },
      ]}
      selectionMode="single"
      selectedId={selectedId}
      onSelectionChange={setSelectedId}
      aria-label="Icon selection"
    />
  );
};
```

En `single` et `single-strict`, toute valeur de `selectedId` autre que `undefined` active le mode contrôlé, y compris `null`. `null` représente une sélection vide autorisée en `single`, mais refusée en `single-strict`. En `multiple`, `selectedIds={[]}` représente une sélection contrôlée vide et `null` n'est pas accepté. Réserver `undefined` au mode non contrôlé.

Le parent reçoit une proposition dans `onSelectionChange` et doit mettre à jour la prop contrôlée correspondante pour l'afficher. S'il ne l'applique pas, le groupe garde la sélection reçue en props.

Ne pas fournir simultanément `selectedId` et `defaultSelectedId`, ou `selectedIds` et `defaultSelectedIds`. Si les deux sont présents, le composant avertit et donne la priorité à la sélection contrôlée.

Le passage contrôlé vers non contrôlé reste autorisé. Retirer la prop contrôlée réactive l'ancien état interne, normalisé pour la liste et le mode courants. La dernière valeur contrôlée n'est pas recopiée dans cet état, et les valeurs initiales ne sont pas relues.

### Changements de liste ou de mode

En non contrôlé, les boutons encore présents conservent leur sélection, y compris après réordonnancement. Les IDs retirés sont définitivement supprimés de la sélection interne et ne sont pas réactivés lors d'une réintroduction.

Cette purge s'applique aussi lorsque la liste devient temporairement invalide parce qu'elle contient moins de deux boutons. Le groupe ne s'affiche pas pendant cette période. À sa restauration, seuls les IDs sélectionnés encore conservés dans l'état interne restent actifs, sous réserve de la sélection obligatoire en `single-strict`. Vider la liste efface donc la sélection interne.

La normalisation retire les IDs inconnus et répétés. Pour `single`, elle conserve au plus le premier bouton sélectionné dans l'ordre de la liste. Pour `single-strict`, elle conserve ce premier bouton ou sélectionne le premier bouton disponible si aucun ne reste actif. Ces règles s'appliquent aussi lors d'un changement de `selectionMode` et ne déclenchent pas de callback.

En contrôlé, le parent doit mettre à jour la liste, le mode et la sélection de façon cohérente. Utiliser une chaîne ou `null` dans `selectedId` en mode simple, et un tableau dans `selectedIds` en multiple. Lors d'un changement entre ces modes, changer aussi la prop de sélection et le type du callback. Les formes de valeurs incompatibles, les IDs inconnus, les doublons en multiple ou une sélection vide en `single-strict` sont refusés. Le composant avertit et ne s'affiche pas jusqu'à réception d'une valeur valide. Il ne corrige pas les props et n'émet pas de callback correctif.

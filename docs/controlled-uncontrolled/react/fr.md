# Composants contrôlés et non contrôlés (React)

## Overview

```tsx
import { useState } from "react";
import { Select } from "@design-system-rte/react";

function Example() {
  const [value, setValue] = useState("option-1");

  return (
    <Select
      id="my-select"
      label="Label"
      options={[
        { value: "option-1", label: "Option 1" },
        { value: "option-2", label: "Option 2" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}
```

## Usage

En React, un composant est **contrôlé** lorsque son état affiché provient de props détenues par le composant parent. Le parent transmet une `value` (ou une prop équivalente) et la met à jour dans un callback `onChange`. Il est **non contrôlé** lorsque le composant conserve son propre état interne ; le parent peut définir une valeur initiale avec `defaultValue` (ou `defaultCollapsed`, etc.) et écouter les changements sans posséder la valeur courante.

### Comment le design system détermine le mode

La plupart des composants de formulaire détectent le mode selon la présence de la prop `value` :

- `value` **est fournie** → mode contrôlé. Le parent doit mettre à jour `value` lorsque `onChange` est émis, sinon l'interface ne reflète pas la saisie de l'utilisateur.
- `value` **est omise** → mode non contrôlé. Le composant gère son propre état. Utilisez `defaultValue` pour définir la sélection initiale.

`Select` implémente explicitement cette règle :

```tsx
const isControlled = value !== undefined;
```

La même logique s'applique à `DatePicker`, `TimePicker` et aux champs similaires.

D'autres composants utilisent des props nommées plutôt que `value` :


| Composant | Prop contrôlée  | Prop non contrôlée | Callback de changement |
| --------- | --------------- | ------------------ | ---------------------- |
| `Select`  | `value`         | `defaultValue`     | `onChange`             |
| `SideNav` | `isCollapsed`   | `defaultCollapsed` | `onCollapsedChange`    |
| `Tab`     | `selectedTabId` | —                  | `onChange` (requis)    |
| `Toast`   | `isOpen`        | —                  | `onClose`              |


`Tab` et `Toast` sont toujours contrôlés : le parent doit posséder l'état de visibilité ou de sélection.

### Usage contrôlé

Stockez la valeur dans un état React (ou une autre source de vérité) et repassez-la à chaque rendu :

```tsx
import { useState } from "react";
import { Select } from "@design-system-rte/react";

function ControlledSelect() {
  const [value, setValue] = useState("option-1");

  return (
    <Select
      id="controlled-select"
      label="Country"
      options={[
        { value: "option-1", label: "Option 1" },
        { value: "option-2", label: "Option 2" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}
```

Privilégiez le mode contrôlé lorsque vous devez :

- réinitialiser ou préremplir un champ depuis l'état applicatif ;
- valider ou transformer la saisie avant de la réafficher ;
- synchroniser plusieurs éléments d'interface à partir du même état.



### Usage non contrôlé

Omettez `value` et passez éventuellement `defaultValue`. Le composant se met à jour lui-même ; utilisez `onChange` uniquement si vous devez réagir aux changements :

```tsx
import { useState } from "react";
import { Select } from "@design-system-rte/react";

function UncontrolledSelect() {
  const [lastValue, setLastValue] = useState<string | null>(null);

  return (
    <>
      <Select
        id="uncontrolled-select"
        label="Country"
        defaultValue="option-3"
        options={[
          { value: "option-1", label: "Option 1" },
          { value: "option-2", label: "Option 2" },
          { value: "option-3", label: "Option 3" },
        ]}
        onChange={setLastValue}
      />
      <span>Last emitted value: {lastValue ?? "None yet"}</span>
    </>
  );
}
```



### État replié du SideNav

`SideNav` prend en charge les deux modes pour l'état replié :

```tsx
// Contrôlé — le parent possède isCollapsed
const [collapsed, setCollapsed] = useState(false);

<SideNav
  collapsible
  isCollapsed={collapsed}
  onCollapsedChange={setCollapsed}
  items={items}
/>;

// Non contrôlé — SideNav gère le repli en interne
<SideNav
  collapsible
  defaultCollapsed={false}
  onCollapsedChange={(next) => console.log("collapsed:", next)}
  items={items}
/>;
```

Lorsque `isCollapsed` est transmis, le parent doit le mettre à jour dans `onCollapsedChange` pour que le basculement prenne effet. Lorsqu'il est omis, `SideNav` met à jour son état interne et informe tout de même le parent via `onCollapsedChange`.

### Délégation aux inputs natifs

`TextInput` transmet les props standard d'un input HTML. Les règles React natives s'appliquent :

- Contrôlé : passez `value` + `onChange`
- Non contrôlé : passez `defaultValue` et omettez `value`

Ne passez pas `value` et `defaultValue` sur le même champ.

## Limitations



### Mélange de props contrôlées et non contrôlées

Passer `value={undefined}` explicitement compte toujours comme contrôlé dans les composants qui utilisent `value !== undefined` (par exemple `Select`). Préférez omettre entièrement `value` pour un usage non contrôlé. Ne basculez pas entre les deux modes sur la même instance au cours de son cycle de vie.

### Les composants contrôlés exigent une mise à jour côté parent

Si vous passez `value` sans jamais la mettre à jour dans `onChange`, l'interface semble figée. C'est le comportement React attendu, pas un défaut du composant.

### Tous les composants ne supportent pas le mode non contrôlé

`Tab` exige toujours `selectedTabId` et `onChange`. `Toast` exige toujours `isOpen` et `onClose`. Il n'existe pas de `defaultValue` ni de sélection interne pour ces composants.

### Suivi de l'élément actif du SideNav

`SideNav` conserve un état interne pour l'élément actif et expose `onActiveItemChange`. Pour contrôler entièrement l'élément actif affiché, définissez `active` sur les entrées individuelles du tableau `items` depuis votre routage ou votre état applicatif.

### TextInput et avertissements React natifs

Basculer un `TextInput` de non contrôlé à contrôlé (ou l'inverse) déclenche l'avertissement React standard sur le changement de type d'input. Choisissez un mode dès le montage du composant.

## FAQ

Q : Mon `Select` (ou `DatePicker`) ne se met pas à jour quand je clique sur une option — que fais-je mal ?

R : Vous êtes probablement en mode contrôlé (`value` est définie) sans mettre à jour l'état dans `onChange`. Le parent doit assigner la nouvelle sélection à `value` à chaque changement. Voir Usage / Usage contrôlé.

Q : Quelle est la différence entre `value` et `defaultValue` ?

R : `value` fait du parent la source de vérité (contrôlé). `defaultValue` ne définit que la valeur initiale ; le composant gère ensuite les mises à jour en interne (non contrôlé). N'utilisez jamais les deux sur le même champ.

Q : Je passe `onChange` mais pas `value` — mon composant est-il contrôlé ?

R : Non. `onChange` seul ne rend pas un composant contrôlé. Le mode contrôlé exige de transmettre l'état courant via `value` (ou `isCollapsed`, `selectedTabId`, etc.) et de le mettre à jour lorsque le callback est invoqué.

Q : Pourquoi le bouton de repli de mon SideNav ne fonctionne-t-il pas quand je passe `isCollapsed` ?

R : En mode contrôlé, `SideNav` ne met pas à jour `isCollapsed` en interne. Mettez à jour votre état dans `onCollapsedChange`. Voir Usage / État replié du SideNav.

Q : Puis-je utiliser `Tab` sans gérer `selectedTabId` dans un état ?

R : Non. `Tab` est toujours contrôlé. Stockez `selectedTabId` dans un état et mettez-le à jour dans `onChange`.
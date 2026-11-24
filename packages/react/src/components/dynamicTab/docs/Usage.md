### Utilisation de base

```tsx
import { useState } from "react";
import type { DynamicTabItemOption } from "@design-system-rte/core";
import { DynamicTab } from "@design-system-rte/react";

const App = () => {
  const initialOptions: DynamicTabItemOption[] = [
    {
      id: "tab1",
      title: "Tab 1",
      badgeContent: "number",
      badgeCount: 5,
      badgeType: "indicator",
    },
    { id: "tab2", title: "Tab 2" },
    { id: "tab3", title: "Tab 3" },
    { id: "tab4", title: "Tab 4" },
  ];
  const [tabOptions, setTabOptions] = useState(initialOptions);
  const [selectedTabId, setSelectedTabId] = useState("tab1");

  return (
    <DynamicTab
      appearance="neutral"
      options={tabOptions}
      selectedTabId={selectedTabId}
      iconName="star"
      onChangeActiveTab={setSelectedTabId}
      onUpdateTabs={setTabOptions}
    />
  );
};
```

Le composant initialise sa sélection et sa liste d’onglets avec `selectedTabId` et `options`, puis gère leur état en interne. Les callbacks permettent de synchroniser l’état du parent avec les changements. Les nouvelles valeurs reçues dans ces props après le premier rendu ne remplacent pas l’état interne.

### Apparence

`appearance` accepte `neutral` ou `brand`. La configuration par défaut est `neutral`.

```tsx
<DynamicTab appearance="brand" options={tabOptions} selectedTabId={selectedTabId} />
```

### Espacement compact

`compactSpacing` réduit l’espacement entre les éléments de l’onglet. Il est désactivé par défaut.

```tsx
<DynamicTab compactSpacing options={tabOptions} selectedTabId={selectedTabId} />
```

### Onglets modifiables et fermables

Par défaut, les onglets peuvent être renommés et fermés. Passez `isEditable` ou `isClosable` à `false` pour désactiver l’action correspondante.

```tsx
<DynamicTab isEditable={false} isClosable={false} options={tabOptions} selectedTabId={selectedTabId} />
```

Quand l’édition est activée, un double-clic sur le titre ouvre le champ de saisie. Entrée ou la perte de focus valide le titre, Échap annule la modification et un titre vide conserve le titre précédent.

### Ajout et gestion des onglets

`newTabConfig` fournit l’identifiant et le titre du prochain onglet. Après un ajout, `onUpdateTabs` reçoit la liste mise à jour et `onChangeActiveTab` reçoit l’identifiant du nouvel onglet. Le bouton d’ajout est présent même sans configuration, mais son activation sans `newTabConfig` ne crée pas d’onglet.

```tsx
const newTabConfig: DynamicTabItemOption = { id: "new-tab", title: "New Tab" };

<DynamicTab
  options={tabOptions}
  selectedTabId={selectedTabId}
  newTabConfig={newTabConfig}
  onChangeActiveTab={setSelectedTabId}
  onUpdateTabs={setTabOptions}
/>;
```

`onUpdateTabs` est également appelé après une fermeture, un renommage ou un réordonnancement. La fermeture de l’onglet sélectionné sélectionne l’onglet suivant, ou le précédent si l’onglet fermé était le dernier.

Quand des onglets dépassent l’espace disponible, les onglets masqués sont accessibles depuis un menu.

### Navigation au clavier

Les flèches gauche et droite déplacent le focus et la sélection entre les onglets visibles, en revenant au début ou à la fin de la liste. Entrée ou Espace sélectionne l’onglet focalisé. Espace peut aussi activer le mode de déplacement de l’onglet sélectionné.

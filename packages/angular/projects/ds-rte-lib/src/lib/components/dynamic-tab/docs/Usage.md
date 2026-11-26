### Utilisation de base

```ts
const tabs: DynamicTabItemOption[] = [
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
  { id: "tab5", title: "Tab 5" },
];
```

```html
<rte-dynamic-tab
  [options]="tabs"
  [selectedTabId]="selectedTabId"
  appearance="neutral"
  iconName="star"
  (changeActiveTab)="selectedTabId = $event"
  (updateTabs)="tabs = $event"
/>
```

Angular utilise les valeurs d’`options` et de `selectedTabId` fournies par le parent. `changeActiveTab` signale la sélection demandée et `updateTabs` signale les changements de liste. Le parent doit mettre à jour ces valeurs pour refléter les changements.

### Apparence et espacement

`appearance` accepte `neutral` ou `brand` et vaut `neutral` par défaut. `compactSpacing` vaut `false` par défaut.

```html
<rte-dynamic-tab [options]="tabs" [selectedTabId]="selectedTabId" appearance="brand" [compactSpacing]="true" />
```

### Onglets modifiables et fermables

Les onglets sont modifiables et fermables par défaut. Pour empêcher ces actions, passez `false` à `isEditable` ou `isClosable`.

```html
<rte-dynamic-tab [options]="tabs" [selectedTabId]="selectedTabId" [isEditable]="false" [isClosable]="false" />
```

Quand l’édition est activée, un double-clic sur le titre de l’onglet actif ouvre le champ de saisie. Entrée ou la perte de focus valide le titre, Échap annule la modification et un titre vide conserve le titre précédent.

### Ajout et gestion des onglets

Fournissez `newTabConfig` pour afficher le bouton d’ajout. Après une création, une fermeture, un renommage ou un réordonnancement, `updateTabs` émet la liste mise à jour. La sélection est signalée par `changeActiveTab`.

```ts
const newTabConfig: DynamicTabItemOption = { id: "new-tab", title: "New Tab" };
```

```html
<rte-dynamic-tab
  [options]="tabs"
  [selectedTabId]="selectedTabId"
  [newTabConfig]="newTabConfig"
  (changeActiveTab)="selectedTabId = $event"
  (updateTabs)="tabs = $event"
/>
```

La fermeture de l’onglet sélectionné sélectionne l’onglet suivant, ou le précédent si l’onglet fermé était le dernier. Lorsqu’il y a plus d’onglets que l’espace disponible, les onglets supplémentaires sont accessibles depuis un menu. `hiddenTabsLabel` permet de remplacer son libellé généré.

### Navigation au clavier

Les flèches gauche et droite déplacent le focus et la sélection entre les onglets visibles, en revenant au début ou à la fin de la liste. Entrée ou Espace sélectionne l’onglet focalisé. Pour réordonner l’onglet actif au clavier, maintenez Espace puis utilisez les flèches gauche et droite. Espace termine le déplacement.

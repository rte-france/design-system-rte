# Tab

## Overview

```tsx
<Tab
  options={tabs}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
/>
```

## API

Le composant `Tab` constitue l'API publique. Passez les définitions d'onglets via `options`, contrôlez l'onglet actif avec `selectedTabId` et gérez les changements de sélection avec `onChange`.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| options | `TabItemProps[]` | — (requis) | Définitions des onglets affichés dans la liste. |
| onChange | `(id: string) => void` | — (requis) | Appelé avec l'`id` de l'onglet sélectionné par l'utilisateur. |
| selectedTabId | `string` | — | Id de l'onglet sélectionné. Lorsqu'il est omis et que `options` n'est pas vide, le premier onglet est sélectionné automatiquement. |
| direction | `"horizontal" \| "vertical"` | `"horizontal"` | Direction de la liste d'onglets. `"horizontal"` les dispose en ligne ; `"vertical"` les empile en colonne. |
| alignment | `"start" \| "center"` | `"start"` | Alignement des onglets lorsqu'il n'y a pas de débordement. Forcé à `"start"` en cas de débordement. |
| compactSpacing | `boolean` | `false` | Réduit l'espacement entre les onglets. |
| overflowType | `"scrollable" \| "dropdown"` | `"scrollable"` | Gestion du débordement horizontal. `"scrollable"` ajoute des flèches de défilement ; `"dropdown"` regroupe les onglets dans un menu. |
| inverted | `boolean` | `false` | Affiche les onglets sur fond inverse (sombre). |

Chaque entrée de `options` accepte les champs suivants :

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | `string` | — (requis) | Identifiant unique de l'onglet. Passé à `onChange`. |
| panelId | `string` | — (requis) | Id du panneau associé, défini comme `aria-controls` sur le bouton d'onglet. |
| label | `string` | — | Libellé visible de l'onglet. |
| icon | `string` | — | Nom de l'icône affichée avant le libellé. |
| disabled | `boolean` | `false` | Désactive l'onglet. Ignoré lors de la navigation au clavier. |
| showBadge | `boolean` | — | Affiche le badge même si les critères de compteur ou d'icône ne sont pas remplis. |
| badgeCount | `number` | — | Valeur numérique affichée lorsque `badgeContent` vaut `"number"`. |
| badgeContent | `"number" \| "icon" \| "empty"` | `"empty"` | `"number"` affiche un compteur ; `"icon"` affiche `badgeIcon` ; `"empty"` affiche un point indicateur. |
| badgeIcon | `string` | — | Nom de l'icône affichée lorsque `badgeContent` vaut `"icon"`. |
| badgeType | `"brand" \| "neutral" \| "indicator"` | `"indicator"` | Variante visuelle du badge. |

## Usage

Utilisez `Tab` pour afficher une liste d'onglets. Vous gérez l'onglet sélectionné et le contenu des panneaux associés dans votre application.

`TabItem` est un composant interne utilisé par `Tab`. Ne le rendez pas directement dans votre code applicatif.

Suivez l'onglet sélectionné dans l'état et passez-le à `selectedTabId`. Affichez les panneaux séparément et montrez celui dont l'`id` correspond au `panelId` de l'onglet sélectionné.

```tsx
const [selectedTabId, setSelectedTabId] = useState('tab-1');

const tabs = [
  { id: 'tab-1', label: 'First Tab', panelId: 'panel-1' },
  { id: 'tab-2', label: 'Second Tab', panelId: 'panel-2' },
  { id: 'tab-3', label: 'Third Tab', panelId: 'panel-3' },
];

return (
  <>
    <Tab options={tabs} selectedTabId={selectedTabId} onChange={setSelectedTabId} />

    {tabs.map((tab) => (
      <div
        key={tab.id}
        role="tabpanel"
        id={tab.panelId}
        aria-labelledby={tab.id}
        hidden={selectedTabId !== tab.id}
      >
        Content for {tab.label}
      </div>
    ))}
  </>
);
```

### Examples

#### Vertical

```tsx
<Tab
  options={tabs}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
  direction="vertical"
/>
```

Affiche une liste d'onglets verticale à côté du contenu du panneau.

(`"horizontal" | "vertical"`)

#### Compact spacing

```tsx
<Tab
  options={tabs}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
  compactSpacing
/>
```

Réduit l'espacement entre les onglets.

#### With icons

```tsx
<Tab
  options={[
    { id: 'photos', label: 'Photos', panelId: 'panel-1', icon: 'photo-camera' },
    { id: 'videos', label: 'Videos', panelId: 'panel-2', icon: 'video-camera', disabled: true },
    { id: 'music', label: 'Music', panelId: 'panel-3', icon: 'headphones' },
  ]}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
/>
```

Ajoute une icône avant chaque libellé d'onglet.

#### Icons only

```tsx
<Tab
  options={[
    { id: 'home', panelId: 'panel-1', icon: 'home' },
    { id: 'bookmarks', panelId: 'panel-2', icon: 'bookmarks' },
    { id: 'chat', panelId: 'panel-3', icon: 'chat' },
    { id: 'settings', panelId: 'panel-4', icon: 'settings' },
  ]}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
/>
```

Affiche des onglets avec icône uniquement, sans libellé.

#### With badge

```tsx
<Tab
  options={[
    {
      id: 'photos',
      label: 'Photos',
      panelId: 'panel-1',
      icon: 'photo-camera',
      badgeCount: 5,
      badgeContent: 'number',
      badgeType: 'indicator',
      showBadge: true,
    },
    { id: 'videos', label: 'Videos', panelId: 'panel-2', icon: 'video-camera' },
    { id: 'music', label: 'Music', panelId: 'panel-3', icon: 'headphones' },
  ]}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
/>
```

Affiche un badge sur un onglet.

#### Overflow type

```tsx
<Tab
  options={tabs}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
  overflowType="scrollable"
/>

<Tab
  options={tabs}
  selectedTabId={selectedTabId}
  onChange={setSelectedTabId}
  overflowType="dropdown"
/>
```

Contrôle le comportement des onglets lorsqu'ils dépassent la largeur du conteneur.

(`"scrollable" | "dropdown"`)

## Limitations

### Les panneaux ne sont pas rendus

`Tab` affiche uniquement la liste d'onglets. Vous devez créer et gérer le contenu des panneaux séparément, en reliant l'`id` de chaque panneau au `panelId` correspondant dans `options`.

### Sélection automatique du premier onglet

Lorsque `selectedTabId` est omis et que `options` contient au moins un onglet, `Tab` appelle `onChange` avec l'`id` du premier onglet au montage.

### Le débordement en dropdown est horizontal uniquement

Lorsque `overflowType` vaut `"dropdown"`, la liste est remplacée par un menu déroulant uniquement lorsque les onglets horizontaux débordent. Les onglets verticaux utilisent toujours les flèches de défilement lorsque le contenu dépasse le conteneur.

### Affichage du badge

Sans `showBadge`, un badge n'apparaît que si `badgeCount` est supérieur à 0 avec `badgeContent: "number"`, ou si `badgeContent` vaut `"icon"` et `badgeIcon` est renseigné.

### Contenu personnalisé du libellé

Le champ `label` n'accepte qu'une `string`. Les libellés ReactNode personnalisés ne sont pas supportés.

### aria-label fixe sur la liste d'onglets

La liste d'onglets utilise un `aria-label="Sample Tabs"` codé en dur. Fournissez un nom accessible via le contexte de la page si un libellé plus spécifique est nécessaire.

### Onglets désactivés et navigation clavier

Les onglets désactivés ne peuvent pas être activés et sont ignorés lors de la navigation avec les flèches. La navigation boucle du dernier onglet activé au premier.

## FAQ

Q : Pourquoi mon onglet horizontal se replie lorsque le viewport diminue ?

R : Vérifiez `overflowType`. Lorsqu'il vaut `"dropdown"`, les onglets qui débordent sont regroupés dans un seul bouton menu. Utilisez `"scrollable"` (valeur par défaut) pour conserver les onglets visibles avec des flèches de défilement.

Q : Puis-je afficher une icône à droite du libellé pour indiquer un statut ?

R : Il n'existe pas de variante avec icône à droite. Utilisez un badge avec `badgeContent: "icon"`, `badgeIcon` et `showBadge: true`.

Q : Puis-je passer un ReactNode comme libellé d'onglet ?

R : Non. Le champ `label` est typé en `string`. Utilisez les propriétés `icon` et badge intégrées pour les variantes supportées.

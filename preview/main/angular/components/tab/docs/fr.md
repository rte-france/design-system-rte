# Tab

## Overview

```html
<rte-tab
  [options]="tabs"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
/>
```

## API

Le composant `rte-tab` constitue l'API publique. Passez les définitions d'onglets via `options`, contrôlez l'onglet actif avec `selectedTabId` et écoutez `(change)` pour mettre à jour la sélection.


| Property       | Type                        | Default        | Description                                                                                                                          |
| -------------- | --------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| options        | `TabItemProps[]`            | `[]`           | Définitions des onglets affichés dans la liste.                                                                                      |
| selectedTabId  | `string`                    | —              | Id de l'onglet sélectionné. Doit correspondre à un `id` dans `options`.                                                              |
| direction      | `"horizontal" | "vertical"` | `"horizontal"` | Direction de la liste d'onglets. `"horizontal"` les dispose en ligne ; `"vertical"` les empile en colonne.                           |
| alignment      | `"start" | "center"`        | `"start"`      | Alignement des onglets lorsqu'il n'y a pas de débordement. Forcé à `"start"` en cas de débordement.                                  |
| compactSpacing | `boolean`                   | `false`        | Réduit l'espacement entre les onglets.                                                                                               |
| overflowType   | `"scrollable" | "dropdown"` | `"scrollable"` | Gestion du débordement horizontal. `"scrollable"` ajoute des flèches de défilement ; `"dropdown"` regroupe les onglets dans un menu. |
| inverted       | `boolean`                   | `false`        | Affiche les onglets sur fond inverse (sombre).                                                                                       |



| Output | Type     | Description                                            |
| ------ | -------- | ------------------------------------------------------ |
| change | `string` | Émet l'`id` de l'onglet sélectionné par l'utilisateur. |


Chaque entrée de `options` accepte les champs suivants :


| Property     | Type                                | Default    | Description                                                                                            |
| ------------ | ----------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| id           | `string`                            | — (requis) | Identifiant unique de l'onglet. Utilisé comme valeur de l'événement `change`.                          |
| panelId      | `string`                            | — (requis) | Id du panneau associé, défini comme `aria-controls` sur le bouton d'onglet.                            |
| label        | `string`                            | —          | Libellé visible de l'onglet.                                                                           |
| icon         | `string`                            | —          | Nom de l'icône affichée avant le libellé.                                                              |
| disabled     | `boolean`                           | `false`    | Désactive l'onglet. Ignoré lors de la navigation au clavier.                                           |
| showBadge    | `boolean`                           | —          | Affiche le badge même si les critères de compteur ou d'icône ne sont pas remplis.                      |
| badgeCount   | `number`                            | —          | Valeur numérique affichée lorsque `badgeContent` vaut `"number"`.                                      |
| badgeContent | `"number" | "icon" | "empty"`       | —          | `"number"` affiche un compteur ; `"icon"` affiche `badgeIcon` ; `"empty"` affiche un point indicateur. |
| badgeIcon    | `string`                            | —          | Nom de l'icône affichée lorsque `badgeContent` vaut `"icon"`.                                          |
| badgeType    | `"brand" | "neutral" | "indicator"` | —          | Variante visuelle du badge.                                                                            |




## Usage

Utilisez `rte-tab` pour afficher une liste d'onglets. Vous gérez l'onglet sélectionné et le contenu des panneaux associés dans votre application.

N'utilisez pas le sélecteur interne `rte-tab-item` dans vos templates applicatifs. Les onglets sont créés automatiquement à partir du tableau `options`.

Liez `selectedTabId` à l'état de votre composant et mettez-le à jour dans le gestionnaire `(change)`. Affichez les panneaux séparément et montrez celui dont l'`id` correspond au `panelId` de l'onglet sélectionné.

```typescript
@Component({
  template: `
    <rte-tab
      [options]="tabs"
      [selectedTabId]="selectedTabId"
      (change)="selectedTabId = $event"
    />

    @for (tab of tabs; track tab.id) {
      <div
        [id]="tab.panelId"
        role="tabpanel"
        [attr.aria-labelledby]="tab.id"
        [hidden]="selectedTabId !== tab.id"
      >
        Content for {{ tab.label }}
      </div>
    }
  `,
})
export class MyComponent {
  selectedTabId = 'tab-1';

  tabs = [
    { id: 'tab-1', label: 'First Tab', panelId: 'panel-1' },
    { id: 'tab-2', label: 'Second Tab', panelId: 'panel-2' },
    { id: 'tab-3', label: 'Third Tab', panelId: 'panel-3' },
  ];
}
```



### Examples



#### Vertical

```html
<rte-tab
  [options]="tabs"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
  direction="vertical"
/>
```

Affiche une liste d'onglets verticale à côté du contenu du panneau.

(`"horizontal" | "vertical"`)

#### With icons

```html
<rte-tab
  [options]="[
    { id: 'photos', label: 'Photos', panelId: 'panel-1', icon: 'photo-camera' },
    { id: 'videos', label: 'Videos', panelId: 'panel-2', icon: 'video-camera' },
    { id: 'music', label: 'Music', panelId: 'panel-3', icon: 'headphones' }
  ]"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
/>
```

Ajoute une icône avant chaque libellé d'onglet.

#### Icons only

```html
<rte-tab
  [options]="[
    { id: 'home', panelId: 'panel-1', icon: 'home' },
    { id: 'bookmarks', panelId: 'panel-2', icon: 'bookmarks' },
    { id: 'chat', panelId: 'panel-3', icon: 'chat' },
    { id: 'settings', panelId: 'panel-4', icon: 'settings' }
  ]"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
/>
```

Affiche des onglets avec icône uniquement, sans libellé.

#### `With` badge

```html
<rte-tab
  [options]="[
    {
      id: 'photos',
      label: 'Photos',
      panelId: 'panel-1',
      icon: 'photo-camera',
      badgeCount: 5,
      badgeContent: 'number',
      badgeType: 'indicator',
      showBadge: true
    },
    { id: 'videos', label: 'Videos', panelId: 'panel-2', icon: 'video-camera' },
    { id: 'music', label: 'Music', panelId: 'panel-3', icon: 'headphones' }
  ]"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
/>
```

Affiche un badge sur un onglet.

#### Overflow type

```html
<rte-tab
  [options]="tabs"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
  overflowType="scrollable"
/>

<rte-tab
  [options]="tabs"
  [selectedTabId]="selectedTabId"
  (change)="selectedTabId = $event"
  overflowType="dropdown"
/>
```

Contrôle le comportement des onglets lorsqu'ils dépassent la largeur du conteneur.

(`"scrollable" | "dropdown"`)

## Limitations



### Les panneaux ne sont pas rendus

`rte-tab` affiche uniquement la liste d'onglets. Vous devez créer et gérer le contenu des panneaux séparément, en reliant l'`id` de chaque panneau au `panelId` correspondant dans `options`.

### Sélection entièrement contrôlée

Le composant ne sélectionne pas automatiquement un onglet. Vous devez initialiser `selectedTabId` avec un `id` valide et le mettre à jour lorsque `(change)` est émis.

### Le débordement en dropdown est horizontal uniquement

Lorsque `overflowType` vaut `"dropdown"`, la liste est remplacée par un menu déroulant uniquement lorsque les onglets horizontaux débordent. Les onglets verticaux utilisent toujours les flèches de défilement lorsque le contenu dépasse le conteneur.

### Affichage du badge

Sans `showBadge`, un badge n'apparaît que si `badgeCount` est supérieur à 0 avec `badgeContent: "number"`, ou si `badgeContent` vaut `"icon"` et `badgeIcon` est renseigné.

### aria-label fixe sur la liste d'onglets

La liste d'onglets utilise un `aria-label="Sample Tabs"` codé en dur. Fournissez un nom accessible via le contexte de la page si un libellé plus spécifique est nécessaire.

### Onglets désactivés et navigation clavier

Les onglets désactivés ne peuvent pas être activés et sont ignorés lors de la navigation avec les flèches. La navigation boucle du dernier onglet activé au premier.

## FAQ

Q : Pourquoi mon onglet horizontal se replie lorsque le viewport diminue ?

R : Vérifiez `overflowType`. Lorsqu'il vaut `"dropdown"`, les onglets qui débordent sont regroupés dans un seul bouton menu. Utilisez `"scrollable"` (valeur par défaut) pour conserver les onglets visibles avec des flèches de défilement.

Q : Puis-je afficher une icône à droite du libellé pour indiquer un statut ?

R : Il n'existe pas de variante avec icône à droite. Utilisez un badge avec `badgeContent: "icon"`, `badgeIcon` et `showBadge: true`.
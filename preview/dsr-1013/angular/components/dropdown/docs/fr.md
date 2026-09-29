# Dropdown

## Overview

```html
<div rteDropdown (menuEvent)="onItemClick($event)">
  <button rteDropdownTrigger>Menu</button>
  <rte-dropdown-menu [items]="items" />
</div>
```

## API

La directive `[rteDropdown]`, la directive `[rteDropdownTrigger]` et le composant `<rte-dropdown-menu>` constituent l'API publique. Définissez les entrées de menu avec un tableau `DropdownItemConfig[]` et gérez la sélection via la sortie `menuEvent`.

### DropdownDirective (`[rteDropdown]`)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| rteDropdownId | string | auto-généré | Identifiant personnalisé optionnel de l'instance dropdown. |
| rteDropdownPosition | `"auto" \| "top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Placement préféré par rapport au déclencheur. `"auto"` choisit le meilleur emplacement dans la fenêtre. |
| rteDropdownAlignment | `"start" \| "center" \| "end"` | `"start"` | Alignement du panneau le long de l'axe de placement. |
| rteDropdownIsOpen | boolean | `false` | Ouvre le menu de manière programmatique lorsque `true`. |
| rteDropdownOffset | number | `0` | Espacement en pixels entre le déclencheur et le panneau. |
| rteDropdownAutofocus | boolean | `true` | Déplace le focus sur le premier item à l'ouverture. |
| rteDropdownAutoOpen | boolean | `true` | Ouvre le menu au clic sur le déclencheur et à l'activation clavier. |
| rteDropdownWidth | `number \| null` | `null` | Largeur fixe en pixels du panneau dropdown. |
| rteDropdownOverlayLevel | `"low" \| "high"` | auto-détecté | Priorité d'empilement de l'overlay. `"high"` est utilisé lorsque le déclencheur se trouve dans un autre overlay. |
| rteCloseOnItemClick | boolean | `true` | Ferme le menu lorsqu'un item terminal (sans enfants) est activé. |

| Output | Payload | Description |
|--------|---------|-------------|
| menuEvent | `{ event: Event; id: string; item?: DropdownItemConfig }` | Émis lorsqu'un item terminal est cliqué ou activé au clavier. |
| clickedOutside | `void` | Émis lorsque l'utilisateur clique en dehors du dropdown. |
| closedDropdown | `void` | Émis après la fermeture complète du dropdown. |

### DropdownTriggerDirective (`[rteDropdownTrigger]`)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| rteDropdownTriggerActivateWithArrowDown | boolean | `false` | Ouvre le menu lorsque la touche Flèche bas est pressée sur le déclencheur. |

Appliquez cette directive sur l'élément qui ouvre le menu (par exemple un `<button>`).

### DropdownMenuComponent (`<rte-dropdown-menu>`)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| items | `DropdownItemConfig[]` | `[]` | Entrées de menu. À omettre lors de l'utilisation d'un template de corps personnalisé. |
| maxHeight | `number \| null` | `null` | Hauteur maximale du panneau en pixels. Le contenu défile au-delà. |

Projettez un en-tête, un pied de page ou un corps personnalisé avec `ng-template` :

| Directive | Selector | Description |
|-----------|----------|-------------|
| DropdownMenuHeaderDirective | `[rteDropdownMenuHeader]` | Contenu au-dessus du corps du menu. |
| DropdownMenuFooterDirective | `[rteDropdownMenuFooter]` | Contenu sous le corps du menu. |
| DropdownMenuBodyDirective | `[rteDropdownMenuBody]` | Remplace la liste d'items par défaut par un contenu personnalisé. |

N'utilisez pas `<rte-dropdown-item>` directement dans les templates applicatifs — les items sont rendus en interne à partir du tableau `items`.

### DropdownItemConfig

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| label | string | — (requis) | Texte visible de l'item de menu. |
| id | string | label | Identifiant émis dans `menuEvent`. |
| leftIcon | string | — | Nom de l'icône affichée avant le libellé. |
| trailingText | string | — | Texte secondaire aligné à droite. |
| link | string | — | **Déprécié.** Utilisez `href` ou `routerLink` à la place. |
| href | string | — | Affiche le libellé comme lien externe. |
| routerLink | `string \| any[]` | — | Lien Angular router pour la navigation interne. |
| routerLinkConfig | `RouterLinkConfig` | — | Options router link additionnelles (`queryParams`, `fragment`, etc.). |
| externalLink | boolean | — | Ouvre les liens `href` dans un nouvel onglet. |
| disabled | boolean | `false` | Désactive l'interaction. |
| hasSeparator | boolean | `false` | Affiche un divider sous l'item. |
| hasIndent | boolean | `false` | Ajoute une indentation à gauche. |
| hasCheckbox | boolean | `false` | Affiche une checkbox avant le libellé. |
| selected | boolean | `false` | État sélectionné pour les items avec checkbox. |
| isIndeterminate | boolean | `false` | État indéterminé pour les items avec checkbox. |
| children | `DropdownItemConfig[]` | — | Items de sous-menu imbriqués. |
| showBadge | boolean | — | Affiche un badge lorsque combiné avec les props badge. |
| badgeCount | number | — | Valeur numérique du badge. |
| badgeContent | `"number" \| "icon" \| "empty"` | — | Type de contenu du badge. |
| badgeIcon | string | — | Nom de l'icône lorsque `badgeContent` est `"icon"`. |
| badgeType | `"brand" \| "neutral" \| "indicator"` | — | Variante visuelle du badge. |
| badgeSize | `"xs" \| "s" \| "m" \| "l"` | — | Taille du badge. |

## Usage

Importez `DropdownModule`, composez un élément hôte avec `[rteDropdown]`, attachez `[rteDropdownTrigger]` au déclencheur et passez les items à `<rte-dropdown-menu>`. Gérez la sélection via `(menuEvent)`.

```typescript
import { Component } from "@angular/core";
import { DropdownItemConfig, DropdownModule } from "@design-system-rte/angular";

@Component({
  imports: [DropdownModule],
  template: `
    <div rteDropdown (menuEvent)="onItemClick($event)">
      <button rteDropdownTrigger>Menu</button>
      <rte-dropdown-menu [items]="items" />
    </div>
  `,
})
export class ExampleComponent {
  items: DropdownItemConfig[] = [
    { label: "Messages", leftIcon: "mail", hasSeparator: true },
    { label: "Actions", leftIcon: "settings" },
    {
      label: "More information",
      leftIcon: "info",
      hasSeparator: true,
      children: [
        { label: "First option" },
        { label: "Second option" },
        { label: "Third option", hasSeparator: true },
      ],
    },
    { label: "Username", leftIcon: "user-circle", disabled: true },
  ];

  onItemClick(event: { event: Event; id: string; item?: DropdownItemConfig }) {
    console.log("Item clicked:", event);
  }
}
```

N'utilisez pas `<rte-dropdown-item>` dans les templates applicatifs. Les items sont rendus à partir du tableau de configuration `items`.

### Examples

#### With badge

```typescript
items: DropdownItemConfig[] = [
  { label: "Messages", leftIcon: "mail" },
  {
    label: "Notifications",
    leftIcon: "notification",
    showBadge: true,
    badgeCount: 4,
    badgeContent: "number",
    badgeType: "indicator",
    badgeSize: "m",
  },
];
```

```html
<div rteDropdown (menuEvent)="onItemClick($event)">
  <button rteDropdownTrigger>Menu</button>
  <rte-dropdown-menu [items]="items" />
</div>
```

Affiche un badge sur un item de menu via les propriétés badge de `DropdownItemConfig`.

(`"number" | "icon" | "empty"`), (`"brand" | "neutral" | "indicator"`), (`"xs" | "s" | "m" | "l"`)

## Limitations

### Portail overlay

Le panneau dropdown est créé dynamiquement dans la racine overlay de l'application (`#overlay-root`). Vérifiez que la couche overlay est présente dans le shell applicatif.

### Items pilotés par configuration

Les entrées de menu sont définies comme un tableau `DropdownItemConfig[]`, et non comme du contenu projeté. Utilisez `[rteDropdownMenuBody]` uniquement lorsque la mise en page liste par défaut ne convient pas (par exemple un panneau entièrement personnalisé).

### Composant item interne

`<rte-dropdown-item>` est un composant interne rendu par `<rte-dropdown-menu>`. Ne l'utilisez pas directement dans les templates applicatifs.

### Interaction des sous-menus

Les sous-menus imbriqués (via `children` sur un item) s'ouvrent au survol et au focus clavier. Ils se ferment après un délai de 300 ms lorsque le pointeur quitte l'item déclencheur. Une seule branche de sous-menu est ouverte à la fois dans un menu parent.

### Clic extérieur

Un `mousedown` en dehors de l'hôte déclencheur et du panneau ouvert ferme le dropdown et émet `clickedOutside`.

### Ouverture programmatique

Utilisez `[rteDropdownIsOpen]="true"` pour ouvrir le menu sans interaction sur le déclencheur. Associez `(closedDropdown)` ou `(clickedOutside)` pour synchroniser l'état à la fermeture.

### Propriété link dépréciée

La propriété `link` sur `DropdownItemConfig` est dépréciée. Utilisez `href` pour les URL externes ou `routerLink` pour la navigation interne.

### Items avec checkbox

Lorsque `hasCheckbox` est activé, l'état de sélection est lu depuis `selected` et `isIndeterminate`. Gérez le basculement dans le gestionnaire `menuEvent` et mettez à jour le tableau `items` en conséquence.

## FAQ

Q : Le menu dropdown n'apparaît pas lorsque je clique sur le déclencheur.

R : Consultez la section Limitations / Portail overlay. Le panneau est créé dans `#overlay-root`. Vérifiez que la couche overlay est présente dans le shell applicatif.

Q : Puis-je utiliser `<rte-dropdown-item>` directement dans mon template ?

R : Consultez la section Limitations / Composant item interne. Les items sont rendus en interne à partir du tableau `items` sur `<rte-dropdown-menu>`. Définissez les entrées comme objets `DropdownItemConfig`.

Q : Un sous-menu imbriqué se ferme lorsque j'éloigne brièvement le pointeur.

R : Consultez la section Limitations / Interaction des sous-menus. Les sous-menus se ferment après un délai de 300 ms lorsque le pointeur quitte l'item déclencheur. Déplacez le pointeur vers le panneau du sous-menu avant l'expiration du délai.

Q : La propriété `link` d'un item ne navigue pas correctement.

R : Consultez la section Limitations / Propriété link dépréciée. `link` est déprécié — utilisez `href` pour les URL externes ou `routerLink` pour la navigation interne.

Q : Les items avec checkbox ne reflètent pas la sélection après un clic.

R : Consultez la section Limitations / Items avec checkbox. Mettez à jour `selected` (et `isIndeterminate` si besoin) sur l'item dans le tableau `items` au sein du gestionnaire `menuEvent`.

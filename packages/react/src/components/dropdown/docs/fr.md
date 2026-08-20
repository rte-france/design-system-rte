# Dropdown

## Overview

```tsx
const [isOpen, setIsOpen] = useState(false);

<Dropdown
  dropdownId="my-dropdown"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  trigger={<button onClick={() => setIsOpen(true)}>Menu</button>}
>
  <DropdownItem label="Messages" leftIcon="mail" onClick={() => console.log("click")} />
  <DropdownItem label="Help" leftIcon="help" />
</Dropdown>
```

## API

Les composants `Dropdown` et `DropdownItem` constituent l'API publique. Contrôlez l'état d'ouverture avec `isOpen` et `onClose` ; composez les entrées de menu en tant qu'enfants `DropdownItem`.

### Dropdown

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| trigger | `React.ReactNode` | — (requis) | Élément qui ouvre le menu (généralement un bouton). |
| isOpen | boolean | `false` | Contrôle la visibilité du panneau. |
| onClose | `() => void` | `() => {}` | Appelé à la fermeture (clic extérieur, Échap, ou sélection d'un item lorsque `autoClose` est activé). |
| dropdownId | string | auto-généré | Identifiant unique pour la gestion du focus et des sous-menus. |
| position | `"auto" \| "top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Placement préféré par rapport au déclencheur. `"auto"` choisit le meilleur emplacement dans la fenêtre. |
| alignment | `"start" \| "center" \| "end"` | `"start"` | Alignement du panneau le long de l'axe de placement. |
| offset | number | `0` | Espacement en pixels entre le déclencheur et le panneau. |
| autoClose | boolean | `true` | Ferme le menu racine lorsqu'un item terminal est activé. |
| autofocus | boolean | `true` | Déplace le focus sur le premier item à l'ouverture. |
| hasParent | boolean | `false` | Marque un sous-menu imbriqué. Défini automatiquement par `DropdownItem` lorsqu'il a des enfants. |
| header | `React.ReactNode` | — | Contenu optionnel au-dessus du corps du menu, séparé par un divider. |
| footer | `React.ReactNode` | — | Contenu optionnel sous le corps du menu, séparé par un divider. |
| isList | boolean | `true` | Lorsque `true`, enveloppe les enfants dans un `<ul role="menu">`. Mettre à `false` pour un corps personnalisé. |
| hasMaxWidth | boolean | `true` | Applique la largeur maximale du design system (300px) au panneau. |
| overlayLevel | `"low" \| "high"` | auto-détecté | Priorité d'empilement de l'overlay. `"high"` est utilisé lorsque le déclencheur se trouve dans un autre overlay. |
| maxHeight | `number \| string` | — | Hauteur maximale du panneau ; le contenu défile au-delà. |
| className | string | — | Classe CSS additionnelle sur le panneau. |
| style | `React.CSSProperties` | — | Styles inline sur le panneau (par exemple `width`). |

### DropdownItem

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| label | string | — | Texte visible de l'item de menu. |
| leftIcon | string | — | Nom de l'icône affichée avant le libellé. |
| trailingText | string | — | Texte secondaire aligné à droite (par exemple un raccourci clavier). |
| link | string | — | Affiche le libellé comme lien avec l'`href` fourni. |
| disabled | boolean | `false` | Désactive l'interaction et applique le style désactivé. |
| hasSeparator | boolean | `false` | Affiche un divider sous l'item. |
| hasIndent | boolean | `false` | Ajoute une indentation à gauche. Ignoré lorsque `leftIcon` est défini. |
| hasCheckbox | boolean | `false` | Affiche une checkbox avant le libellé. |
| isSelected | boolean | `false` | État sélectionné pour les items avec checkbox. |
| isIndeterminate | boolean | `false` | État indéterminé pour les items avec checkbox. |
| onClick | `(event: React.MouseEvent<HTMLLIElement> \| React.KeyboardEvent<HTMLLIElement>) => void` | — | Gestionnaire d'activation (clic, Espace ou Entrée). |
| showBadge | boolean | — | Affiche un badge lorsque combiné avec les props badge. |
| badgeCount | number | — | Valeur numérique du badge lorsque `badgeContent` est `"number"`. |
| badgeContent | `"number" \| "icon" \| "empty"` | — | Type de contenu du badge. |
| badgeIcon | string | — | Nom de l'icône lorsque `badgeContent` est `"icon"`. |
| badgeType | `"brand" \| "neutral" \| "indicator"` | — | Variante visuelle du badge. |
| badgeSize | `"xs" \| "s" \| "m" \| "l"` | — | Taille du badge. |
| children | `React.ReactNode` | — | Items de sous-menu imbriqués. Affiche un chevron et ouvre un `Dropdown` enfant au survol ou au clavier. |

## Usage

Importez `Dropdown` et `DropdownItem`, gérez l'état d'ouverture dans le composant parent et passez un élément déclencheur. Le panneau est porté dans la couche overlay.

```tsx
import { useState } from "react";
import { Dropdown, DropdownItem } from "@design-system-rte/react";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      dropdownId="example-dropdown"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={
        <button onClick={() => setIsOpen(true)}>Menu</button>
      }
    >
      <DropdownItem label="Messages" leftIcon="mail" hasSeparator onClick={() => console.log("click")} />
      <DropdownItem label="Actions" leftIcon="settings">
        <DropdownItem label="Edit" leftIcon="edit">
          <DropdownItem label="Cut" leftIcon="cut" trailingText="⌘X" />
          <DropdownItem label="Copy" leftIcon="copy" trailingText="⌘C" />
        </DropdownItem>
        <DropdownItem label="Delete" leftIcon="delete" />
      </DropdownItem>
      <DropdownItem label="Help" leftIcon="help" />
      <DropdownItem label="Username" leftIcon="user-circle" disabled />
    </Dropdown>
  );
}
```

Les sous-menus imbriqués se déclarent en imbriquant des `DropdownItem`. Les items terminaux avec un gestionnaire `onClick` ferment le menu racine lorsque `autoClose` est à `true` (valeur par défaut).

### Examples

#### With badge

```tsx
<Dropdown
  dropdownId="dropdown-with-badge"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  trigger={<button onClick={() => setIsOpen(true)}>Menu</button>}
>
  <DropdownItem
    label="Messages"
    leftIcon="mail"
    showBadge
    badgeCount={5}
    badgeContent="number"
    badgeType="indicator"
  />
  <DropdownItem label="Username" leftIcon="user-circle" link="/username" />
</Dropdown>
```

Affiche un badge sur un item de menu via les props badge (`showBadge`, `badgeCount`, `badgeContent`, `badgeType`, `badgeIcon`, `badgeSize`).

(`"number" | "icon" | "empty"`), (`"brand" | "neutral" | "indicator"`), (`"xs" | "s" | "m" | "l"`)

#### With custom body

```tsx
<Dropdown
  dropdownId="dropdown-custom-body"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  isList={false}
  trigger={<button onClick={() => setIsOpen(true)}>Custom body</button>}
>
  <div style={{ padding: "16px" }}>
    Custom body content — any React node can go here.
  </div>
</Dropdown>
```

Passez `isList={false}` pour omettre la liste par défaut et afficher un contenu arbitraire dans le corps du panneau.

## Limitations

### Portail overlay

Le panneau est rendu dans la racine overlay de l'application (`#overlay-root`). Vérifiez que la couche overlay est présente dans le shell applicatif ; sinon le panneau n'apparaîtra pas.

### Largeur maximale

Lorsque `hasMaxWidth` est à `true` (défaut), le panneau est limité à 300px. Passez `hasMaxWidth={false}` ou définissez un `style.width` explicite pour un panneau plus large.

### Indentation et icônes

`hasIndent` est ignoré lorsque `leftIcon` est fourni. Utilisez l'un ou l'autre — pas les deux — pour un même item.

### Interaction des sous-menus

Les sous-menus imbriqués s'ouvrent au survol et au focus clavier. Une seule branche de sous-menu est ouverte à la fois dans un menu parent. Les sous-menus se positionnent automatiquement à droite de l'item déclencheur.

### Clic extérieur

Un `mousedown` en dehors de tout panneau ouvert et de son déclencheur ferme le menu. Les clics à l'intérieur de tout élément `[data-dropdown-id]` (y compris les sous-menus) maintiennent le menu ouvert.

### État d'ouverture contrôlé

L'état d'ouverture est entièrement contrôlé par le consommateur via `isOpen` et `onClose`. Le composant ne bascule pas lui-même — le déclencheur doit mettre à jour `isOpen`.

### Items avec checkbox

Lorsque `hasCheckbox` est activé, l'activation passe par le `onChange` de la checkbox intégrée. Fournissez `isSelected` et, si besoin, `isIndeterminate` pour refléter l'état de sélection.

## FAQ

Q : Le panneau dropdown n'apparaît pas lorsque je passe `isOpen` à `true`.

R : Consultez la section Limitations / Portail overlay. Le panneau est rendu dans `#overlay-root`. Vérifiez que la couche overlay est présente dans le shell applicatif.

Q : Le clic sur le déclencheur n'ouvre ni ne ferme le menu.

R : Consultez la section Limitations / État d'ouverture contrôlé. L'état est entièrement contrôlé — mettez à jour `isOpen` dans le gestionnaire du déclencheur et réinitialisez-le dans `onClose`.

Q : Le panneau est limité à 300px et mon contenu est tronqué.

R : Consultez la section Limitations / Largeur maximale. Passez `hasMaxWidth={false}` ou définissez un `style.width` explicite.

Q : `hasIndent` n'a aucun effet sur un item qui a aussi `leftIcon`.

R : Consultez la section Limitations / Indentation et icônes. `hasIndent` est ignoré lorsque `leftIcon` est fourni.

Q : Les items avec checkbox ne se mettent pas à jour au clic.

R : Consultez la section Limitations / Items avec checkbox. Gérez `isSelected` (et `isIndeterminate` si besoin) dans le parent et passez les props mises à jour.

# Modal

## Overview

```tsx
<>
  <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
  <Modal
    id="modal-1"
    title="Connect to Wi-Fi"
    description="Please connect to wifi to synchronise your projects or go to Settings to change your preferences."
    icon="wifi"
    iconAppearance="outlined"
    size="xs"
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    closeOnOverlayClick
    primaryButton={<Button variant="primary" label="Continue" />}
    secondaryButton={<Button variant="neutral" label="Cancel" />}
  />
</>
```

## API

Le composant `Modal` constitue l'API publique.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | string | — (requis) | Identifiant unique utilisé pour les attributs ARIA (`{id}-modal-title`, `{id}-modal-desc`). |
| title | string | — (requis) | Titre de la modale affiché dans l'en-tête. |
| isOpen | boolean | — (requis) | Contrôle si la modale est rendue et animée en position ouverte. |
| onClose | `() => void` | — (requis) | Callback invoqué lorsque la modale doit se fermer (bouton de fermeture, fond, ou Échap). |
| primaryButton | `DSButtonElement` | — (requis) | Bouton d'action principal rendu dans le pied de page. |
| description | string | — | Paragraphe de description rendu au-dessus de `children`. |
| icon | string | — | Nom de l'icône affichée dans l'en-tête. |
| iconAppearance | `"outlined" \| "filled"` | — | Style visuel de l'icône d'en-tête. |
| size | `"xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"` | Preset de largeur de la modale. |
| closeOnOverlayClick | boolean | `true` | Lorsque `true`, un clic sur le fond appelle `onClose`. |
| secondaryButton | `DSButtonElement` | — | Bouton d'action secondaire rendu avant le bouton principal. |
| children | `React.ReactNode \| React.ReactNode[]` | — | Contenu additionnel rendu sous la description dans le corps de la modale. |
| className | string | — | Classe CSS additionnelle fusionnée sur l'élément dialog. |
| aria-describedby | string | — | Valeur `aria-describedby` personnalisée lorsqu'aucune `description` n'est fournie. Transmise via les attributs HTML standard du dialog. |

## Usage

Contrôlez `Modal` avec `isOpen` et `onClose`. Rendez un déclencheur (par exemple un `Button`) qui définit `isOpen` à `true`, et connectez les actions du pied de page via `primaryButton` et `secondaryButton`.

```tsx
import { useState } from "react";
import { Button, Modal } from "@design-system-rte/react";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="primary" label="Open Modal" onClick={() => setIsOpen(true)} />
      <Modal
        id="modal-1"
        title="Connect to Wi-Fi"
        description="Please connect to wifi to synchronise your projects or go to Settings to change your preferences."
        icon="wifi"
        iconAppearance="outlined"
        size="xs"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnOverlayClick
        primaryButton={<Button variant="primary" label="Continue" onClick={() => setIsOpen(false)} />}
        secondaryButton={<Button variant="neutral" label="Cancel" onClick={() => setIsOpen(false)} />}
      />
    </>
  );
}
```

La modale est portée via `Overlay`. Aucun provider wrapper supplémentaire n'est requis.

### Examples

#### Sizes

```tsx
const [openState, setOpenState] = useState<Record<string, boolean>>({});

<>
  <Button variant="primary" label="Open modal xs" onClick={() => setOpenState({ ...openState, "modal-1": true })} />
  <Button variant="primary" label="Open modal s" onClick={() => setOpenState({ ...openState, "modal-2": true })} />
  {/* Déclencheurs additionnels pour m, l, xl */}

  <Modal {...sharedProps} id="modal-1" size="xs" isOpen={openState["modal-1"]} onClose={() => setOpenState({ ...openState, "modal-1": false })} />
  <Modal {...sharedProps} id="modal-2" size="s" isOpen={openState["modal-2"]} onClose={() => setOpenState({ ...openState, "modal-2": false })} />
  {/* Modales additionnelles pour m, l, xl */}
</>
```

Utilisez la prop `size` pour choisir un preset de largeur : `xs` (496 px), `s` (656 px), `m` (936 px), `l` (1168 px), `xl` (1328 px).

(`"xs" | "s" | "m" | "l" | "xl"`)

#### With custom content

```tsx
<Modal
  id="modal-2"
  title="Préciser le motif du refus"
  description="En motivant votre refus, vous aidez votre collaborateur à mieux identifier comment corriger sa demande."
  size="m"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  primaryButton={<Button variant="primary" label="Envoyer" onClick={() => setIsOpen(false)} />}
  secondaryButton={<Button variant="neutral" label="Annuler" onClick={() => setIsOpen(false)} />}
>
  <Textarea resizeable />
  <Select id="select-1" label="Select an option" options={selectOptions} value={selectedOption} onChange={setSelectedOption} />
</Modal>
```

Passez des champs de formulaire ou d'autres composants en `children` lorsque le paragraphe de description par défaut ne suffit pas.

## Limitations

### Deux boutons d'action maximum dans le pied de page

Le pied de page prend en charge un bouton principal et un bouton secondaire optionnel, plus le bouton de fermeture dans l'en-tête. Un bouton tertiaire dans le pied de page n'est pas supporté. Lorsque davantage d'actions sont nécessaires, privilégiez l'ouverture du contenu en dehors de la modale, le regroupement d'actions dans un Split Button en tant qu'action principale (voir DSR-838), ou le placement d'actions supplémentaires dans `children`.

### Taille et couleur de l'icône d'en-tête

La taille de l'icône d'en-tête est fixe et sa couleur suit les design tokens. Seuls le nom de l'icône (`icon`) et l'apparence (`iconAppearance` : `outlined` ou `filled`) sont configurables. Les surcharges de taille ou de couleur ne sont pas supportées.

### Bouton principal requis

`primaryButton` est une prop requise. Le pied de page rend toujours une action principale.

### Largeur fixe par taille

La largeur de la modale est contrôlée par des presets de taille, pas par du CSS consommateur. Largeurs par défaut : `xs` 496 px, `s` 656 px, `m` 936 px, `l` 1168 px, `xl` 1328 px.

### Hauteur maximale et corps défilant

La boîte de dialogue est plafonnée à `90vh`. La zone de contenu défile lorsque la description et `children` dépassent la hauteur disponible.

### Verrouillage du défilement du body

Tant que `isOpen` est à `true`, `document.body.style.overflow` est défini à `"hidden"`. Il est restauré à `"unset"` lorsque la modale se ferme.

### Échap ferme toujours

Appuyer sur Échap appelle `onClose` quel que soit `closeOnOverlayClick`. Les clics sur le fond respectent `closeOnOverlayClick` ; Échap non.

### Piège de focus

Le focus est piégé à l'intérieur de la boîte de dialogue tant qu'elle est montée et ouverte. Tabulation cycle entre les éléments focusables de la modale, y compris les boutons du pied de page et le bouton de fermeture de l'en-tête.

### Troncature du titre

Les titres longs sont tronqués avec une ellipse dans l'en-tête. Gardez les titres concis.

### Animation de montage et démontage

La modale reste montée pendant 150 ms après que `isOpen` passe à `false`, afin que l'animation de sortie puisse se jouer avant la suppression de l'overlay.

## FAQ

Q : J'ai besoin de trois actions dans le pied de page (par exemple supprimer, télécharger et fermer) — puis-je ajouter un bouton tertiaire ?

R : Consultez la section Limitations / Deux boutons d'action maximum dans le pied de page. Le pied de page de la modale ne supporte qu'un bouton principal, un bouton secondaire optionnel et le bouton de fermeture de l'en-tête. L'évolution d'un bouton tertiaire a été examinée et n'a pas été validée. Pour regrouper des actions, envisagez un Split Button en tant qu'action principale (DSR-838). Pour la visualisation d'une pièce jointe, l'ouverture en dehors de la modale est préférable avant d'effectuer des actions.

Q : Peut-on obtenir une variante avec bouton tertiaire sur Modal ?

R : Cette évolution n'a pas été validée par le comité Design System. Suivez DSR-838 pour l'alternative Split Button sur l'emplacement `primaryButton`. La fermeture reste disponible via le bouton de fermeture de l'en-tête ou `secondaryButton`.

Q : Dois-je utiliser le bouton secondaire pour une action destructive comme la suppression ?

R : Utilisez la variante `danger` sur le bouton principal pour les actions destructives, pas le bouton secondaire. Le bouton secondaire est destiné aux actions neutres comme l'annulation. Consultez la story Storybook `KeyboardInteraction` pour un exemple de confirmation de suppression avec un bouton principal `danger`.

Q : Comment personnaliser la taille ou la couleur de l'icône d'en-tête ?

R : Consultez la section Limitations / Taille et couleur de l'icône d'en-tête. Seuls `icon` et `iconAppearance` sont supportés. La taille et la couleur de l'icône sont fixées par le design et correspondent aux règles du composant Figma.

Q : Échap ne respecte pas `closeOnOverlayClick` — est-ce un bug ?

R : Consultez la section Limitations / Échap ferme toujours. Les clics sur le fond respectent `closeOnOverlayClick` ; Échap appelle toujours `onClose`.

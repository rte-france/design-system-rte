# Toast

## Overview

```tsx
<ToastQueueProvider>
  <Toast
    message="Une mise à jour est disponible"
    type="info"
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    actionButtonLabel="Mettre à jour"
  />
</ToastQueueProvider>
```

## API

Le composant `Toast` constitue l'API publique. Enveloppez l'application (ou la sous-arborescence concernée) avec `ToastQueueProvider` pour que la gestion de la file d'attente fonctionne correctement.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| message | string | — (requis) | Texte affiché dans le toast. |
| type | `"info" \| "success" \| "warning" \| "error" \| "neutral"` | `"error"` | Variante visuelle et priorité dans la file d'attente. |
| isOpen | boolean | `true` | Contrôle la visibilité du toast. Lorsqu'il est à `false`, le toast est retiré de la file d'attente. |
| closable | boolean | `false` | Affiche ou masque le bouton de fermeture. |
| autoDismiss | boolean | `true` | Ferme automatiquement le toast après `duration` lorsque `true`. Désactivé lorsqu'un bouton d'action est affiché. |
| duration | `"short" \| "medium" \| "long"` | `"medium"` | Délai avant fermeture automatique (`short` : 3 s, `medium` : 5 s, `long` : 8 s). |
| placement | `"top-right" \| "top-left" \| "top-center" \| "bottom-right" \| "bottom-left" \| "bottom-center"` | `"bottom-right"` | Position du toast à l'écran. |
| showActionButton | boolean | `true` | Active le bouton d'action lorsque `actionButtonLabel` est fourni. |
| actionButtonLabel | string | — | Libellé du bouton d'action optionnel. |
| onActionButtonClick | `() => void` | — | Callback invoqué lors du clic sur le bouton d'action. |
| onClose | `() => void` | — | Callback invoqué à la fermeture du toast (bouton de fermeture, fermeture automatique ou `isOpen` à `false`). |
| iconName | string | — | Nom de l'icône personnalisée. Lorsqu'il est valide et `showLeftIcon` est `true`, remplace l'icône par défaut du type. |
| showLeftIcon | boolean | `true` | Affiche l'icône par défaut du type ou une icône personnalisée via `iconName`. Le type `neutral` n'a pas d'icône par défaut. |
| id | string | UUID auto-généré | Identifiant unique utilisé pour la gestion de la file d'attente. |
| className | string | — | Classe CSS additionnelle fusionnée sur l'élément toast. La personnalisation visuelle n'est pas supportée — ne pas utiliser pour modifier la mise en page ou le positionnement. |

## Usage

Utilisez `Toast` comme composant déclaratif contrôlé par `isOpen`. Enveloppez votre application (ou la sous-arborescence concernée) avec `ToastQueueProvider` avant de rendre un `Toast`.

```tsx
import { useState } from "react";
import { Button, Toast, ToastQueueProvider } from "@design-system-rte/react";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Afficher le toast" onClick={() => setIsOpen(!isOpen)} />
      <ToastQueueProvider>
        <Toast
          message="Une mise à jour est disponible"
          type="info"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          actionButtonLabel="Mettre à jour"
        />
      </ToastQueueProvider>
    </>
  );
}
```

`ToastQueueProvider` est requis pour la gestion de la file d'attente. Sans lui, plusieurs toasts ne peuvent pas être priorisés correctement.

### Examples

#### Multiple

```tsx
<ToastQueueProvider>
  <Toast
    message="Toast d'erreur"
    type="error"
    isOpen={isErrorOpen}
    onClose={() => setIsErrorOpen(false)}
    actionButtonLabel="Mettre à jour"
    placement="bottom-center"
    autoDismiss
    duration="short"
    closable
  />
  <Toast
    message="Toast d'info"
    type="info"
    isOpen={isInfoOpen}
    onClose={() => setIsInfoOpen(false)}
    actionButtonLabel="Mettre à jour"
    placement="bottom-center"
    autoDismiss
    duration="short"
    closable
  />
  <Toast
    message="Toast neutral"
    type="neutral"
    isOpen={isNeutralOpen}
    onClose={() => setIsNeutralOpen(false)}
    iconName="settings"
    placement="bottom-center"
    autoDismiss
    duration="short"
    closable
  />
</ToastQueueProvider>
```

Rendez plusieurs instances de `Toast` pour illustrer le comportement de la file d'attente selon les types. Seul le toast le plus prioritaire est visible jusqu'à sa fermeture.

(`"info" | "success" | "warning" | "error" | "neutral"`)

## Limitations

### Longueur du message

Le message du toast est limité à deux lignes de texte (`-webkit-line-clamp: 2`). Le contenu qui dépasse cette hauteur est tronqué. Préférez des libellés courts et concis. Les messages métier plus longs appartiennent à un autre pattern d'UI (par exemple une Banner).

Il n'existe pas de prop `size` (S / M / L). Les dimensions du toast sont fixées par le design.

### Personnalisation visuelle non supportée

N'utilisez pas `className` (ni d'autres surcharges de style) pour modifier la mise en page, le positionnement ou le design. Passer des classes personnalisées peut casser le positionnement dans l'overlay et n'est pas un pattern supporté pour les consommateurs (DSR-611).

### Un seul toast visible à la fois

Un seul toast est affiché à la fois. Les toasts supplémentaires sont mis en file d'attente et affichés par ordre de priorité (erreur avec bouton d'action en premier, puis erreur sans, avertissement, succès, info, neutre).

Lorsqu'un toast se ferme, le suivant dans la file apparaît automatiquement.

### Fermeture automatique et bouton d'action

La fermeture automatique est désactivée lorsqu'un bouton d'action est affiché (`actionButtonLabel` avec `showActionButton` activé). Les consommateurs doivent fermer le toast manuellement via le bouton de fermeture ou de manière programmatique.

### Pause du minuteur au survol

Lorsque la fermeture automatique est active, le survol du toast met le minuteur en pause. Le minuteur reprend lorsque le pointeur quitte le toast.

### Icône du type neutral

Le type `neutral` n'affiche pas d'icône par défaut associée au type. Fournissez `iconName` avec `showLeftIcon` pour afficher une icône personnalisée.

### ToastQueueProvider requis

Le composant `Toast` doit être rendu à l'intérieur de `ToastQueueProvider` pour que la file d'attente fonctionne. Sans le provider, le contexte de file d'attente est indisponible et plusieurs toasts ne seront pas gérés correctement.

## FAQ

Q : Mon message de toast est tronqué — est-ce un bug ? (DSR-651)

R : Consultez la section Limitations / Longueur du message. Le toast limite intentionnellement le message à deux lignes. Raccourcissez le texte ou utilisez une Banner pour un contenu non bloquant plus long.

Q : Peut-on ajouter des variantes de taille (S / M / L) pour des messages plus longs ? (DSR-531)

R : Cette évolution a été refusée. Les messages de toast doivent rester courts. Il n'existe pas de prop `size`. Pour un contenu métier plus long, utilisez une Banner ou un autre pattern adapté.

Q : Passer `className` casse l'affichage du toast — puis-je personnaliser le positionnement ? (DSR-611)

R : Consultez la section Limitations / Personnalisation visuelle non supportée. La personnalisation visuelle via `className` n'est pas supportée et peut casser le positionnement dans l'overlay. Utilisez `placement` pour la position à l'écran.

Q : J'ai déclenché plusieurs toasts mais un seul apparaît

R : Consultez la section Limitations / Un seul toast visible à la fois. Les toasts sont mis en file d'attente et affichés un par un selon leur priorité.

Q : Mes toasts React lèvent une erreur de contexte ou la file d'attente ne fonctionne pas

R : Enveloppez vos composants `Toast` avec `ToastQueueProvider`. Consultez la section Limitations / ToastQueueProvider requis.

Q : Mon toast ne se ferme pas automatiquement malgré `autoDismiss` à `true`

R : Consultez la section Limitations / Fermeture automatique et bouton d'action. La fermeture automatique est désactivée lorsqu'un bouton d'action est visible.

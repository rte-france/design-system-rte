# Toast

## Overview

```typescript
this.toastService.addToQueue({
  message: "Une mise à jour est disponible",
  type: "info",
  actionButtonLabel: "Mettre à jour",
  onActionButtonClick: () => {
    // traiter l'action
  },
});
```

## API

Le `ToastService` constitue l'API publique. Les consommateurs passent un objet `ToastConfig` à `addToQueue()` ; le service crée et gère l'instance sous-jacente de `ToastComponent`.

### ToastConfig

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| message | string | — (requis) | Texte affiché dans le toast. |
| type | `"info" \| "success" \| "warning" \| "error" \| "neutral"` | — (requis) | Variante visuelle et priorité dans la file d'attente. |
| closable | boolean | `true` | Affiche ou masque le bouton de fermeture. |
| autoDismiss | boolean | `false` | Ferme automatiquement le toast après `duration` lorsque `true`. Désactivé lorsqu'un bouton d'action est affiché. |
| duration | `"short" \| "medium" \| "long"` | `"medium"` | Délai avant fermeture automatique (`short` : 3 s, `medium` : 5 s, `long` : 8 s). |
| placement | `"top-right" \| "top-left" \| "top-center" \| "bottom-right" \| "bottom-left" \| "bottom-center"` | `"bottom-right"` | Position du toast à l'écran. |
| showActionButton | boolean | `true` | Active le bouton d'action lorsque `actionButtonLabel` et `onActionButtonClick` sont fournis. |
| actionButtonLabel | string | — | Libellé du bouton d'action optionnel. |
| onActionButtonClick | `() => void` | — | Callback invoqué lors du clic sur le bouton d'action. |
| iconName | string | — | Nom de l'icône personnalisée. Lorsqu'il est défini avec `showLeftIcon`, remplace l'icône par défaut du type. |
| showLeftIcon | boolean | `true` | Affiche l'icône par défaut du type ou une icône personnalisée via `iconName`. |

### Méthodes du ToastService

| Method | Returns | Description |
|--------|---------|-------------|
| `addToQueue(config: ToastConfig)` | `string` | Crée un toast, l'ajoute à la file d'attente et retourne son identifiant. |
| `removeFromQueue(toastId: string)` | `void` | Retire un toast de la file d'attente et le ferme. |
| `isInQueue(toastId: string)` | `boolean` | Indique si un identifiant de toast est actuellement dans la file d'attente. |

## Usage

Le Toast n'est pas utilisé comme composant autonome dans les templates. Les consommateurs n'interagissent qu'avec `ToastService`.

Injectez le service dans votre composant, construisez un `ToastConfig`, puis appelez `addToQueue()`. Conservez l'identifiant retourné pour fermer le toast ultérieurement avec `removeFromQueue()`.

```typescript
import { Component, inject, signal } from "@angular/core";
import { ToastConfig, ToastService } from "@design-system-rte/angular";

@Component({
  selector: "app-example",
  template: `<button rteButton (click)="toggleToast()">Afficher le toast</button>`,
})
export class ExampleComponent {
  private toastService = inject(ToastService);
  private toastId = signal<string | null>(null);

  toggleToast(): void {
    if (this.toastId() && this.toastService.isInQueue(this.toastId()!)) {
      this.toastService.removeFromQueue(this.toastId()!);
      this.toastId.set(null);
      return;
    }

    const config: ToastConfig = {
      message: "Une mise à jour est disponible",
      type: "info",
      placement: "bottom-right",
      autoDismiss: false,
      closable: true,
      actionButtonLabel: "Mettre à jour",
      onActionButtonClick: () => {
        // traiter la mise à jour
      },
    };

    this.toastId.set(this.toastService.addToQueue(config));
  }
}
```

N'utilisez pas `<rte-toast>` directement dans les templates applicatifs — ce sélecteur est réservé à l'instance gérée par `ToastService`.

### Examples

#### Multiple

```typescript
this.toastService.addToQueue({
  message: "Erreur lors de la sauvegarde",
  type: "error",
  placement: "bottom-center",
  autoDismiss: true,
  duration: "medium",
  closable: true,
  showActionButton: false,
});

this.toastService.addToQueue({
  message: "Une mise à jour est disponible",
  type: "info",
  placement: "bottom-center",
  autoDismiss: true,
  duration: "medium",
  closable: true,
  actionButtonLabel: "Mettre à jour",
  onActionButtonClick: () => {
    // traiter la mise à jour
  },
});
```

Déclenchez plusieurs toasts pour illustrer le comportement de la file d'attente selon les types (`"info"`, `"success"`, `"warning"`, `"error"`, `"neutral"`). Seul le toast le plus prioritaire est affiché jusqu'à sa fermeture.

## Limitations

### Longueur du message

Le message du toast est limité à deux lignes de texte (`-webkit-line-clamp: 2`). Le contenu qui dépasse cette hauteur est tronqué. Préférez des libellés courts et concis. Les messages métier plus longs appartiennent à un autre pattern d'UI (par exemple une Banner).

Il n'existe pas de prop `size` (S / M / L). Les dimensions du toast sont fixées par le design.

### Un seul toast visible à la fois

Un seul toast est affiché à la fois. Les toasts supplémentaires sont mis en file d'attente et affichés par ordre de priorité (erreur avec bouton d'action en premier, puis erreur sans, avertissement, succès, info, neutre).

Lorsqu'un toast se ferme, le suivant dans la file apparaît automatiquement.

### Fermeture automatique et bouton d'action

La fermeture automatique est désactivée lorsqu'un bouton d'action est affiché (`actionButtonLabel` avec `showActionButton` activé). Les consommateurs doivent fermer le toast manuellement via le bouton de fermeture ou de manière programmatique.

### Pause du minuteur au survol

Lorsque la fermeture automatique est active, le survol du toast met le minuteur en pause. Le minuteur reprend lorsque le pointeur quitte le toast.

### Icône du type neutral

Le type `neutral` n'affiche pas d'icône par défaut associée au type. Fournissez `iconName` avec `showLeftIcon` pour afficher une icône personnalisée.

## FAQ

Q : Mon message de toast est tronqué — est-ce un bug ? (DSR-651)

R : Consultez la section Limitations / Longueur du message. Le toast limite intentionnellement le message à deux lignes. Raccourcissez le texte ou utilisez une Banner pour un contenu non bloquant plus long.

Q : Peut-on ajouter des variantes de taille (S / M / L) pour des messages plus longs ? (DSR-531)

R : Cette évolution a été refusée. Les messages de toast doivent rester courts. Il n'existe pas de prop `size`. Pour un contenu métier plus long, utilisez une Banner ou un autre pattern adapté.

Q : J'ai déclenché plusieurs toasts mais un seul apparaît

R : Consultez la section Limitations / Un seul toast visible à la fois. Les toasts sont mis en file d'attente et affichés un par un selon leur priorité.

Q : Mon toast ne se ferme pas automatiquement malgré `autoDismiss` à `true`

R : Consultez la section Limitations / Fermeture automatique et bouton d'action. La fermeture automatique est désactivée lorsqu'un bouton d'action est visible.

Q : Mon toast neutral n'a pas d'icône

R : Consultez la section Limitations / Icône du type neutral. Définissez `iconName` pour afficher une icône personnalisée sur le type `neutral`.

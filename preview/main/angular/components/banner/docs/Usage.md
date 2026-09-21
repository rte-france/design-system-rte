## Types

```html
<rte-banner title="Information" message="Votre demande a été prise en compte." type="info" />
<rte-banner title="Erreur" message="L’application est indisponible." type="error" />
<rte-banner title="Succès" message="Le fichier a été enregistré." type="success" />
<rte-banner title="Attention" message="Une action est requise." type="warning" />
```

## Compact

```html
<rte-banner
  title="La mise à jour est disponible !"
  [isCompact]="true"
  message="Consultez les nouveautés."
  actionLabel="Voir les détails"
/>
```

## Action

```html
<rte-banner
  title="Mise à jour disponible"
  message="Consultez les nouveautés."
  actionLabel="Voir les détails"
  (click)="showDetails()"
/>
```

## Position Overlay

```html
<rte-banner
  title="La mise à jour est disponible !"
  message="Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre."
  [closable]="true"
  position="overlay"
/>
```

Lorsque `position="overlay"`, l’implémentation l’implémentation ajoute automatiquement un bouton de fermeture à la bannière, quelle que soit la valeur fournie pour `closable`. Il appartient au consommateur de prévoir un callback `onClose` s’il doit réagir à la fermeture ou mettre à jour son état `isOpen`. La fermeture déclenche une animation de 200 ms avant le retrait du DOM.

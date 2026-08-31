## Types

```tsx
<Banner title="Information" message="Votre demande a été prise en compte." type="info" />
<Banner title="Erreur" message="L’application est indisponible." type="error" />
<Banner title="Succès" message="Le fichier a été enregistré." type="success" />
<Banner title="Attention" message="Une action est requise." type="warning" />
```

## Compact

```tsx
<Banner
  title="La mise à jour est disponible !"
  isCompact
  message="Consultez les nouveautés."
  actionLabel="Voir les détails"
  actionCallback={() => console.log("Action button clicked")}
/>
```

## Action

```tsx
<Banner
  title="Mise à jour disponible"
  message="Consultez les nouveautés."
  actionLabel="Voir les détails"
  actionCallback={() => console.log("Action button clicked")}
/>
```

## Position Overlay

```tsx
<Banner
  title="La mise à jour est disponible !"
  message="Une nouvelle mise à jour a été déployée sur l’environnement de production. Pour découvrir toutes les fonctionnalités et corrections d’anomalies, veuillez cliquer sur le bouton ci-contre.
"
  position="overlay"
/>
```

Lorsque `position="overlay"`, l’implémentation l’implémentation ajoute automatiquement un bouton de fermeture à la bannière, quelle que soit la valeur fournie pour `closable`. Il appartient au consommateur de prévoir un callback `onClose` s’il doit réagir à la fermeture ou mettre à jour son état `isOpen`. La fermeture déclenche une animation de 200 ms avant le retrait du DOM.

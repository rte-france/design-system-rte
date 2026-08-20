# Navigation React (liens et routage)

## Overview

```tsx
<NavigationProvider linkComponent={RouterLink}>
  <Link href="/dashboard" label="Dashboard" />
</NavigationProvider>
```

| Intention | Configuration |
|-----------|---------------|
| Naviguer dans la SPA (sans rechargement) | `href` + `NavigationProvider` (ou `customLinkComponent`) |
| Ouvrir une URL externe dans un nouvel onglet | `href` + `externalLink` |
| Aller à une ancre dans la page | `href="#section-id"` |
| Navigation navigateur complète (sans routeur) | `href="/path"` sans `NavigationProvider` |

**Règle générale :** enveloppez votre application dans `NavigationProvider` avec le composant Link de votre routeur pour le routing côté client. Utilisez `externalLink` sur `href` lorsque la destination quitte votre application.

Les composants navigables partagent ce contrat : `Link`, `NavItem`, `NavMenu`, `SideNav`, `Header` et `Breadcrumbs`.

## Usage

Les composants navigables React acceptent une prop `href` pour l'URL de destination. Par défaut, ils rendent un `<a>` natif, ce qui déclenche un rechargement complet — y compris pour les chemins internes.

### Configuration SPA unique

Enveloppez votre application avec `NavigationProvider` et passez le composant Link de votre routeur :

```tsx
<NavigationProvider linkComponent={RouterLink}>
  <Link href="/home" label="Home" />
  <Link href="/products/123" label="Product 123" />
  <Outlet />
</NavigationProvider>
```

Luciole transmet `href` à la fois comme `href` et `to` sur le composant sous-jacent, afin que les bibliothèques de routing fonctionnent sans câblage supplémentaire.

`NavigationProvider` s'applique à tous les composants navigables de sa sous-arborescence : `Link`, `NavItem`, `NavMenu`, `SideNav`, `Header` et `Breadcrumbs`.

### Surcharge par lien

Lorsqu'un seul lien nécessite un composant de routing différent :

```tsx
<Link href="/home" label="Home" customLinkComponent={RouterLink} />
```

### Liens externes

Utilisez `href` avec `externalLink` :

```tsx
<Link href="https://react.dev" label="React docs" externalLink />
```

### Sans NavigationProvider

Les liens fonctionnent toujours, mais les chemins internes se comportent comme des ancres classiques (rechargement complet).

## Limitations

### La bibliothèque de routing appartient au consommateur

Luciole n'a pas de dépendance à React Router ni à une autre bibliothèque de routing. Vous devez installer, configurer et injecter le composant Link de votre routeur via `NavigationProvider`.

### externalLink est indépendant de la configuration du routage

Les liens externes utilisent toujours un `<a>` natif avec `target="_blank"` et `rel="noopener noreferrer"`, quel que soit `NavigationProvider`. Définissez `externalLink` sur les liens `href` qui quittent votre application.

### Paramètres de requête et fragments

Incluez-les dans `href` (ex. `href="/settings?tab=general#privacy"`) ou passez les props supplémentaires supportées par votre composant Link de routeur via les props étendues du composant.

## FAQ

Q : Puis-je utiliser Luciole sans routeur ?

R : Oui. Sans configuration, les composants rendent des ancres natives. Cela convient aux sites statiques ou aux liens externes uniquement.

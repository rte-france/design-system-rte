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

**Règle générale :** enveloppez votre application dans `NavigationProvider` avec le composant Link de votre routeur pour le ruting côté client. Utilisez `externalLink` sur `href` lorsque la destination quitte votre application.

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

Luciole transmet `href` à la fois comme `href` et `to` sur le composant sous-jacent, afin que les bibliothèques de ruting fonctionnent sans câblage supplémentaire.

`NavigationProvider` s'applique à tous les composants navigables de sa sous-arborescence : `Link`, `NavItem`, `NavMenu`, `SideNav`, `Header` et `Breadcrumbs`.

### Surcharge par lien

Lorsqu'un seul lien nécessite un composant de ruting différent :

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

### Comportement par défaut : rechargement complet

Sans `NavigationProvider` ou `customLinkComponent`, un chemin interne comme `href="/dashboard"` recharge la page. Ce comportement est intentionnel pour la rétrocompatibilité.

### La bibliothèque de ruting appartient au consommateur

Luciole n'a pas de dépendance à React Router ni à une autre bibliothèque de ruting. Vous devez installer, configurer et injecter le composant Link de votre routeur via `NavigationProvider`.

### La portée de NavigationProvider est la sous-arborescence React

Seuls les composants rendus à l'intérieur du provider héritent du composant Link du routeur. Placez le provider suffisamment haut dans l'arbre — typiquement à la racine de l'application — pour couvrir tous les composants navigables du DS.

### externalLink est indépendant de la configuration du routage

Les liens externes utilisent toujours un `<a>` natif avec `target="_blank"` et `rel="noopener noreferrer"`, quel que soit `NavigationProvider`. Définissez `externalLink` sur les liens `href` qui quittent votre application.

### Paramètres de requête et fragments

Incluez-les dans `href` (ex. `href="/settings?tab=general#privacy"`) ou passez les props supplémentaires supportées par votre composant Link de routeur via les props étendues du composant.

## FAQ

Q : J'ai défini `href="/dashboard"` mais la page se recharge. Pourquoi ?

R : Par défaut, les composants navigables rendent un `<a>` natif. Enveloppez votre application dans `NavigationProvider` avec le composant Link de votre routeur pour une navigation côté client.

Q : Dois-je configurer `NavigationProvider` sur chaque page ?

R : Non. Configurez-le une seule fois à la racine de l'application. Tous les composants navigables de Luciole à l'intérieur du provider utilisent automatiquement le composant Link injecté.

Q : Quand utiliser `customLinkComponent` plutôt que `NavigationProvider` ?

R : Utilisez `NavigationProvider` pour le cas courant — un routeur pour toute l'application. Utilisez `customLinkComponent` sur un lien unique lorsqu'il nécessite un composant de routage différent du reste de l'arbre.

Q : SideNav, Header et Breadcrumbs nécessitent-ils une configuration séparée ?

R : Non. Ils lisent le composant Link depuis le contexte de `NavigationProvider`, comme `Link`. Un seul provider couvre l'ensemble.

Q : Puis-je utiliser Luciole sans routeur ?

R : Oui. Sans configuration, les composants rendent des ancres natives. Cela convient aux sites statiques ou aux liens externes uniquement.

Q : Comment fonctionnent les liens externes avec `NavigationProvider` ?

R : Définissez `externalLink` sur le composant. L'icône de lien externe, le nouvel onglet et les attributs `rel` sont appliqués indépendamment du provider.

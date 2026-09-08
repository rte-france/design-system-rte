# Link

## Overview

```tsx
<Link label="Link" href="#" />
```

## API

Le composant `Link` constitue l'API publique. Les consommateurs passent les cibles de navigation et les props de style ; le composant affiche une ancre native ou un lien routeur personnalisé.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| label | string | — (requis) | Texte visible du lien. Utilisé également comme `aria-label`. |
| subtle | boolean | `false` | Affiche le lien avec un style discret (sans soulignement par défaut). |
| externalLink | boolean | `false` | Ouvre le lien dans un nouvel onglet avec `rel="noopener noreferrer"` et affiche l'icône external-link. |
| reverse | boolean | — | Affiche le lien avec des couleurs inversées pour les fonds sombres. |
| customLinkComponent | `ElementType` | — | Type d'élément personnalisé pour le routage SPA (par exemple `Link` de React Router). Remplace le composant fourni par `NavigationProvider`. |
| to | string | — | Transmis au composant de lien rendu en plus de `href`. Utile lorsque le lien routeur attend une prop `to`. |

Les attributs d'ancre natifs tels que `href` et `className` peuvent être transmis à l'élément sous-jacent mais ne font pas partie de l'API du design system.

## Usage

Importez et affichez `Link` pour la navigation textuelle. Passez `href` pour les ancres standard. Pour le routage SPA, enveloppez l'application (ou un sous-arbre) dans `NavigationProvider` avec un composant de lien routeur, ou passez `customLinkComponent` sur des liens individuels.

```tsx
<Link label="Link" href="#" />
```

#### Subtle

```tsx
<Link label="Subtle Link" href="#" subtle />
<Link label="Subtle Link" href="#" subtle externalLink />
```

Affiche des liens discrets avec et sans style de lien externe.

#### Not Subtle

```tsx
<Link label="External Link" href="#" />
<Link label="External Link" href="#" externalLink />
```

Style de lien par défaut avec et sans icône external-link.

#### Reverse

```tsx
<div style={{ display: "flex", gap: 8, backgroundColor: "black", padding: 16 }}>
  <Link label="External Link" href="#" reverse subtle />
  <Link label="External Link" href="#" reverse subtle externalLink />
</div>
```

Utilisez `reverse` sur les fonds sombres pour des couleurs de lien inversées.

#### With Custom Router

```tsx
<BrowserRouter>
  <NavigationProvider linkComponent={RouterLink}>
    <Link customLinkComponent={RouterLink} href="/home" label="SPA Link via customLinkComponent" />
    <Link href="/dashboard" label="SPA Link via NavigationProvider" />
  </NavigationProvider>
</BrowserRouter>
```

Configurez la navigation SPA globalement avec `NavigationProvider`, ou remplacez par lien avec `customLinkComponent`.

## Limitations

### Les libellés longs sont tronqués

Les libellés utilisent `text-overflow: ellipsis` et `white-space: nowrap`. Le texte qui dépasse la largeur disponible est tronqué. Placez le lien dans un conteneur plus large ou utilisez un libellé plus court lorsque le texte complet doit rester visible.

### Le routage SPA nécessite un composant de lien routeur

Par défaut, `Link` affiche un élément `<a>` natif. Le routage côté client nécessite `NavigationProvider` avec un composant de lien routeur (par exemple `Link` de React Router) ou `customLinkComponent` sur le lien lui-même.

### `href` est transmis à la fois à `href` et à `to`

Le composant transmet la valeur `href` à la fois à `href` et à `to` sur l'élément rendu. Vérifiez que le composant de lien choisi accepte la prop attendue par votre bibliothèque de routage.

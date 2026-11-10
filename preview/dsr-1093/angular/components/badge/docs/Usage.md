### Badge indépendant

Utilisez directement le composant `rte-badge` lorsque le badge est utilisé seul avec l'input `simpleBadge=true`.

```html
<rte-badge badgeType="brand" badgeSize="m" badgeContent="number" [count]="1" [simpleBadge]="true"></rte-badge>
```

### Badge en superposition

Pour afficher le badge sur un élément existant, utilisez la directive `rteBadge` directement sur l'élément hôte. La directive conserve le contenu de l'hôte et y ajoute le badge.

```html
<span rteBadge rteBadgeType="brand" rteBadgeSize="m" rteBadgeContent="number" [rteBadgeCount]="1">
  Élément avec Badge
</span>
```

### Tailles

La story `Sizes` présente les quatre tailles disponibles avec un contenu vide :

```html
<span rteBadge rteBadgeContent="empty" rteBadgeSize="xs" [rteBadgeCount]="1" class="rte-badge-holder"></span>
<span rteBadge rteBadgeContent="empty" rteBadgeSize="s" [rteBadgeCount]="1" class="rte-badge-holder"></span>
<span rteBadge rteBadgeContent="empty" rteBadgeSize="m" [rteBadgeCount]="1" class="rte-badge-holder"></span>
<span rteBadge rteBadgeContent="empty" rteBadgeSize="l" [rteBadgeCount]="1" class="rte-badge-holder"></span>
```

### Variantes de type

```html
<span rteBadge rteBadgeType="brand" [rteBadgeCount]="1" class="rte-badge-holder"></span>
<span rteBadge rteBadgeType="neutral" [rteBadgeCount]="1" class="rte-badge-holder"></span>
<span rteBadge rteBadgeType="indicator" [rteBadgeCount]="1" class="rte-badge-holder"></span>
```

### Variantes de contenu

```html
<div>
  <span rteBadge rteBadgeContent="number" [rteBadgeCount]="1" rteSize="xs" class="rte-badge-holder"></span>
  <span rteBadge rteBadgeContent="number" [rteBadgeCount]="1" rteSize="s" class="rte-badge-holder"></span>
  <span rteBadge rteBadgeContent="number" [rteBadgeCount]="1" rteSize="m" class="rte-badge-holder"></span>
  <span rteBadge rteBadgeContent="number" [rteBadgeCount]="1" rteSize="l" class="rte-badge-holder"></span>
</div>
<div>
  <span rteBadge rteBadgeContent="icon" rteBadgeIcon="notification" rteSize="xs" class="rte-badge-holder"></span>
  <span rteBadge rteBadgeContent="icon" rteBadgeIcon="notification" rteSize="s" class="rte-badge-holder"></span>
  <span rteBadge rteBadgeContent="icon" rteBadgeIcon="notification" rteSize="m" class="rte-badge-holder"></span>
  <span rteBadge rteBadgeContent="icon" rteBadgeIcon="notification" rteSize="l" class="rte-badge-holder"></span>
</div>
<div>
  <span rteBadge rteBadgeContent="empty" class="rte-badge-holder" rteSize="xs"></span>
  <span rteBadge rteBadgeContent="empty" class="rte-badge-holder" rteSize="s"></span>
  <span rteBadge rteBadgeContent="empty" class="rte-badge-holder" rteSize="m"></span>
  <span rteBadge rteBadgeContent="empty" class="rte-badge-holder" rteSize="l"></span>
</div>
```

### Signe plus

Le signe + peut être affiché avant le nombre avec `rteBadgeWithPlusSign`.

```html
<span rteBadge rteBadgeContent="number" [rteBadgeCount]="5" rteBadgeWithPlusSign class="rte-badge-holder"></span>
```

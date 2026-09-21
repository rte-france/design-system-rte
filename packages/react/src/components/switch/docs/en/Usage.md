### Utilisation de base

```tsx
import { useState } from "react";
import { Switch } from "@design-system-rte/react";

const Preferences = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch
      label="Label"
      checked={isEnabled}
      onChange={(event) => setIsEnabled(event.target.checked)}
    />
  );
};
```

### Variantes

#### Apparence

Les apparences disponibles sont `brand` et `neutral`.

```tsx
<Switch label="Brand" appearance="brand" />
<Switch label="Neutral" appearance="neutral" />
```

#### Label et icône

Le label est affiché lorsqu'il est fourni et l'icône est affichée par défaut. Utilisez `showIcon` pour masquer l'icône.

```tsx
<Switch label="Avec label et icône" />
<Switch label="Sans icône" showIcon={false} />
```

Un nom accessible est obligatoire. Vous pouvez fournir un `label`, `aria-label` ou `aria-labelledby`.

```tsx
<Switch aria-label="Activer l'option" />
<Switch aria-labelledby="option-label" />
```

#### États désactivé et en lecture seule

```tsx
<Switch label="Disabled Switch" disabled />
<Switch label="Read-Only Switch" readOnly />
```

#### État contrôlé

Utilisez `checked` avec `onChange` lorsque l'état est géré par le composant parent.

```tsx
<Switch
  label="Controlled Switch"
  checked={isEnabled}
  onChange={(event) => setIsEnabled(event.target.checked)}
/>
```

#### État non contrôlé

Utilisez `defaultChecked` pour définir l'état initial sans contrôler les changements suivants.

```tsx
<Switch label="Uncontrolled Switch" defaultChecked />
```

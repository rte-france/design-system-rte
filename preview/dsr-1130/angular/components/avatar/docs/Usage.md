### Image

```html
<rte-avatar [imgSrc]="userImage" layout="image" alt="Avatar de Jane Doe"></rte-avatar>
```

### Icône

L'icône est automatiquement choisie en fonction du type d'avatar.

```html
<rte-avatar layout="icon" type="user"></rte-avatar> <rte-avatar layout="icon" type="entity"></rte-avatar>
```

### Initiales

```html
<rte-avatar layout="initials" initials="MB"></rte-avatar>
```

### Taille

```html
<rte-avatar [size]="120" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="96" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="72" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="64" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="56" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="48" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="40" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="36" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="32" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="28" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="24" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
```

### Taille

```html
<rte-avatar [size]="120" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="96" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="72" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="64" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="56" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="48" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="40" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="36" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="32" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="28" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
<rte-avatar [size]="24" [imgSrc]="imgSrc" [layout]="'image'" [colorType]="colorType" />
```

### Type

#### Entity

```html
<rte-avatar [size]="64" type="entity" [imgSrc]="logo" />
```

#### User

```html
<rte-avatar [size]="64" type="user" layout="initials" initials="MB" />
```

### Type de couleur

#### Neutre

```html
<rte-avatar [size]="64" type="user" layout="initials" initials="MB" colorType="neutral" />
```

#### Brand

```html
<rte-avatar [size]="64" type="user" layout="initials" initials="MB" colorType="brand" />
```

#### Décoratif

````html
### Statut ```html
<rte-avatar layout="image" [imgSrc]="userImage" status="available"></rte-avatar>
<rte-avatar layout="icon" status="busy"></rte-avatar>
<rte-avatar layout="initials" initials="MB" status="away"></rte-avatar>
<rte-avatar layout="image" [imgSrc]="companyLogo" type="entity" status="offline"></rte-avatar>
<rte-avatar layout="icon" type="entity" status="unknown"></rte-avatar>
````

#### Statut

```html
<rte-avatar [size]="64" layout="image" [imgSrc]="userImage" status="available"></rte-avatar>
<rte-avatar [size]="64" layout="icon" status="busy"></rte-avatar>
<rte-avatar [size]="64" layout="initials" initials="MB" status="away"></rte-avatar>
<rte-avatar [size]="64" layout="image" [imgSrc]="companyLogo" type="entity" status="offline"></rte-avatar>
<rte-avatar [size]="64" layout="icon" type="entity" status="unknown"></rte-avatar>
```

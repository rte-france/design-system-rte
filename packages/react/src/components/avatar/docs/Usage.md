### Image

```tsx
<Avatar layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
```

### Icône

L'icône est automatiquement choisie en fonction du type d'avatar.

```tsx
<Avatar layout="icon" type="user" />
<Avatar layout="icon" type="entity" />
```

### Initiales

```tsx
<Avatar layout="initials" initials="MB" />
```

Les initiales contiennent un ou deux caractères maximum. Les layouts `image`, `icon` et `initials` sont illustrés dans les stories `UserNeutral`, `UserBrand`, `UserDecorative`, `EntityNeutral`, `EntityBrand` et `EntityDecorative`.

### Taille

```tsx
<Avatar size={120} layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
<Avatar size={96} layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
<Avatar size={72} layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
<Avatar size={64} layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
<Avatar size={56} layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
<Avatar size={48} layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
<Avatar size={40} layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
<Avatar size={36} layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
<Avatar size={32} layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
<Avatar size={28} layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
<Avatar size={24} layout="image" imgSrc={userImage} alt="Avatar de Jane Doe" />
```

Les tailles disponibles vont de 24 à 120 pixels. Elles sont présentées dans la story `Sizes`.

### Type

#### Entity

```tsx
<Avatar size={64} type="entity" layout="image" imgSrc={companyLogo} alt="Logo de l'entreprise" />
```

#### User

```tsx
<Avatar size={64} type="user" layout="initials" initials="MB" />
```

Les stories `Entity` et `User` illustrent ces deux types.

### Type de couleur

#### Neutre

```tsx
<Avatar layout="icon" colorType="neutral" />
```

#### Brand

```tsx
<Avatar layout="icon" colorType="brand" />
```

#### Décoratif

```tsx
<Avatar layout="icon" colorType="decorative" decorativeColor="violet" />
```

Les stories `Neutral`, `Brand`, `Decorative`, ainsi que les stories combinant type et couleur, illustrent ces variantes.

### Statut

```tsx
<Avatar size={64} layout="image" imgSrc={userImage} status="available" />
<Avatar size={64} layout="icon" status="busy" />
<Avatar size={64} layout="initials" initials="MB" status="away" />
<Avatar size={64} layout="image" imgSrc={companyLogo} type="entity" status="offline" />
<Avatar size={64} layout="icon" type="entity" status="unknown" />
```

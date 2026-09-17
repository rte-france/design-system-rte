### Utilisation de base

```tsx
<Select
  id="select1"
  label="Choisir une option"
  value="option-2"
  options={[
    { value: "option-1", label: "Option 1" },
    { value: "option-2", label: "Option 2" },
    { value: "option-3", label: "Option 3" },
  ]}
  placeholder="Select an option"
  onChange={(value) => console.log(value)}
/>
```

### Variantes

#### États

```tsx
<Select {...props} isError />
<Select {...props} readonly />
<Select {...props} disabled />
```

#### Espacement compact

```tsx
<Select {...props} compactSpacing />
```

#### Sélection visible

```tsx
<Select {...props} variant="visibly-selected" />
```

#### Sélection multiple

```tsx
<Select
  {...props}
  multiple
  value={["option-1", "option-2"]}
  withSelectAll
  optionToDisplay="first-selected"
  onChange={(values) => console.log(values)}
/>
```

#### Corps personnalisé

```tsx
<Select
  {...props}
  body={
    <>
      <div>This is a custom body for the select component.</div>
      <button onClick={() => handleOnChange(options[0].value)}>Select Option 1</button>
      <button onClick={() => handleOnChange(options[1].value)}>Select Option 2</button>
      <button onClick={() => handleOnChange(options[2].value)}>Select Option 3</button>
      <button onClick={() => handleOnChange(options[3].value)}>Select Option 4</button>
    </>
  }
/>
```

#### Valeur initiale non contrôlée

```tsx
<Select {...props} defaultValue="option-3" onChange={(value) => console.log(value)} />
```

#### Label sur le côté

```tsx
<Select {...props} labelPosition="side" />
```

#### Réinitialisation

```tsx
<Select {...props} value="option-2" showResetButton onClear={() => console.log("Selection cleared")} />
```

#### En-tête et pied de liste

```tsx
<Select {...props} header={<div>Filtres</div>} footer={<button type="button">Confirmer</button>} />
```

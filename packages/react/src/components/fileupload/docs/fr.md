# File Upload

## Overview

```tsx
<FileUpload
  id="file-upload-1"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  required
  assistiveTextLabel="Formats acceptés : .jpg, .png, .pdf"
  showAssistiveIcon
  onChange={(files) => setFiles(files)}
  onRemovingFile={(file) => handleRemove(file)}
/>
```

## API

Le composant `FileUpload` constitue l'API publique. Les consommateurs le configurent via des props et gèrent la sélection de fichiers via des callbacks.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| id | string | — (requis) | Identifiant unique de l'input fichier masqué. |
| label | string | — (requis) | Libellé du champ de téléversement. |
| buttonLabel | string | — (requis) | Libellé affiché sur le bouton de téléversement. |
| showLabel | boolean | `true` | Affiche ou masque le libellé visible. Si `false`, le libellé est appliqué comme `aria-label` sur l'input fichier. |
| compactSpacing | boolean | — | Utilise un espacement compact pour le bouton et les éléments de la liste de fichiers. |
| multiple | boolean | `false` | Autorise la sélection de plusieurs fichiers dans le sélecteur natif. |
| accept | string | — | Liste de types de fichiers acceptés, séparés par des virgules (attribut natif `accept`). |
| required | boolean | — | Marque le champ comme requis et affiche l'indicateur requis le cas échéant. |
| showLabelRequirement | boolean | — | Affiche l'indicateur requis même lorsque `required` est falsy. |
| disabled | boolean | `false` | Désactive l'input fichier et le bouton de téléversement. |
| assistiveTextLabel | string | — | Texte d'aide affiché sous le libellé. |
| assistiveAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Apparence du texte d'aide lorsqu'aucune erreur au niveau du champ n'est active. |
| showAssistiveText | boolean | `true` | Affiche le texte d'aide lorsque `assistiveTextLabel` est défini et qu'aucune erreur par fichier n'est présente. |
| showAssistiveIcon | boolean | — | Affiche une icône à côté du texte d'aide. |
| assistiveTextLink | string | — | URL optionnelle pour le texte d'aide avec apparence lien. |
| isError | boolean | — | Bascule le texte d'aide en apparence erreur. |
| errorFilesMap | string[] | `[]` | Messages d'erreur par fichier, alignés par index avec les fichiers sélectionnés. |
| onChange | `(files: File[]) => void` | — | Appelé lorsque la liste de fichiers sélectionnés change ou qu'un fichier est retiré. |
| onUpload | `(file: File) => Promise<void>` | — | Gestionnaire de téléversement asynchrone optionnel. Affiche un état de chargement sur chaque fichier tant que la promesse est en cours. |
| onRemovingFile | `(file: File) => void` | — | Appelé lorsqu'un fichier est retiré de la liste. |

## Usage

Importez `FileUpload` et gérez les fichiers sélectionnés dans l'état parent via `onChange`. La validation, les limites de taille et la logique de téléversement relèvent des consommateurs.

Passez les erreurs par fichier via `errorFilesMap` et les erreurs au niveau du champ via `isError` et `assistiveTextLabel`.

```tsx
const [files, setFiles] = useState<File[]>([]);
const [errorFilesMap, setErrorFilesMap] = useState<string[]>([]);

const handleChange = (newFiles: File[]) => {
  setFiles(newFiles);
  // Valider les fichiers et mettre à jour errorFilesMap / isError
};

const handleRemovingFile = (file: File) => {
  setFiles((prev) => prev.filter((currentFile) => currentFile !== file));
  // Resynchroniser errorFilesMap après suppression
};

return (
  <FileUpload
    id="documents-upload"
    label="Uploader vos documents"
    buttonLabel="Sélectionner un fichier"
    required
    assistiveTextLabel="Formats acceptés : .jpg, .png, .pdf"
    showAssistiveIcon
    errorFilesMap={errorFilesMap}
    onChange={handleChange}
    onRemovingFile={handleRemovingFile}
  />
);
```

#### Disabled

```tsx
<FileUpload
  id="file-upload-disabled"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  disabled
/>
```

Désactive l'input fichier masqué et le bouton de téléversement.

#### Multiple Files

```tsx
<FileUpload
  id="file-upload-multiple"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  multiple
  onChange={(files) => setFiles(files)}
/>
```

Autorise la sélection de plusieurs fichiers dans le sélecteur natif.

#### With Error

```tsx
<FileUpload
  id="file-upload-error"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  assistiveTextLabel="Veuillez sélectionner un fichier avant de soumettre."
  isError
  showAssistiveText={files.length === 0}
  onChange={(newFiles) => setFiles(newFiles)}
/>
```

Affiche le texte d'aide au niveau du champ en apparence erreur lorsqu'aucun fichier n'est sélectionné.

#### Without Label

```tsx
<FileUpload
  id="file-upload-no-label"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  showLabel={false}
/>
```

Masque le libellé visible et expose le texte du libellé aux technologies d'assistance via `aria-label`.

#### Compact Spacing

```tsx
<FileUpload
  id="file-upload-compact"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  compactSpacing
/>
```

Réduit l'espacement du bouton de téléversement et des éléments de la liste de fichiers.

#### Max Size Exceeded

```tsx
const [errorFilesMap, setErrorFilesMap] = useState<string[]>([]);
const [error, setError] = useState<string>();

const handleChange = (files: File[]) => {
  if (files.some((file) => file.size > 1024)) {
    setError("Un ou plusieurs fichiers dépassent la limite de 1 Ko.");
    setErrorFilesMap(
      files.map((file) => (file.size > 1024 ? "Ce fichier dépasse la limite de 1 Ko." : "")),
    );
  }
};

return (
  <FileUpload
    id="file-upload-max-size"
    label="Uploader vos documents"
    buttonLabel="Sélectionner un fichier"
    isError={!!error}
    assistiveTextLabel={error}
    errorFilesMap={errorFilesMap}
    onChange={handleChange}
    onRemovingFile={handleRemove}
  />
);
```

Affiche une erreur au niveau du champ et des messages par fichier lorsque la validation échoue. Les consommateurs construisent et maintiennent `errorFilesMap` à partir de leurs règles de validation.

#### Async

```tsx
const uploadFile = (file: File): Promise<void> => {
  return uploadToServer(file);
};

return (
  <FileUpload
    id="file-upload-async"
    label="Uploader vos documents"
    buttonLabel="Sélectionner un fichier"
    multiple
    onUpload={uploadFile}
    onChange={(files) => setFiles(files)}
    onRemovingFile={handleRemove}
  />
);
```

Exécute un téléversement asynchrone par fichier sélectionné et affiche un indicateur de chargement sur chaque élément jusqu'à la résolution de la promesse.

## Limitations

### Pas de validation intégrée

Le composant ne valide ni le type, ni la taille, ni le nombre de fichiers. Les consommateurs doivent valider les fichiers sélectionnés et piloter `isError`, `assistiveTextLabel` et `errorFilesMap` à partir de leurs propres règles.

### Correspondance des erreurs par index

Les entrées de `errorFilesMap` sont associées aux fichiers sélectionnés par index de tableau. Lorsqu'un fichier est retiré, recalculez la carte pour que les entrées restantes restent alignées avec la liste mise à jour.

### Texte d'aide masqué en cas d'erreurs par fichier

Le texte d'aide n'est pas affiché tant que `errorFilesMap` contient au moins une entrée, même si `assistiveTextLabel` est défini. Utilisez les messages d'erreur par fichier dans `errorFilesMap` ou videz la carte pour réafficher le texte d'aide au niveau du champ.

### La sélection remplace la liste courante

Chaque interaction avec le sélecteur de fichiers remplace la liste complète des fichiers sélectionnés. Le composant n'ajoute pas les nouveaux fichiers à une sélection existante.

### Noms de fichiers longs

Les noms de fichiers dans la liste sont tronqués lorsque l'espace est limité. Un tooltip affiche le nom complet en cas de troncature. La largeur de la liste de fichiers suit celle du bouton de téléversement.

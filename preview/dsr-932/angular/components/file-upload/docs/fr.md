# File Upload

## Overview

```html
<rte-file-upload
  id="file-upload-1"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  [required]="true"
  assistiveTextLabel="Formats acceptés : .jpg, .png, .pdf"
  [showAssistiveIcon]="true"
  (filesChange)="onFilesChange($event)"
  (fileRemoved)="onFileRemoved($event)"
/>
```

## API

Le composant `FileUploadComponent` (`rte-file-upload`) constitue l'API publique. Les consommateurs le configurent via des inputs et réagissent à la sélection de fichiers via des outputs.

| Nom | Type | Valeur par défaut | Description |
|-----|------|-------------------|-------------|
| id | string | — (requis) | Identifiant unique de l'input fichier masqué. |
| label | string | — (requis) | Libellé du champ de téléversement. |
| buttonLabel | string | — (requis) | Libellé affiché sur le bouton de téléversement. |
| showLabel | boolean | `true` | Affiche ou masque le libellé visible. Si `false`, le libellé est appliqué comme `aria-label` sur l'input fichier. |
| compactSpacing | boolean | `false` | Utilise un espacement compact pour le bouton et les éléments de la liste de fichiers. |
| multiple | boolean | `false` | Autorise la sélection de plusieurs fichiers dans le sélecteur natif. |
| accept | string | — | Liste de types de fichiers acceptés, séparés par des virgules (attribut natif `accept`). |
| required | boolean | `false` | Marque le champ comme requis et affiche l'indicateur requis le cas échéant. |
| showLabelRequirement | boolean | `false` | Affiche l'indicateur requis même lorsque `required` est `false`. |
| disabled | boolean | `false` | Désactive l'input fichier et le bouton de téléversement. |
| assistiveTextLabel | string | — | Texte d'aide affiché sous le libellé. |
| assistiveAppearance | `"description" \| "error" \| "success" \| "link"` | `"description"` | Apparence du texte d'aide lorsqu'aucune erreur au niveau du champ n'est active. |
| showAssistiveText | boolean | `true` | Affiche le texte d'aide lorsque `assistiveTextLabel` est défini et qu'aucune erreur par fichier n'est présente. |
| showAssistiveIcon | boolean | `false` | Affiche une icône à côté du texte d'aide. |
| assistiveTextLink | string | — | URL optionnelle pour le texte d'aide avec apparence lien. |
| isError | boolean | `false` | Bascule le texte d'aide en apparence erreur. |
| errorFilesMap | string[] | `[]` | Messages d'erreur par fichier, alignés par index avec les fichiers sélectionnés. |
| onUploadFile | `(file: File) => Promise<void>` | — | Gestionnaire de téléversement asynchrone optionnel. Affiche un état de chargement sur chaque fichier tant que la promesse est en cours. |
| filesChange | output | — | Émet la liste courante des fichiers sélectionnés lorsque la sélection change ou qu'un fichier est retiré. |
| fileRemoved | output | — | Émet le fichier retiré de la liste. |

## Usage

Utilisez `rte-file-upload` dans les templates et gérez la sélection de fichiers via `(filesChange)` et `(fileRemoved)`. N'utilisez pas le sélecteur interne `rte-file-item` dans les templates applicatifs.

La validation, les limites de taille et la logique de téléversement relèvent des consommateurs. Passez les erreurs par fichier via `errorFilesMap` et les erreurs au niveau du champ via `isError` et `assistiveTextLabel`.

```typescript
@Component({
  template: `
    <rte-file-upload
      id="documents-upload"
      label="Uploader vos documents"
      buttonLabel="Sélectionner un fichier"
      [required]="true"
      assistiveTextLabel="Formats acceptés : .jpg, .png, .pdf"
      [showAssistiveIcon]="true"
      [errorFilesMap]="errorFilesMap"
      [isError]="hasError"
      (filesChange)="onFilesChange($event)"
      (fileRemoved)="onFileRemoved($event)"
    />
  `,
})
export class MyFormComponent {
  errorFilesMap: string[] = [];
  hasError = false;

  onFilesChange(files: File[]): void {
    // Valider les fichiers et mettre à jour errorFilesMap / hasError
  }

  onFileRemoved(file: File): void {
    // Resynchroniser errorFilesMap après suppression
  }
}
```

#### Disabled

```html
<rte-file-upload
  id="file-upload-disabled"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  [disabled]="true"
/>
```

Désactive l'input fichier masqué et le bouton de téléversement.

#### Multiple Files

```html
<rte-file-upload
  id="file-upload-multiple"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  [multiple]="true"
  (filesChange)="onFilesChange($event)"
/>
```

Autorise la sélection de plusieurs fichiers dans le sélecteur natif.

#### With Error

```html
<rte-file-upload
  id="file-upload-error"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  assistiveTextLabel="Veuillez sélectionner un fichier avant de soumettre."
  [isError]="true"
/>
```

Affiche le texte d'aide au niveau du champ en apparence erreur.

#### Without Label

```html
<rte-file-upload
  id="file-upload-no-label"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  [showLabel]="false"
/>
```

Masque le libellé visible et expose le texte du libellé aux technologies d'assistance via `aria-label`.

#### Compact Spacing

```html
<rte-file-upload
  id="file-upload-compact"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  [compactSpacing]="true"
/>
```

Réduit l'espacement du bouton de téléversement et des éléments de la liste de fichiers.

#### Max Size Exceeded

```html
<rte-file-upload
  id="file-upload-max-size"
  label="Uploader vos documents"
  buttonLabel="Sélectionner un fichier"
  assistiveTextLabel="Un ou plusieurs fichiers dépassent la limite de 1 Ko."
  [isError]="true"
  [errorFilesMap]="['Ce fichier dépasse la limite de 1 Ko.']"
  (filesChange)="onFilesChange($event)"
  (fileRemoved)="onFileRemoved($event)"
/>
```

Affiche une erreur au niveau du champ et des messages par fichier lorsque la validation échoue. Les consommateurs construisent et maintiennent `errorFilesMap` à partir de leurs règles de validation.

#### Async

```typescript
@Component({
  template: `
    <rte-file-upload
      id="file-upload-async"
      label="Uploader vos documents"
      buttonLabel="Sélectionner un fichier"
      [multiple]="true"
      [onUploadFile]="onUploadFile"
      (filesChange)="onFilesChange($event)"
    />
  `,
})
export class AsyncUploadComponent {
  onUploadFile = (file: File): Promise<void> => {
    return uploadToServer(file);
  };

  onFilesChange(files: File[]): void {
    // Gérer la liste de fichiers mise à jour
  }
}
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

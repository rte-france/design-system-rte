### Utilisation de base

```ts
import { signal } from "@angular/core";
import { TimePickerComponent } from "@design-system-rte/angular";

time = signal({ hh: "", mm: "", ss: "" });
```

```html
<rte-time-picker
  id="time-picker"
  label="Label"
  labelId="time-picker-label"
  [value]="time()"
  (valueChange)="time.set($event)"
  [required]="true"
  [showLabelRequirement]="true"
  assistiveTextLabel="Assistive text"
/>
```

### Variantes d'état

```html
<rte-time-picker id="disabled-time-picker" label="Label" [disabled]="true" />
<rte-time-picker
  id="read-only-time-picker"
  label="Label"
  [readOnly]="true"
  [value]="{ hh: '12', mm: '30', ss: '45' }"
/>
<rte-time-picker
  id="error-time-picker"
  label="Label"
  [isError]="true"
  assistiveTextLabel="Error message"
  assistiveAppearance="error"
/>
```

### Segments non modifiables

```html
<rte-time-picker id="hour-read-only" label="Label" [isHourReadOnly]="true" [value]="{ hh: '12', mm: '10', ss: '15' }" />
<rte-time-picker
  id="minute-read-only"
  label="Label"
  [isMinuteReadOnly]="true"
  [value]="{ hh: '12', mm: '30', ss: '15' }"
/>
<rte-time-picker
  id="second-read-only"
  label="Label"
  [isSecondReadOnly]="true"
  [value]="{ hh: '12', mm: '30', ss: '45' }"
/>
```

### Incrément

```html
<rte-time-picker id="increment-time-picker" label="Label" [minuteIncrement]="15" />
```

Les flèches haut et bas incrémentent le segment actif selon le pas configuré.

### Formulaires Angular

Comme le composant implémente `ControlValueAccessor`, il peut être relié à un `FormControl` ou utilisé avec `[(ngModel)]`.

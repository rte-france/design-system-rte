```html
<rte-daterangepicker
  id="date-range-picker"
  labelText="Période"
  [(ngModel)]="range"
  [hasActions]="true"
  [hasAssistiveText]="true"
  assistiveTextLabel="Assistive text"
  [showAssistiveIcon]="true"
/>
```

```typescript
import { DaterangepickerComponent } from "@design-system-rte/angular";
import { FormsModule } from "@angular/forms";

range: [Date | null, Date | null] = [
  new Date(2026, 4, 1),
  new Date(2026, 4, 10),
];
```

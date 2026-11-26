```ts
import { Component } from "@angular/core";
import { DynamicTabComponent } from "@design-system-rte/angular";
import { DynamicTabItemOption } from "@design-system-rte/core";

@Component({
  selector: "app-example",
  imports: [DynamicTabComponent],
  template: `
    <rte-dynamic-tab
      [options]="tabs"
      [selectedTabId]="selectedTabId"
      (changeActiveTab)="selectedTabId = $event"
      (updateTabs)="tabs = $event"
    />
  `,
})
export class ExampleComponent {
  tabs: DynamicTabItemOption[] = [
    { id: "tab1", title: "Tab 1" },
    { id: "tab2", title: "Tab 2" },
  ];
  selectedTabId = "tab1";
}
```

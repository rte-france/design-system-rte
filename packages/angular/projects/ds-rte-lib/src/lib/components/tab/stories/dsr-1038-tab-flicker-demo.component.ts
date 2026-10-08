import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from "@angular/core";

import { TabComponent } from "../tab.component";
import { FicheEntiteTabsIds, ficheEntiteTabOptions } from "./dsr-1038-tab.fixture";

@Component({
  selector: "story-dsr-1038-tab-flicker",
  imports: [TabComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./dsr-1038-tab-flicker-demo.component.html",
  styleUrl: "./dsr-1038-tab-flicker-demo.component.scss",
})
export class Dsr1038TabFlickerDemoComponent {
  protected readonly containerWidth = signal(800);

  protected readonly selectedTabId = signal<string>(FicheEntiteTabsIds.PUISSANCES);

  protected readonly tabOptions = ficheEntiteTabOptions;

  protected onSelectedTabChange(tabId: string): void {
    this.selectedTabId.set(tabId);
  }

  protected onContainerWidthInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.containerWidth.set(Number(input.value));
  }
}

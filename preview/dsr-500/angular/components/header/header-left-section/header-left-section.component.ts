import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { buildHeaderHomeAriaLabel } from "@design-system-rte/core/components/header";

import { ResolvedNavigation } from "../../../utils/navigation/navigation-element";

export interface HeaderLeftSectionViewConfig {
  hasLogo?: boolean;
  applicationName?: string;
  logoSrc?: string;
  homeAriaLabel?: string;
  homeNavigation: ResolvedNavigation;
}

@Component({
  selector: "rte-header-left-section",
  imports: [RouterLink],
  templateUrl: "./header-left-section.component.html",
  styleUrl: "./header-left-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLeftSectionComponent {
  readonly config = input<HeaderLeftSectionViewConfig | undefined>(undefined);

  readonly hasLogo = computed(() => this.config()?.hasLogo ?? true);
  readonly applicationName = computed(() => this.config()?.applicationName ?? "");
  readonly logoSrc = computed(() => this.config()?.logoSrc);
  readonly homeNavigation = computed(() => this.config()?.homeNavigation);

  readonly homeAriaLabel = computed(() => {
    return this.config()?.homeAriaLabel ?? buildHeaderHomeAriaLabel(this.applicationName());
  });

  readonly shouldRenderLogo = computed(() => this.hasLogo() && !!this.logoSrc());
}

import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { buildHeaderHomeAriaLabel, type HeaderLeftSectionConfig } from "@design-system-rte/core/components/header";

import {
  NavigationElement,
  resolveNavigationHref,
  resolveNavigationRouterLink,
} from "../../../utils/navigation/navigation-element";
import { effectiveRouterLink } from "../../../utils/navigation/router-link-inputs";

const DEFAULT_HOME_LINK = "/";

export type HeaderLeftSectionNavigationConfig = HeaderLeftSectionConfig & NavigationElement;

@Component({
  selector: "rte-header-left-section",
  imports: [RouterLink],
  templateUrl: "./header-left-section.component.html",
  styleUrl: "./header-left-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLeftSectionComponent {
  readonly config = input<HeaderLeftSectionNavigationConfig | undefined>(undefined);

  readonly hasLogo = computed(() => this.config()?.hasLogo ?? true);
  readonly applicationName = computed(() => this.config()?.applicationName ?? "");
  readonly logoSrc = computed(() => this.config()?.logoSrc);

  readonly homeAriaLabel = computed(() => {
    return this.config()?.homeAriaLabel ?? buildHeaderHomeAriaLabel(this.applicationName());
  });

  readonly shouldRenderLogo = computed(() => this.hasLogo() && !!this.logoSrc());

  readonly navigationHref = computed(() => {
    if (this.config()) {
      return resolveNavigationHref(this.config()!);
    }
  });

  readonly navigationExternalLink = computed(() => !!this.config()?.externalLink);

  readonly navigationRouterLink = computed(() => {
    const config = this.config();
    if (config && !resolveNavigationHref(config)) {
      return resolveNavigationRouterLink(config) ?? effectiveRouterLink(config.homeLink) ?? DEFAULT_HOME_LINK;
    }
  });

  readonly homeLinkConfig = computed(() => this.config()?.routerLinkConfig);
}

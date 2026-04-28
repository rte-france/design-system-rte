import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { buildHeaderHomeAriaLabel, type HeaderLeftSectionConfig } from "@design-system-rte/core/components/header";

const DEFAULT_HOME_LINK = "/";

@Component({
  selector: "rte-header-left-section",
  standalone: true,
  templateUrl: "./header-left-section.component.html",
  styleUrl: "./header-left-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLeftSectionComponent {
  readonly config = input<HeaderLeftSectionConfig | undefined>(undefined);

  readonly computedLogo = computed(() => this.config()?.hasLogo ?? true);
  readonly computedApplicationName = computed(() => this.config()?.applicationName ?? "");
  readonly computedLogoSrc = computed(() => this.config()?.logoSrc);
  readonly computedHomeLink = computed(() => this.config()?.homeLink ?? DEFAULT_HOME_LINK);

  readonly computedHomeAriaLabel = computed(() => {
    return this.config()?.homeAriaLabel ?? buildHeaderHomeAriaLabel(this.computedApplicationName());
  });

  readonly shouldRenderLogo = computed(() => this.computedLogo() && !!this.computedLogoSrc());
  readonly shouldRenderApplicationName = computed(() => !!this.computedApplicationName());
}

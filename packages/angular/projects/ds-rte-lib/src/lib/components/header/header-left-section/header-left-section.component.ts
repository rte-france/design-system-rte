import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { buildHeaderHomeAriaLabel, type HeaderLeftSectionConfig } from "@design-system-rte/core/components/header";

const DEFAULT_HOME_LINK = "/";

@Component({
  selector: "rte-header-left-section",
  templateUrl: "./header-left-section.component.html",
  styleUrl: "./header-left-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLeftSectionComponent {
  readonly config = input<HeaderLeftSectionConfig | undefined>(undefined);

  readonly hasLogo = computed(() => this.config()?.hasLogo ?? true);
  readonly applicationName = computed(() => this.config()?.applicationName ?? "");
  readonly logoSrc = computed(() => this.config()?.logoSrc);
  readonly homeLink = computed(() => this.config()?.homeLink ?? DEFAULT_HOME_LINK);

  readonly homeAriaLabel = computed(() => {
    return this.config()?.homeAriaLabel ?? buildHeaderHomeAriaLabel(this.applicationName());
  });

  readonly shouldRenderLogo = computed(() => this.hasLogo() && !!this.logoSrc());
}

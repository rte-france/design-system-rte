import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { effectiveRouterLink, RouterLinkConfig, RouterLinkValue } from "../../navigation/router-link-inputs";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-link",
  imports: [CommonModule, IconComponent, RouterLink],
  templateUrl: "./link.component.html",
  styleUrl: "./link.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  readonly label = input("");
  readonly href = input<string>("#");
  /** @deprecated Use `routerLink` instead. */
  readonly link = input<RouterLinkValue>();
  readonly routerLink = input<RouterLinkValue>();
  readonly routerLinkConfig = input<RouterLinkConfig>();
  readonly subtle = input<boolean>(false);
  readonly externalLink = input<boolean>(false);
  readonly reverse = input<boolean>(false);
  readonly maxWidth = input<number>();

  readonly effectiveRouterLink = computed(() => effectiveRouterLink(this.routerLink(), this.link()));
}

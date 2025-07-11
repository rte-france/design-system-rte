import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-link",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./link.component.html",
  styleUrl: "./link.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  readonly label = input("");
  readonly href = input<string>("#");
  readonly subtle = input<boolean>(false);
  readonly externalLink = input<boolean>(false);
}

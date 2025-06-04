import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "rte-link",
  imports: [CommonModule, IconComponent],
  standalone: true,
  templateUrl: "./link.component.html",
  styleUrl: "./link.component.scss",
})
export class LinkComponent {
  label = input("");
  href = input<string>("#");
  subtle = input<boolean>(false);
  externalLink = input<boolean>(false);
}

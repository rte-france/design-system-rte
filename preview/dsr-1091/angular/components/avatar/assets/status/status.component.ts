import { Component, input } from "@angular/core";
import { AvatarStatus } from "@design-system-rte/core/components/avatar/avatar.interface";

@Component({
  selector: "rte-status",
  templateUrl: "./status.component.html",
  styleUrl: "./status.component.scss",
})
export class StatusComponent {
  readonly status = input<AvatarStatus>();
  readonly size = input<number>();
}

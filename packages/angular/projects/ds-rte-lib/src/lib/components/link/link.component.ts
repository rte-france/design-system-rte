import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: "rte-link",
    standalone: true,
    imports: [CommonModule, IconComponent],
    templateUrl: "./link.component.html",
    styleUrl: "./link.component.scss"

})
export class LinkComponent {
  label = input("");
  href = input<string>("#");
  subtle = input<boolean>(false);
  externalLink = input<boolean>(false);
}

import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  ButtonComponent,
  IconComponent,
  SplitButtonComponent,
  IconButtonToggleComponent,
  TooltipDirective,
} from "@design-system-rte/angular";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    IconComponent,
    SplitButtonComponent,
    IconButtonToggleComponent,
    TooltipDirective,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "angular";
}

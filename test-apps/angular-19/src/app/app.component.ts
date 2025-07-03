import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ButtonComponent, IconComponent } from "@design-system-rte/angular";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, IconComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "angular";
}

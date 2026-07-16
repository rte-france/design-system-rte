import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-placeholder",
  template: `<section style="padding: 24px; font-family: Arial, sans-serif">
    <h2 style="margin: 0 0 8px 0">{{ title }}</h2>
    <p style="margin: 0; color: #666">Route: {{ routePath }}</p>
  </section>`,
})
export class PagePlaceholderComponent {
  private readonly route = inject(ActivatedRoute);

  readonly title = this.route.snapshot.data["title"] as string;
  readonly routePath = this.route.snapshot.routeConfig?.path ?? "/";
}

import { Routes } from "@angular/router";

import { PagePlaceholderComponent } from "./pages/page-placeholder.component";

export const routes: Routes = [
  { path: "", component: PagePlaceholderComponent, data: { title: "Home" } },
  { path: "products", component: PagePlaceholderComponent, data: { title: "Products" } },
  { path: "products/electronics", component: PagePlaceholderComponent, data: { title: "Electronics" } },
  { path: "products/electronics/smartphones", component: PagePlaceholderComponent, data: { title: "Smartphones" } },
  { path: "components", component: PagePlaceholderComponent, data: { title: "Components" } },
  { path: "tokens", component: PagePlaceholderComponent, data: { title: "Tokens" } },
  { path: "guidelines", component: PagePlaceholderComponent, data: { title: "Guidelines" } },
  { path: "profile", component: PagePlaceholderComponent, data: { title: "Profile" } },
  { path: "help", component: PagePlaceholderComponent, data: { title: "Help" } },
];

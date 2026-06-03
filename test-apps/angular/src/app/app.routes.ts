import { Component } from "@angular/core";
import { Routes } from "@angular/router";

@Component({
  standalone: true,
  template: "",
})
class EmptyRouteComponent {}

export const routes: Routes = [
  { path: "home", component: EmptyRouteComponent },
  { path: "dashboard", component: EmptyRouteComponent },
  { path: "analytics", component: EmptyRouteComponent },
  { path: "settings", component: EmptyRouteComponent },
  { path: "profile", component: EmptyRouteComponent },
  { path: "help", component: EmptyRouteComponent },
  { path: "preferences", component: EmptyRouteComponent },
  { path: "**", component: EmptyRouteComponent },
];

import { Component } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
import { applicationConfig } from "@storybook/angular";

@Component({
  standalone: true,
  template: "",
})
class StorybookSideNavStubComponent {}

const storybookSideNavRoutes: Routes = [{ path: "**", component: StorybookSideNavStubComponent }];

export const sideNavStoryRouterConfig = applicationConfig({
  providers: [provideRouter(storybookSideNavRoutes)],
});

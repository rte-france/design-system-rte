import { Component, output, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  ButtonComponent,
  IconComponent,
  SplitButtonComponent,
  IconButtonToggleComponent,
  TooltipDirective,
  TextInputComponent,
  ChipComponent,
  BadgeDirective,
  TextareaComponent,
  LinkComponent,
  DividerComponent,
  SwitchComponent,
  SegmentedControlComponent,
  BreadcrumbsComponent,
  BannerComponent,
  DropdownModule,
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
    TextInputComponent,
    ChipComponent,
    BadgeDirective,
    TextareaComponent,
    LinkComponent,
    DividerComponent,
    SwitchComponent,
    SegmentedControlComponent,
    BreadcrumbsComponent,
    BannerComponent,
    DropdownModule
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "angular";

  readonly inputValue = signal("Hello");

  handleInputChange(value: string) {
    this.inputValue.set(value);
  }
  selected = signal(false);

  readonly click = output<MouseEvent | KeyboardEvent>();

  toggleSelectState(): void {
    this.selected.set(!this.selected());
  }

  onClick(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    this.click.emit(event);
    this.toggleSelectState();
  }

  readonly isInfoBannerVisible = signal(true);
  readonly isAlertBannerVisible = signal(true);

  toggleInfoBanner(): void {
    console.log("toggle info banner");
    this.isInfoBannerVisible.set(!this.isInfoBannerVisible());
  }

  toggleAlertBanner(): void {
    this.isAlertBannerVisible.set(!this.isAlertBannerVisible());
  }

  segments = [
    { id: "segment1", label: "Label 1" },
    { id: "segment2", label: "Label 2" },
    { id: "segment3", label: "Label 3" },
  ];

  selectedSegment = signal("segment1");

  onSegmentSelected(segmentId: string): void {
    this.selectedSegment.set(segmentId);
  }

  breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Electronics", link: "/products/electronics" },
    { label: "Smartphones", link: "/products/electronics/smartphones" },
  ];

  dropdownItems = [
    { label: "Item 1" },
    { label: "Item 2" },
    { label: "Item 3" },
  ];
}

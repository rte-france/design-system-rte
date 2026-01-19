import { Component, computed, output, signal, inject } from "@angular/core";
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
  PopoverDirective,
  ModalModule,
  SideNavComponent,
  CardComponent,
  ToastService,
  SelectComponent,
  TabComponent,
  LoaderComponent,
  StepperComponent,
} from "@design-system-rte/angular";
import { NavItemProps } from "@design-system-rte/core/components/side-nav/nav-item/nav-item.interface";
import { Step } from "@design-system-rte/core/components/stepper/stepper.interface";

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
    PopoverDirective,
    ModalModule,
    SideNavComponent,
    CardComponent,
    SelectComponent,
    TabComponent,
    LoaderComponent,
    StepperComponent,
  ],
  providers: [ToastService],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "angular";

  readonly toastService = inject(ToastService);
  private currentOpenedToastId = "";

  readonly inputValue = signal("Hello");

  readonly activeStepId = signal("1");

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

  handleModalPrimaryClick() {
    console.log("Primary button clicked");
  }

  handleModalSecondaryClick() {
    console.log("Secondary button clicked");
  }

  rteSplitButtonOptions = [
    { id: "option-1", label: "Option 1", onClick: () => console.log("Option 1 clicked") },
    { id: "option-2", label: "Option 2", onClick: () => console.log("Option 2 clicked") },
    { id: "option-3", label: "Option 3", onClick: () => console.log("Option 3 clicked") },
  ];

  readonly activeItem = signal<string>("home");

  readonly headerConfig = {
    identifier: "DS",
    title: "Design System",
    version: "V1.0.0",
    icon: "home",
    link: "/",
  };

  readonly baseNavigationItems: NavItemProps[] = [
    { id: "home", label: "Home", icon: "home", showIcon: true },
    { id: "dashboard", label: "Dashboard", icon: "dashboard", showIcon: true },
    { id: "analytics", label: "Analytics", icon: "analytics", showIcon: true },
    { id: "settings", label: "Settings", icon: "settings", showIcon: true },
    { id: "profile", label: "Profile", icon: "user", showIcon: true, link: "/profile" },
  ];

  readonly navigationItems = computed<NavItemProps[]>(() => {
    return this.baseNavigationItems.map((item) => ({
      ...item,
      active: item.id === this.activeItem(),
      onClick: () => {
        this.activeItem.set(item.id || "");
      },
    }));
  });

  readonly baseFooterItems: NavItemProps[] = [
    {
      id: "footer-settings",
      label: "Settings",
      icon: "settings",
      showIcon: true,
    },
    {
      id: "footer-help",
      label: "Help & Support",
      icon: "help",
      showIcon: true,
      link: "/help",
    },
    {
      id: "footer-account",
      label: "Account",
      icon: "user",
      showIcon: true,
      items: [
        { id: "footer-profile", label: "Profile", link: "/profile" },
        { id: "footer-preferences", label: "Preferences" },
        { id: "footer-logout", label: "Logout", onClick: () => console.log("Logout clicked") },
      ],
    },
  ];

  readonly footerItems = computed<NavItemProps[]>(() => {
    return this.baseFooterItems.map((item) => ({
      ...item,
      active: item.id === this.activeItem(),
    }));
  });

  handleItemClick(itemId: string): void {
    if (itemId === "footer-settings") {
      console.log("Footer Settings clicked");
    }
    this.activeItem.set(itemId);
  }
  toggleToast() {
    console.log("Toast toggled from app component");
    if (this.toastService.isInQueue(this.currentOpenedToastId)) {
      this.toastService.removeFromQueue(this.currentOpenedToastId);
      return;
    }
    this.currentOpenedToastId = this.toastService.addToQueue({
      message: "This is a toast message from AppComponent",
      type: "success",
      placement: "top-right",
      autoDismiss: true,
      duration: "medium",
      closable: true,
      showActionButton: false,
    });
  }

  readonly selectOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  readonly tabOptions = [
    { id: "tab-1", label: "Onglet 1", panelId: "panel-1" },
    { id: "tab-2", label: "Onglet 2", panelId: "panel-2" },
    { id: "tab-3", label: "Onglet 3", panelId: "panel-3" },
  ];

  selectedTabId = signal("tab-1");

  onTabChange(tabId: string): void {
    this.selectedTabId.set(tabId);
  }
  readonly allClickableSteps: Step[] = [
    {
      id: "1",
      name: "Étape 1",
      completionState: "complete",
      onClick: () => this.activeStepId.set("1"),
      clickableCompleteStep: true,
    },
    { id: "2", name: "Étape 2", completionState: "incomplete", onClick: () => this.activeStepId.set("2") },
    { id: "3", name: "Étape 3", completionState: "unvisited", onClick: () => this.activeStepId.set("3") },
    { id: "4", name: "Étape 4", completionState: "unvisited", onClick: () => this.activeStepId.set("4") },
    { id: "5", name: "Étape 5", completionState: "unvisited", onClick: () => this.activeStepId.set("5") },
    { id: "6", name: "Étape 6", completionState: "unvisited", onClick: () => this.activeStepId.set("6") },
    { id: "7", name: "Étape 7", completionState: "unvisited", onClick: () => this.activeStepId.set("7") },
  ];
}

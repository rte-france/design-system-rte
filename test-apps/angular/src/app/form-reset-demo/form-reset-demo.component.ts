import { JsonPipe } from "@angular/common";
import { Component, DestroyRef, ElementRef, inject, signal, viewChild } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent, SelectComponent, SwitchComponent, TextInputComponent } from "@design-system-rte/angular";

const FILTER_DEFAULTS = {
  enabled: false,
  query: "",
  category: "",
};

const TEST_VALUES = {
  enabled: true,
  query: "OPARC",
  category: "option2",
};

@Component({
  selector: "app-form-reset-demo",
  imports: [ReactiveFormsModule, JsonPipe, ButtonComponent, SwitchComponent, TextInputComponent, SelectComponent],
  templateUrl: "./form-reset-demo.component.html",
  styleUrl: "./form-reset-demo.component.scss",
})
export class FormResetDemoComponent {
  readonly filterDefaults = FILTER_DEFAULTS;

  private readonly destroyRef = inject(DestroyRef);

  readonly filtersForm = new FormGroup({
    enabled: new FormControl(FILTER_DEFAULTS.enabled, { nonNullable: true }),
    query: new FormControl(FILTER_DEFAULTS.query, { nonNullable: true }),
    category: new FormControl(FILTER_DEFAULTS.category, { nonNullable: true }),
  });

  readonly categoryOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  private readonly formContainer = viewChild<ElementRef<HTMLElement>>("formContainer");

  readonly enabledInSync = signal(true);
  readonly queryInSync = signal(true);
  readonly categoryInSync = signal(true);

  private syncRecomputeTimeoutId: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    const sub = this.filtersForm.valueChanges.subscribe(() => this.scheduleRecomputeSyncBadges());
    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
      this.clearRecomputeTimeout();
    });
  }

  fillTestValues(): void {
    this.filtersForm.patchValue(TEST_VALUES);
    this.scheduleRecomputeSyncBadges();
  }

  resetFilters(): void {
    this.filtersForm.reset(FILTER_DEFAULTS);
    this.scheduleRecomputeSyncBadges();
  }

  private scheduleRecomputeSyncBadges(): void {
    this.clearRecomputeTimeout();
    this.syncRecomputeTimeoutId = setTimeout(() => {
      this.syncRecomputeTimeoutId = null;
      this.recomputeSyncBadgesFromDom();
    }, 0);
  }

  private clearRecomputeTimeout(): void {
    if (this.syncRecomputeTimeoutId !== null) {
      clearTimeout(this.syncRecomputeTimeoutId);
      this.syncRecomputeTimeoutId = null;
    }
  }

  private recomputeSyncBadgesFromDom(): void {
    this.enabledInSync.set(this.computeEnabledInSync());
    this.queryInSync.set(this.computeQueryInSync());
    this.categoryInSync.set(this.computeCategoryInSync());
  }

  private computeEnabledInSync(): boolean {
    const switchElement = this.formContainer()?.nativeElement.querySelector('[role="switch"]');
    if (!switchElement) {
      return true;
    }
    const domChecked = switchElement.getAttribute("aria-checked") === "true";
    return domChecked === this.filtersForm.controls.enabled.value;
  }

  private computeQueryInSync(): boolean {
    const input = this.formContainer()?.nativeElement.querySelector("#filter-query input") as HTMLInputElement | null;
    if (!input) {
      return true;
    }
    return input.value === this.filtersForm.controls.query.value;
  }

  private computeCategoryInSync(): boolean {
    const combobox = this.formContainer()?.nativeElement.querySelector(
      "#filter-category [role='combobox']",
    ) as HTMLElement | null;
    if (!combobox) {
      return true;
    }
    const formValue = this.filtersForm.controls.category.value;
    const domText = combobox.textContent?.trim() ?? "";
    if (!formValue) {
      return domText.includes("Select a category") || domText === "";
    }
    const expectedLabel = this.categoryOptions.find((option) => option.value === formValue)?.label ?? "";
    return domText.includes(expectedLabel);
  }

  syncBadgeClass(inSync: boolean): string {
    return inSync ? "sync-badge sync-badge--ok" : "sync-badge sync-badge--error";
  }

  syncBadgeLabel(inSync: boolean): string {
    return inSync ? "IN SYNC" : "OUT OF SYNC";
  }
}

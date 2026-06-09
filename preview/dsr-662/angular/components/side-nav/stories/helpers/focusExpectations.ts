import { expect } from "@storybook/test";

function getSideNavShell(sideNav: HTMLElement): HTMLElement {
  const shell = sideNav.querySelector(".side-nav") as HTMLElement | null;
  if (!shell) {
    throw new Error("Side nav shell not found");
  }
  return shell;
}

function getSideNavFocusStyleTarget(interactiveElement: HTMLElement): HTMLElement {
  const navItemContainer = interactiveElement.closest(".nav-item-container") as HTMLElement | null;
  if (navItemContainer) {
    return navItemContainer;
  }

  return interactiveElement;
}

function resolveShellVariable(
  sideNavShell: HTMLElement,
  variableName: string,
  property: "backgroundColor" | "borderColor",
): string {
  const probe = document.createElement("div");
  probe.style.setProperty(property, `var(${variableName})`);
  probe.style.display = "none";
  sideNavShell.appendChild(probe);
  const resolvedValue = getComputedStyle(probe)[property];
  sideNavShell.removeChild(probe);
  return resolvedValue;
}

function resolveFocusRingSideShadows(sideNavShell: HTMLElement): string {
  const probe = document.createElement("div");
  probe.style.boxShadow = [
    "inset 0 1px 0 0 var(--rte-side-nav-item-border-focus)",
    "inset 0 -1px 0 0 var(--rte-side-nav-item-border-focus)",
    "inset -1px 0 0 0 var(--rte-side-nav-item-border-focus)",
  ].join(", ");
  probe.style.display = "none";
  sideNavShell.appendChild(probe);
  const resolvedValue = getComputedStyle(probe).boxShadow;
  sideNavShell.removeChild(probe);
  return resolvedValue;
}

function resolveFullInsetFocusRing(sideNavShell: HTMLElement): string {
  const probe = document.createElement("div");
  probe.style.boxShadow = "inset 0 0 0 1px var(--rte-side-nav-item-border-focus)";
  probe.style.display = "none";
  sideNavShell.appendChild(probe);
  const resolvedValue = getComputedStyle(probe).boxShadow;
  sideNavShell.removeChild(probe);
  return resolvedValue;
}

function isHeaderTitleContainer(element: HTMLElement): boolean {
  return element.classList.contains("side-nav-header-title-container");
}

function isActiveNavElement(element: HTMLElement): boolean {
  if (element.classList.contains("active")) {
    return true;
  }

  const navMenuContainer = element.closest(".nav-menu-container") as HTMLElement | null;
  if (navMenuContainer?.classList.contains("active")) {
    return true;
  }

  return false;
}

interface FocusVisibleCapableElement extends HTMLElement {
  focus(options?: FocusOptions & { focusVisible?: boolean }): void;
}

function focusWithVisibleRing(element: HTMLElement): void {
  (element as FocusVisibleCapableElement).focus({ focusVisible: true });
}

function expectElementToHaveSideNavFocusStyles(focusedElement: HTMLElement, sideNav: HTMLElement): void {
  const sideNavShell = getSideNavShell(sideNav);
  const styleTarget = getSideNavFocusStyleTarget(focusedElement);
  const styles = getComputedStyle(styleTarget);

  expect(styles.borderRadius).toBe("0px");
  expect(styles.outlineStyle).toBe("none");

  const expectedBackgroundColor = resolveShellVariable(sideNavShell, "--rte-side-nav-item-bg-hover", "backgroundColor");
  expect(styles.backgroundColor).toBe(expectedBackgroundColor);

  if (isHeaderTitleContainer(styleTarget)) {
    expect(styles.boxShadow).toBe(resolveFullInsetFocusRing(sideNavShell));
    return;
  }

  expect(styles.boxShadow).toBe(resolveFocusRingSideShadows(sideNavShell));

  if (!isActiveNavElement(styleTarget)) {
    const expectedFocusBorderColor = resolveShellVariable(
      sideNavShell,
      "--rte-side-nav-item-border-focus",
      "borderColor",
    );
    expect(styles.borderLeftColor).toBe(expectedFocusBorderColor);
  }
}

export { focusWithVisibleRing, expectElementToHaveSideNavFocusStyles, getSideNavFocusStyleTarget, getSideNavShell };

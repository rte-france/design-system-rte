import figma, { html } from "@figma/code-connect/html";

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=1-6301", {
  props: {
    label: figma.string("labelText"),
    disabled: figma.enum("interactionState", {
      disabled: true,
      default: false,
      hover: false,
      pressed: false,
    }),
    rteButtonAppearance: figma.enum("appearance", {
      brand: "brand",
      neutral: "neutral",
    }),
    rteButtonHierarchy: figma.enum("hierarchy", {
      primary: "primary",
      secondary: "secondary",
      text: "text",
      transparent: "transparent",
      outlined: "outlined",
    }),
    rteButtonIsCritical: figma.boolean("isCritical"),
    rteButtonIsReversed: figma.boolean("isReversed"),
    rteButtonSize: figma.enum("size", {
      S: "s",
      M: "m",
      L: "l",
    }),
    activeIcon: figma.boolean("hasLeftIcon", {
      true: figma.nestedProps("Icon", {
        rteButtonIcon: figma.instance<string>("icon"),
        rteButtonIconAppearance: figma.enum("iconAppearance", {
          outlined: "outlined",
          filled: "filled",
        }),
      }),
      false: figma.boolean("hasRightIcon", {
        true: figma.nestedProps("Icon", {
          rteButtonIcon: figma.instance<string>("icon"),
          rteButtonIconAppearance: figma.enum("iconAppearance", {
            outlined: "outlined",
            filled: "filled",
          }),
        }),
        false: undefined,
      }),
    }),
    rteButtonIconPosition: figma.boolean("hasLeftIcon", {
      true: "left",
      false: figma.boolean("hasRightIcon", {
        true: "right",
        false: undefined,
      }),
    }),
    rteBadge: figma.boolean("hasBadge", {
      true: html`rteBadge`,
      false: html``,
    }),
    rteBadgeContent: figma.boolean("hasBadge", {
      true: "number",
      false: undefined,
    }),
    rteBadgeCount: figma.boolean("hasBadge", {
      true: "1",
      false: undefined,
    }),
  },
  example: ({
    label,
    disabled,
    rteButtonAppearance,
    rteButtonHierarchy,
    rteButtonIsCritical,
    rteButtonIsReversed,
    rteButtonSize,
    activeIcon,
    rteButtonIconPosition,
    rteBadge,
    rteBadgeContent,
    rteBadgeCount,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) =>
    html`<button
      rteButton
      ${rteBadge}
      rteButtonAppearance=${rteButtonAppearance}
      rteButtonHierarchy=${rteButtonHierarchy}
      rteButtonIsCritical=${rteButtonIsCritical}
      rteButtonIsReversed=${rteButtonIsReversed}
      rteButtonSize=${rteButtonSize}
      rteButtonIcon=${activeIcon?.rteButtonIcon}
      rteButtonIconPosition=${rteButtonIconPosition}
      rteButtonIconAppearance=${activeIcon?.rteButtonIconAppearance}
      rteBadgeContent=${rteBadgeContent}
      rteBadgeCount=${rteBadgeCount}
      disabled=${disabled}
    >
      ${label}
    </button>`,
  imports: ['import { ButtonComponent, BadgeDirective } from "@design-system-rte/angular";'],
});

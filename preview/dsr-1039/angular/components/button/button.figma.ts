import figma, { html } from "@figma/code-connect/html";

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=1-6301", {
  props: {
    label: figma.string("label"),
    disabled: figma.enum("interactionState", {
      disabled: true,
      enabled: false,
      hover: false,
      active: false,
    }),
    rteButtonVariant: figma.enum("appearance", {
      primary: "primary",
      secondary: "secondary",
      text: "text",
      transparent: "transparent",
      danger: "danger",
      neutral: "neutral",
      reverse: "reverse",
    }),
    rteButtonSize: figma.enum("size", {
      S: "s",
      M: "m",
      L: "l",
    }),
    activeIcon: figma.boolean("showLeftIcon", {
      true: figma.nestedProps("Icon", {
        rteButtonIcon: figma.instance<string>("icon"),
        rteButtonIconAppearance: figma.enum("iconAppearance", {
          outlined: "outlined",
          filled: "filled",
        }),
      }),
      false: figma.boolean("showRightIcon", {
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
    rteButtonIconPosition: figma.boolean("showLeftIcon", {
      true: "left",
      false: figma.boolean("showRightIcon", {
        true: "right",
        false: undefined,
      }),
    }),
    rteBadge: figma.boolean("showBadge", {
      true: html`rteBadge`,
      false: html``,
    }),
    rteBadgeContent: figma.boolean("showBadge", {
      true: "number",
      false: undefined,
    }),
    rteBadgeCount: figma.boolean("showBadge", {
      true: "1",
      false: undefined,
    }),
  },
  example: ({
    label,
    disabled,
    rteButtonVariant,
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
      rteButtonVariant=${rteButtonVariant}
      rteButtonSize=${rteButtonSize}
      rteButtonIcon=${activeIcon.rteButtonIcon}
      rteButtonIconPosition=${rteButtonIconPosition}
      rteButtonIconAppearance=${activeIcon.rteButtonIconAppearance}
      rteBadgeContent=${rteBadgeContent}
      rteBadgeCount=${rteBadgeCount}
      disabled=${disabled}
    >
      ${label}
    </button>`,
  imports: ['import { ButtonComponent, BadgeDirective } from "@design-system-rte/angular";'],
});

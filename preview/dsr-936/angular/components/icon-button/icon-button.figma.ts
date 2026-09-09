import figma, { html } from "@figma/code-connect/html";

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=1223-8751", {
  props: {
    disabled: figma.enum("interactionState", {
      disabled: true,
      enabled: false,
      hover: false,
      active: false,
    }),
    variant: figma.enum("appearance", {
      primary: "primary",
      secondary: "secondary",
      text: "text",
      transparent: "transparent",
      danger: "danger",
      neutral: "neutral",
      reverse: "reverse",
    }),
    size: figma.enum("size", {
      S: "s",
      M: "m",
      L: "l",
    }),
    compactSpacing: figma.enum("compactSpacing", {
      False: false,
      True: true,
    }),
    icon: figma.nestedProps("Icon instance", {
      appearance: figma.enum("iconAppearance", {
        outlined: "outlined",
        filled: "filled",
      }),
    }),
  },
  example: ({
    disabled,
    variant,
    size,
    compactSpacing,
    icon,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) =>
    html`<rte-icon-button
      [name]="'settings'"
      [variant]="'${variant}'"
      [size]="'${size}'"
      [appearance]="'${icon.appearance}'"
      [compactSpacing]="${compactSpacing}"
      [disabled]="${disabled}"
      [ariaLabel]="'Icon button'"
    />`,
  imports: ['import { IconButtonComponent } from "@design-system-rte/angular";'],
});

import figma, { html } from "@figma/code-connect/html";

figma.connect(
  "https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/branch/XDgWJSvAobw8FuOuMyaMSm/01.0-Design-System-RTE---WEB?node-id=1223-8751",
  {
    props: {
      disabled: figma.enum("isDisabled", {
        true: true,
        false: false,
      }),
      appearance: figma.enum("appearance", {
        brand: "brand",
        neutral: "neutral",
      }),
      hierarchy: figma.enum("hierarchy", {
        primary: "primary",
        secondary: "secondary",
        text: "text",
        transparent: "transparent",
      }),
      isCritical: figma.enum("isCritical", {
        true: true,
        false: false,
      }),
      isReversed: figma.enum("isReversed", {
        true: true,
        false: false,
      }),
      size: figma.enum("size", {
        S: "s",
        M: "m",
        L: "l",
      }),
      compactSpacing: figma.enum("isCompact", {
        False: false,
        True: true,
      }),
      icon: figma.nestedProps("Icon instance", {
        iconAppearance: figma.enum("iconAppearance", {
          outlined: "outlined",
          filled: "filled",
        }),
      }),
    },
    example: ({
      disabled,
      appearance,
      hierarchy,
      isCritical,
      isReversed,
      size,
      compactSpacing,
      icon,
    }: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    }) =>
      html`<rte-icon-button
        [name]="'settings'"
        [appearance]="'${appearance}'"
        [hierarchy]="'${hierarchy}'"
        [isCritical]="${isCritical}"
        [isReversed]="${isReversed}"
        [size]="'${size}'"
        [iconAppearance]="'${icon.iconAppearance}'"
        [compactSpacing]="${compactSpacing}"
        [disabled]="${disabled}"
        [ariaLabel]="'Icon button'"
      />`,
    imports: ['import { IconButtonComponent } from "@design-system-rte/angular";'],
  },
);

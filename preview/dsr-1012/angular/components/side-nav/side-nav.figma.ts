import figma, { html } from "@figma/code-connect/html";

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=14812-27774", {
  props: {
    collapsible: figma.boolean("isCollapsible"),
    appearance: figma.enum("appearance", {
      neutral: "neutral",
      brand: "brand",
    }),
    contrast: figma.enum("contrast", {
      low: "low",
      high: "high",
    }),
    size: figma.enum("size", {
      S: "s",
      M: "m",
    }),
    isCollapsed: figma.enum("isCollapsed", {
      true: true,
      false: false,
    }),
    header: figma.nestedProps("Side Navigation Header", {
      version: figma.boolean("showVersionNumber", {
        true: figma.string("versionNumber"),
        false: undefined,
      }),
      isCompact: figma.enum("isCompact", {
        true: true,
        false: false,
      }),
    }),
    headerItem: figma.nestedProps("Header Item", {
      title: figma.string("appNameText"),
    }),
  },
  example: ({
    collapsible,
    appearance,
    contrast,
    size,
    isCollapsed,
    header,
    headerItem,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) =>
    html`<rte-side-nav
      [size]="'${size}'"
      [appearance]="'${appearance}'"
      [contrast]="'${contrast}'"
      [collapsible]="${collapsible}"
      [isCollapsed]="${isCollapsed}"
      [headerConfig]="{ title: '${headerItem.title}', version: '${header.version}', isCompact: ${header.isCompact} }"
    />`,
  imports: ['import { SideNavComponent } from "@design-system-rte/angular";'],
});

import figma, { html } from "@figma/code-connect/html";

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=14655-12976", {
  props: {
    primaryItem: figma.nestedProps("Primary Navigation Item", {
      label: figma.string("labelText"),
      active: figma.enum("interactionState", {
        enabled: "false",
        hover: "false",
        active: "true",
      }),
      hasLeadingIcon: figma.boolean("hasLeadingIcon", {
        true: "true",
        false: "false",
      }),
      badge: figma.boolean("hasBadge", {
        true: html`[badge]="{ badgeType: 'indicator', size: 'm', content: 'number', count: 1 }"`,
        false: html``,
      }),
    }),
    hasDivider: figma.boolean("hasDivider", {
      true: "true",
      false: "false",
    }),
    open: figma.nestedProps("Primary Menu Icon", {
      isOpen: figma.enum("isOpen", {
        true: "true",
        false: "false",
      }),
    }),
  },
  example: ({
    primaryItem,
    hasDivider,
    open,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) =>
    html`<rte-nav-menu
      [label]="'${primaryItem.label}'"
      [hasLeadingIcon]="${primaryItem.hasLeadingIcon}"
      [active]="${primaryItem.active}"
      [hasDivider]="${hasDivider}"
      [open]="${open.isOpen}"
      [items]="[]"
      ${primaryItem.badge}
    />`,
  imports: ['import { NavMenuComponent } from "@design-system-rte/angular";'],
});

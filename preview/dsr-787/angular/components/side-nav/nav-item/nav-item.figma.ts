import figma, { html } from "@figma/code-connect/html";

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=14625-7155", {
  props: {
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
  },
  example: ({
    label,
    active,
    hasLeadingIcon,
    badge,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) => html`<rte-nav-item [label]="'${label}'" [hasLeadingIcon]="${hasLeadingIcon}" [active]="${active}" ${badge} />`,
  imports: ['import { NavItemComponent } from "@design-system-rte/angular";'],
});

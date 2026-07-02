import figma, { html } from "@figma/code-connect/html";

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=1834-466", {
  props: {
    label: figma.string("label"),
    status: figma.enum("status", {
      success: "success",
      information: "information",
      warning: "warning",
      alert: "alert",
    }),
    compactSpacing: figma.enum("compactSpacing", {
      false: false,
      true: true,
    }),
    showLeftIcon: figma.boolean("showLeftIcon"),
  },
  example: ({
    label,
    status,
    compactSpacing,
    showLeftIcon,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) =>
    html`<rte-tag
      [tagType]="'status'"
      [status]="'${status}'"
      [compactSpacing]="${compactSpacing}"
      [label]="'${label}'"
      [showLeftIcon]="${showLeftIcon}"
    />`,
  imports: ['import { TagComponent } from "@design-system-rte/angular";'],
});

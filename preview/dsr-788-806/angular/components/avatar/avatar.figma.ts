import figma, { html } from "@figma/code-connect/html";

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=11993-2095", {
  props: {
    type: figma.enum("avatarType", {
      people: "user",
      entity: "entity",
    }),
    size: figma.enum("size", {
      "120": 120,
      "96": 96,
      "72": 72,
      "64": 64,
      "56": 56,
      "48": 48,
      "40": 40,
      "36": 36,
      "32": 32,
      "28": 28,
      "24": 24,
    }),
    layout: figma.enum("layout", {
      image: "image",
      initials: "initials",
      icon: "icon",
    }),
    colorType: figma.enum("color", {
      neutral: "neutral",
      brand: "brand",
      decorative: "decorative",
    }),
    initials: figma.string("initialsText (2 letters max)"),
    status: figma.boolean("hasStatus", {
      true: figma.nestedProps("Status Badge", {
        statusAttribute: figma.enum("status", {
          available: html`[status]="'available'"`,
        }),
      }),
      false: {
        statusAttribute: html``,
      },
    }),
  },
  example: ({
    type,
    size,
    layout,
    colorType,
    initials,
    status,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) =>
    html`<rte-avatar
      [size]="${size}"
      [type]="'${type}'"
      [layout]="'${layout}'"
      [colorType]="'${colorType}'"
      [initials]="'${initials}'"
      ${status.statusAttribute}
    />`,
  imports: ['import { AvatarComponent } from "@design-system-rte/angular";'],
});

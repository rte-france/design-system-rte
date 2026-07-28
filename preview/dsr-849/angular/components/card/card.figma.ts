import figma, { html } from "@figma/code-connect/html";

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=4032-10276", {
  props: {
    cardType: figma.enum("cardType", {
      default: "default",
      outlined: "outlined",
    }),
    clickable: figma.enum("interactionState", {
      enabled: false,
      hover: true,
      active: true,
      disabled: true,
    }),
    disabled: figma.enum("interactionState", {
      enabled: false,
      hover: false,
      active: false,
      disabled: true,
    }),
  },
  example: ({
    cardType,
    clickable,
    disabled,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) =>
    html`<rte-card [cardType]="'${cardType}'" [clickable]="${clickable}" [disabled]="${disabled}">
      <div style="padding: 16px;">
        <h3>Card title</h3>
        <p>Card content</p>
      </div>
    </rte-card>`,
  imports: ['import { CardComponent } from "@design-system-rte/angular";'],
});

import figma, { html } from "@figma/code-connect/html";

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=3753-6302", {
  props: {
    orientation: figma.enum("orientation", {
      horizontal: "horizontal",
      vertical: "vertical",
    }),
    thickness: figma.enum("thickness", {
      light: "light",
      medium: "medium",
      bold: "bold",
    }),
    appearance: figma.enum("appearance", {
      neutral: "default",
      brand: "brand",
      inverse: "inverse",
    }),
    endPoint: figma.enum("endPoint", {
      round: "round",
      square: "square",
    }),
  },
  example: ({
    orientation,
    thickness,
    appearance,
    endPoint,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) =>
    html`<rte-divider
      orientation="${orientation}"
      thickness="${thickness}"
      appearance="${appearance}"
      endPoint="${endPoint}"
    />`,
  imports: ['import { DividerComponent } from "@design-system-rte/angular";'],
});

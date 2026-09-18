import figma, { html } from "@figma/code-connect/html";

figma.connect("https://www.figma.com/design/Wiy8uWsWjoagf95lOmPXNU/01.0-Design-System-RTE---WEB?node-id=1068-3171", {
  props: {
    label: figma.string("label"),
    arrow: figma.boolean("arrow"),
    position: figma.enum("position", {
      bottom: "bottom",
      top: "top",
      left: "left",
      right: "right",
    }),
    alignment: figma.enum("alignement", {
      center: "center",
      start: "start",
      end: "end",
    }),
  },
  example: ({
    label,
    arrow,
    position,
    alignment,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) =>
    html`<button
      rteButton
      rteTooltip="${label}"
      rteTooltipPosition="${position}"
      rteTooltipAlignment="${alignment}"
      [rteTooltipArrow]="${arrow}"
    >
      Label
    </button>`,
  imports: ['import { ButtonComponent, TooltipDirective } from "@design-system-rte/angular";'],
});

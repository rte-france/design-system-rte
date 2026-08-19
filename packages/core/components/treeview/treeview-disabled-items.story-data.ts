import type { TreeviewItemProps } from "./treeview-item.interface";

export const disabledItemsScenarioSelectedId = "phase2-inuit-1-indice-1-active";

export const disabledItemsScenarioData: TreeviewItemProps[] = [
  {
    id: "dem0265433-reflecto",
    labelText: "DEM0265433-Reflecto_P.ORG-RC",
    icon: "folder",
    isOpen: true,
    items: [
      {
        id: "phase0-so-sur-t",
        labelText: "Phase0-SO-SUR-T",
        disabled: true,
        isOpen: false,
        items: [{ id: "phase0-indice-1", labelText: "Indice 1", disabled: true }],
      },
      {
        id: "phase1-so-sur-t",
        labelText: "Phase1-SO-SUR-T",
        disabled: true,
        isOpen: true,
        items: [
          {
            id: "phase1-indice-1",
            labelText: "Indice 1",
            disabled: true,
            isOpen: true,
            items: [{ id: "phase1-indice-1-child", labelText: "Indice 1", disabled: true }],
          },
        ],
      },
      {
        id: "phase2-inuit-1",
        labelText: "Phase2-SO-INUIT",
        isOpen: true,
        items: [
          { id: "phase2-inuit-1-indice-1-disabled", labelText: "Indice 1", disabled: true },
          { id: "phase2-inuit-1-indice-2-disabled", labelText: "Indice 2", disabled: true },
          {
            id: disabledItemsScenarioSelectedId,
            labelText: "Indice 1",
            isOpen: true,
            items: [{ id: "phase2-inuit-1-rejouer-nested", labelText: "Rejouer", icon: "play-circle" }],
          },
          { id: "phase2-inuit-1-indice-3", labelText: "Indice 3" },
          { id: "phase2-inuit-1-rejouer", labelText: "Rejouer", icon: "play-circle" },
        ],
      },
      {
        id: "phase2-inuit-2",
        labelText: "Phase2-SO-INUIT",
        isOpen: false,
        items: [{ id: "phase2-inuit-2-indice-1", labelText: "Indice 1" }],
      },
      {
        id: "phase2-inuit-3",
        labelText: "Phase2-SO-INUIT",
        isOpen: false,
        items: [{ id: "phase2-inuit-3-indice-1", labelText: "Indice 1" }],
      },
      {
        id: "phase2-inuit-4",
        labelText: "Phase2-SO-INUIT",
        isOpen: false,
        items: [{ id: "phase2-inuit-4-indice-1", labelText: "Indice 1" }],
      },
      {
        id: "nouvelle-ait",
        labelText: "Nouvelle AIT",
        icon: "add-circle",
        actionIcon: "add-circle",
      },
    ],
  },
];

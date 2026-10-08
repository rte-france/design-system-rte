export enum FicheEntiteTabsIds {
  PUISSANCES = "PUISSANCES",
  ECARTS = "ECARTS",
  MCO = "MCO",
}

export const ficheEntiteTabOptions = [
  {
    id: FicheEntiteTabsIds.PUISSANCES,
    label: "Puissance totale",
    panelId: "fiche-entite-panel-puissances",
  },
  {
    id: FicheEntiteTabsIds.ECARTS,
    label: "Mecanismes",
    panelId: "fiche-entite-panel-ecarts",
  },
  {
    id: FicheEntiteTabsIds.MCO,
    label: "Vue MCO",
    panelId: "fiche-entite-panel-mco",
  },
];

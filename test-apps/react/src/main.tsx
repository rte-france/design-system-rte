import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "@design-system-rte/react/style.css";
import "@design-system-rte/core/css/rte-fonts.css";
import "@design-system-rte/core/css/bleu_iceberg.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

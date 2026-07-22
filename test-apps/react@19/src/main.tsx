import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import "@design-system-rte/react/style.css";
import "@design-system-rte/core/css/bleu_iceberg.css";
import App from "./App.tsx";
import Product from "./product.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<div>Home Page</div>} />
          <Route path="/products/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

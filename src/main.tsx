import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppShell from "./AppShell";
import { createAppI18n } from "./lib/i18n";
import "./styles/theme.css";
import "./styles/global.css";

const i18n = createAppI18n();

ReactDOM.hydrateRoot(document.getElementById("root")!,
  <React.StrictMode>
    <AppShell i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppShell>
  </React.StrictMode>
);

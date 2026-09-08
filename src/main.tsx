import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppShell from "./AppShell";
import { createAppI18n } from "./lib/i18n";
import "./styles/theme.css";
import "./styles/global.css";
import "./styles/refresh.css";
import "./styles/blend.css";
const i18n = createAppI18n();
const application = (<React.StrictMode>
    <AppShell i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppShell>
  </React.StrictMode>);
const root = document.getElementById("root")!;
if (root.hasChildNodes()) {
    ReactDOM.hydrateRoot(root, application);
}
else {
    ReactDOM.createRoot(root).render(application);
}

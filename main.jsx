import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import { XpProvider } from "./context/XpContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <XpProvider>
      <App />
    </XpProvider>
  </React.StrictMode>
);
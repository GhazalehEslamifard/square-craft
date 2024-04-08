import { Global } from "@emotion/react";
import React from "react";
import { createRoot } from "react-dom/client";

import Application from "./application";
import reportWebVitals from "./reportWebVitals";
import { globalStyles } from "./styles";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Application />
  </React.StrictMode>,
);

reportWebVitals();

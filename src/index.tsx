import { Global } from "@emotion/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "@store";

import Application from "./application";
import reportWebVitals from "./reportWebVitals";
import { globalStyles } from "./styles";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Application />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();

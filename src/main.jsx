import React from "react";
import ReactDOM from "react-dom/client";

import store from "./app/store/store.js";
import { Provider } from "react-redux";

import "./imports.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

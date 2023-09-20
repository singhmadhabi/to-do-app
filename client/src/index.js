import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ApiContextProvider from "./contexts/ApiContext";
import ToastContextProvider from "./contexts/ToastContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContextProvider>
      <ApiContextProvider>
        <App />
      </ApiContextProvider>
    </ToastContextProvider>
  </React.StrictMode>
);

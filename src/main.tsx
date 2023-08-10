import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import RoutesSwitch from "./RoutesSwitch";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RoutesSwitch />
  </React.StrictMode>
);

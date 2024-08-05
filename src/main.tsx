import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import HardwareAccelerationCheck from "./HardwareAccelerationCheck";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HardwareAccelerationCheck>
      <App />
    </HardwareAccelerationCheck>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App.jsx";
import { StateProvider } from "./context/StateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);

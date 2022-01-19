import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";
import NameContextProvider from "./context/NameContext";

ReactDOM.render(
  <React.StrictMode>
    <Route>
      <NameContextProvider>
        <App />
      </NameContextProvider>
    </Route>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Sugar } from "react-preloaders2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <React.Fragment>
    <App />
    <Sugar color={"#d56c2d"} />
  </React.Fragment>
);

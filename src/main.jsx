import React from "react";
import ReactDOM from "react-dom/client";
import Board from "./components/Board";
import { observe } from "./components/Game";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

observe((knightPosition) =>
  root.render(
    <React.StrictMode>
      <Board knightPosition={knightPosition} />
    </React.StrictMode>
  )
);

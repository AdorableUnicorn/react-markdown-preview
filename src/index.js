import React from "react";
import Markdown from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="">
    <Markdown />
  </BrowserRouter>
);

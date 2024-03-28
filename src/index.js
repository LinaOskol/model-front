import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Alltabs from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Alltabs />
  </StrictMode>
);

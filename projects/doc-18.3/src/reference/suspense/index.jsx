import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "../../index.css";
import { A } from "./A";
import { C } from "./C";
import { B } from "./B";
import { D } from "./D";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
        <B />
        <C />
        <D />
    </StrictMode>,
);

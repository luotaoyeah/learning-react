import { StrictMode } from "react";
import "../../index.css";
import { createRoot } from "react-dom/client";
import C01 from "./01.tsx";

// https://redux.js.org/introduction/getting-started
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <C01 />
    </StrictMode>,
);

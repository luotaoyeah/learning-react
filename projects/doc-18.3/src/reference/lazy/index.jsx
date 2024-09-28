import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "../../index.css";
import C01 from "./01";

// https://react.dev/reference/react/lazy
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <C01 />
    </StrictMode>,
);

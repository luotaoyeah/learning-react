import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "../../index.css";
import A from "./A";

// https://react.dev/reference/react/useDeferredValue
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
    </StrictMode>,
);

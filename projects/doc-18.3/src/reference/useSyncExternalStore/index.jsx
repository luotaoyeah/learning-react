import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "../../index.css";
import C01 from "./01";
import C02 from "./02";

// https://react.dev/reference/react/useSyncExternalStore
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <C01 />
        <C02 />
    </StrictMode>,
);

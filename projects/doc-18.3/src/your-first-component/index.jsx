import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

import Profile, { Gallery } from "./Profile";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Profile />
        <Gallery />
    </StrictMode>,
);

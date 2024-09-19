import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

import Profile, { A } from "./Profile";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Profile />
        <A></A>
    </StrictMode>,
);

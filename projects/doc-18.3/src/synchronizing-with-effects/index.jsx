import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

function A() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("EFFECT");
    });

    return (
        <fieldset>
            <legend>A</legend>

            <div>{count}</div>
            <div>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    +
                </button>
            </div>
        </fieldset>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
    </StrictMode>,
);

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { CountProvider, useCount, useCountDispatch } from "./CountContext";

function A() {
    return (
        <fieldset>
            <legend>A</legend>

            <CountProvider>
                <B></B>
            </CountProvider>
        </fieldset>
    );
}

function B() {
    return (
        <fieldset>
            <legend>B</legend>

            <C></C>
        </fieldset>
    );
}

function C() {
    const count = useCount();
    const dispatch = useCountDispatch();

    return (
        <fieldset>
            <legend>C</legend>

            <div>
                <div>{count}</div>
                <div>
                    <button
                        onClick={() => {
                            dispatch({ type: "increment" });
                        }}
                    >
                        +
                    </button>
                    <button
                        onClick={() => {
                            dispatch({ type: "decrement" });
                        }}
                    >
                        -
                    </button>
                </div>
            </div>
        </fieldset>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
    </StrictMode>,
);

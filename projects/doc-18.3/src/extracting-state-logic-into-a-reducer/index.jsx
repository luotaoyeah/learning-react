import React, { StrictMode, useReducer, useState } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { useImmerReducer } from "use-immer";

function A() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

function countReducer(state, action) {
    switch (action.type) {
        case "increment": {
            return state + 1;
        }

        case "decrement": {
            return state - 1;
        }

        default: {
            throw new Error("NOT SUPPORTED");
        }
    }
}

function B() {
    const [count, dispatch] = useReducer(countReducer, 0);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}

function countImmerReducer(draft, action) {
    switch (action.type) {
        case "increment": {
            draft.value += 1;
            break;
        }

        case "decrement": {
            draft.value -= 1;
            break;
        }

        default: {
            throw new Error("NOT SUPPORTED");
        }
    }
}

function C() {
    const [count, dispatch] = useImmerReducer(countImmerReducer, { value: 0 });

    return (
        <div>
            <div>{count.value}</div>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
        <B />
        <C />
    </StrictMode>,
);

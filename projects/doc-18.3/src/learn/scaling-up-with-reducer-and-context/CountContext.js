import React, { createContext, useContext, useReducer } from "react";

export const CountContext = createContext(0);
export const CountDispatchContext = createContext(null);

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

export function CountProvider({ children }) {
    const [count, dispatch] = useReducer(countReducer, 0);

    return (
        <CountContext.Provider value={count}>
            <CountDispatchContext.Provider value={dispatch}>{children}</CountDispatchContext.Provider>
        </CountContext.Provider>
    );
}

// Functions whose names start with `use` are called custom hooks. Note that they must start with `use`.
// Hooks can only be called in component functions and other hooks (including custom hooks), and they must be called at the top level.
export function useCount() {
    return useContext(CountContext);
}

export function useCountDispatch() {
    return useContext(CountDispatchContext);
}

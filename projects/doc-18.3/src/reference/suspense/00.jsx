import { lazy } from "react";

function _X() {
    return (
        <fieldset>
            <legend>X</legend>
        </fieldset>
    );
}

export const X1 = lazy(() => new Promise((resolve) => setTimeout(() => resolve({ default: _X }), 1000)));

export const X2 = lazy(() => new Promise((resolve) => setTimeout(() => resolve({ default: _X }), 2000)));

export const X3 = lazy(() => new Promise((resolve) => setTimeout(() => resolve({ default: _X }), 3000)));

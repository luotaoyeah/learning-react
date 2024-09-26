import { createRoot } from "react-dom/client";
import { lazy, StrictMode, Suspense } from "react";
import "../../index.css";

// https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading
function A() {
    return (
        <fieldset>
            <legend>A</legend>

            <div>B IS LOADING, PLEASE WAIT.</div>
        </fieldset>
    );
}

function _B() {
    return (
        <fieldset>
            <legend>B</legend>

            <div>B</div>
        </fieldset>
    );
}

// Use lazy() to load a component lazily,
const B = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve({ default: _B });
            }, 2000);
        }),
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Suspense fallback={<A />}>
            <B />
        </Suspense>
    </StrictMode>,
);

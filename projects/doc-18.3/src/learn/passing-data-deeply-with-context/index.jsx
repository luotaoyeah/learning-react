import React, { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";
import { SomeContext } from "./SomeContext";

function A() {
    // 如果上级组件中找不到对应的 context, 则会使用该 context 的默认值,
    const some = useContext(SomeContext);

    return (
        <fieldset>
            <legend>A</legend>

            <div>{some}</div>

            <SomeContext.Provider value={"SOME CONTEXT"}>
                <B />
            </SomeContext.Provider>
        </fieldset>
    );
}

function B() {
    return (
        <fieldset>
            <legend>B</legend>

            <C />
        </fieldset>
    );
}

function C() {
    // 使用 useContext() 使用一个 context,
    const some = useContext(SomeContext);

    return (
        <fieldset>
            <legend>C</legend>

            <div>{some}</div>
        </fieldset>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
    </StrictMode>,
);

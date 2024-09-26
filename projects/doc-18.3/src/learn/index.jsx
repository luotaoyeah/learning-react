import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

// https://react.dev/learn#displaying-data
function A() {
    return (
        <fieldset>
            <legend>A</legend>

            <div>属性 data-b="" 后面用了双引号, 则双引号里面的所有内容都被当成字符串, 里面的 {} 不会被解析.</div>
            <div data-a={"a"} data-b="{'b'}"></div>
        </fieldset>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
    </StrictMode>,
);

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";

function A() {
    console.log("A()");
    return <div></div>;
}

createRoot(document.getElementById("root")).render(
    /* 在严格模式下, 在开发环境时, 每个组件函数在渲染的时候会执行两次, 这样可以验证该组件是否是纯函数, */
    <StrictMode>
        <A />
    </StrictMode>,
);

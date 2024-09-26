import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";

function A() {
    // 返回的 JSX 中不能包含多个根节点, 如果有多个节点, 需要用一个根节点把他们包裹起来,
    // 可以用一个特殊的节点 <></>, 称之为 fragment, <></> 不会渲染到最终的 HTML 中,
    return (
        <>
            {/* JSX 本质上是 JS, 因此标签的属性名需要使用 camelCase 命名方式, 而不是 HTML attribute 的 kebab-case 命名方式, */}
            {/* JSX 中标签的属性名实际上对应的是 DOM 对象的 property, 而不是 HTML 的 attribute, */}
            <div className={"a"}>A</div>
            <div>A</div>
        </>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A></A>
    </StrictMode>,
);

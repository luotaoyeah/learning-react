import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";

// JSX 中可以通过花括号{}嵌入JS表达式
function A() {
    // 有两个地方可以用花括号:
    //   1. 在标签中间的文本中
    //   2. 在标签属性名的=后面

    const a = "LUOTAO";

    return <div data-a={a}>NAME: {a}</div>;
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
    </StrictMode>,
);

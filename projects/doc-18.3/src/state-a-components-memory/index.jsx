import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

function A() {
    // useState() 返回一个数组, 包含两个元素, 第一个元素表示状态数据, 第二个元素表示用来修改该状态数据的函数,
    const [index, setIndex] = useState(0);

    // hook 函数必须在组件的最顶层调用,

    return (
        <div>
            <button
                onClick={() => {
                    setIndex((i) => i + 1);
                }}
            >
                {index}
            </button>
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
    </StrictMode>,
);

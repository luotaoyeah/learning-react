import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

function A() {
    // useState() 返回一个数组, 包含两个元素, 第一个元素表示状态数据, 第二个元素表示用来修改该状态数据的函数,
    // useState() 是根据它的调用顺序来确定每次调用时对应的是哪个状态数据,
    const [index, setIndex] = useState(0);

    console.log("A()", index);

    // hook 函数必须在组件的最顶层调用,

    // 一个组件的多个实例中, 他们的 state 是相互独立的,

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
        <A />
    </StrictMode>,
);

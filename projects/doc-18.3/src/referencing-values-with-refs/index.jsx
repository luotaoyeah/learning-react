import React, { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

function A() {
    // 使用 useRef() 声明一个 ref,
    const ref01 = useRef(0);

    // 通过 current 属性访问 ref 中的数据,
    console.log(ref01.current);

    // ref 跟 state 的区别:
    //   可以直接修改 ref.current 的值,
    //   修改 ref.current 的值不会触发组件的重新渲染,

    // 一般使用 ref 存放对 DOM 元素的引用,

    return (
        <fieldset>
            <legend>A</legend>

            <div>{new Date().toISOString()}</div>
            <div>
                <button
                    onClick={() => {
                        ref01.current += 1;
                        alert(ref01.current);
                    }}
                >
                    +
                </button>
            </div>
        </fieldset>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
    </StrictMode>,
);

import React, { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

function A() {
    const inputRef01 = useRef(null);
    const inputRef02 = useRef(null);

    return (
        <fieldset>
            <legend>A</legend>

            <div>
                {/* 使用 ref 获取 DOM 元素的引用, */}
                <input ref={inputRef01} type="text" />

                {/* 也可以使用 ref callback 的方式, 即传一个函数给标签的 ref 属性, 函数的参数就是该 DOM 元素的引用, */}
                <input
                    ref={(value) => {
                        inputRef02.current = value;
                    }}
                    type="text"
                />
            </div>
            <div>
                <button
                    onClick={() => {
                        inputRef01.current.focus();
                    }}
                >
                    FOCUS 01
                </button>
                <button
                    onClick={() => {
                        inputRef02.current.focus();
                    }}
                >
                    FOCUS 02
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

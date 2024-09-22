import React, { forwardRef, StrictMode, useImperativeHandle, useRef } from "react";
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

const C = forwardRef((props, ref) => {
    // 在 forwardRef() 组件中, 组件可以直接将传进来的 ref 赋值给里面某个 HTML 标签, 从而让父组件获取对该 HTML 标签的引用,
    return (
        <fieldset>
            <legend>C</legend>

            <div>
                <input ref={ref} type="text" />
            </div>
        </fieldset>
    );
});

const D = forwardRef((props, ref) => {
    const myRef = useRef(null);

    // 在 forwardRef() 组件中, 组件也可以使用 useImperativeHandle() 方法来限制父组件通过 ref 可以获取到的实际数据,
    useImperativeHandle(ref, () => {
        // 父组件通过 ref 获取到的是下面返回的这个对象,
        return {
            focus: () => {
                myRef.current.focus();
            },
        };
    });

    return (
        <fieldset>
            <legend>D</legend>

            <div>
                <input ref={myRef} type="text" />
            </div>
        </fieldset>
    );
});

function B() {
    const inputRef01 = useRef(null);
    const inputRef02 = useRef(null);

    // ref 用在 HTML 标签上可以直接获取到 DOM 元素的引用, 但是 ref 用在组件上默认获取到的是 null, 除非组件通过 forwardRef() 来明确支持 ref 的使用,

    return (
        <fieldset>
            <legend>B</legend>

            <div>
                <C ref={inputRef01}></C>

                <D ref={inputRef02}></D>
            </div>

            <div>
                <button
                    onClick={() => {
                        inputRef01.current.focus();
                    }}
                >
                    FOCUS C
                </button>

                <button
                    onClick={() => {
                        inputRef02.current.focus();
                    }}
                >
                    FOCUS D
                </button>
            </div>
        </fieldset>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
        <B />
    </StrictMode>,
);

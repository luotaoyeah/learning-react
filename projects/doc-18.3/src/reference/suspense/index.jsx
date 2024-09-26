import { createRoot } from "react-dom/client";
import { lazy, StrictMode, Suspense } from "react";
import "../../index.css";

// https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading
function _B() {
    return (
        <fieldset>
            <legend>B</legend>
        </fieldset>
    );
}

// 使用 lazy() 延迟加载一个组件,
const B1 = lazy(() => new Promise((resolve) => setTimeout(() => resolve({ default: _B }), 1000)));

const B2 = lazy(() => new Promise((resolve) => setTimeout(() => resolve({ default: _B }), 2000)));

const B3 = lazy(() => new Promise((resolve) => setTimeout(() => resolve({ default: _B }), 3000)));

// https://react.dev/reference/react/Suspense#revealing-content-together-at-once
function C({ children }) {
    return (
        <fieldset>
            <legend>C</legend>

            {children}
        </fieldset>
    );
}

// https://react.dev/reference/react/Suspense#revealing-nested-content-as-it-loads
function D() {}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Suspense
            fallback={
                <fieldset>
                    <legend>LOADING</legend>
                </fieldset>
            }
        >
            <B1 />
        </Suspense>

        <hr />

        <div>// Suspense 下面只要有一个正在加载的组件, 即使它嵌套的很深, 则该 Suspnese 也会显示 fallback 内容, 直到所有的子孙组件都加载完成,</div>
        <Suspense
            fallback={
                <fieldset>
                    <legend>LOADING</legend>
                </fieldset>
            }
        >
            <C />
            <C>
                <B2 />
            </C>
        </Suspense>

        <hr />
        <div>// Suspense 可以嵌套, 每个加载中的组件会被离他最近的 Suspense 限制, 不会继续触发外层的 Suspense, 所以有 Suspense boundary 的说法,</div>
        <div>// 对于外层的 Suspense 来说, 内部的 Suspense 不属于加载中的组件,</div>
        <Suspense
            fallback={
                <fieldset>
                    <legend>LOADING A</legend>
                </fieldset>
            }
        >
            <B2 />

            <Suspense
                fallback={
                    <fieldset>
                        <legend>LOADING B</legend>
                    </fieldset>
                }
            >
                <B3 />
            </Suspense>
        </Suspense>
    </StrictMode>,
);

import { createRoot } from "react-dom/client";
import { lazy, StrictMode, Suspense } from "react";
import "../../index.css";

// https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading
function Loading() {
    return (
        <fieldset>
            <legend>LOADING, PLEASE WAIT</legend>
        </fieldset>
    );
}

function _B() {
    return (
        <fieldset>
            <legend>B</legend>
        </fieldset>
    );
}

// 使用 lazy() 延迟加载一个组件,
const B = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve({ default: _B });
            }, 2000);
        }),
);

// https://react.dev/reference/react/Suspense#revealing-content-together-at-once
function C({ children }) {
    return (
        <fieldset>
            <legend>C</legend>

            {children}
        </fieldset>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Suspense fallback={<Loading />}>
            <B />
        </Suspense>

        <hr />

        <div>// Suspense 下面只要有一个正在加载的组件, 即使它嵌套的很深, 则该 Suspnese 也会显示 fallback 内容, 直到所有的子孙组件都加载完成,</div>
        <Suspense fallback={<Loading />}>
            <C />
            <C>
                <B />
            </C>
            <C />
        </Suspense>
    </StrictMode>,
);

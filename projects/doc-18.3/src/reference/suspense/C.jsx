import { Suspense } from "react";
import { X2, X3 } from "./00";

// https://react.dev/reference/react/Suspense#revealing-nested-content-as-it-loads
export function C() {
    return (
        <fieldset style={{ borderColor: "red" }}>
            <legend>C</legend>

            <div>// Suspense 可以嵌套, 每个加载中的组件会被离他最近的 Suspense 限制, 不会继续触发外层的 Suspense, 所以有 Suspense boundary 的说法,</div>
            <div>// 对于外层的 Suspense 来说, 内部的 Suspense 不属于加载中的组件,</div>
            <Suspense
                fallback={
                    <fieldset>
                        <legend>LOADING 01</legend>
                    </fieldset>
                }
            >
                <X2 />

                <Suspense
                    fallback={
                        <fieldset>
                            <legend>LOADING 02</legend>
                        </fieldset>
                    }
                >
                    <X3 />
                </Suspense>
            </Suspense>
        </fieldset>
    );
}

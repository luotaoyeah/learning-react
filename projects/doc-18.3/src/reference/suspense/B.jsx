import { Suspense } from "react";
import { X2 } from "./00";

function B01({ children }) {
    return (
        <fieldset>
            <legend>B01</legend>

            {children}
        </fieldset>
    );
}

// https://react.dev/reference/react/Suspense#revealing-content-together-at-once
export function B() {
    return (
        <fieldset style={{ border: "1px solid blue" }}>
            <legend>B</legend>

            <div>// Suspense 下面只要有一个正在加载的组件, 即使它嵌套的很深, 则该 Suspnese 也会显示 fallback 内容, 直到所有的子孙组件都加载完成,</div>
            <Suspense
                fallback={
                    <fieldset>
                        <legend>LOADING</legend>
                    </fieldset>
                }
            >
                <B01 />
                <B01>
                    <X2 />
                </B01>
            </Suspense>
        </fieldset>
    );
}

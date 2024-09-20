import React, { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

function A() {
    // <></> 是 <Fragment></Fragment> 的语法糖,
    // 如果要设置 key 属性, 则必须使用 <Fragment></Fragment>,
    // 使用 Fragment 需要先从 react 的包中引入,
    return (
        <div>
            <>
                <div>1</div>
                <div>2</div>
            </>

            <Fragment key={1}>
                <div>3</div>
                <div>4</div>
            </Fragment>
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
    </StrictMode>,
);

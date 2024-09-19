import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

// 组件函数可以接受一个 props 参数,
function A(props) {
    return <div>A: {props.myText}</div>;
}

// 可以使用 destructure 的方式接收参数,
function B({ myText }) {
    return <div>B: {myText}</div>;
}

function C({ children }) {
    return (
        <div>
            <span>C: </span>
            <span>{children}</span>
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A myText={"1"} />
        <A myText={"2"} />

        <hr />

        <B myText={"3"} />
        <B myText={"4"} />

        <hr />

        {/* 将一个对象以展开(spread)的形式传给组件, 表示将该对象的每个属性都作为一个 prop 传给组件, */}
        <B {...{ myText: 5 }}></B>
        <B {...{ myText: 6 }}></B>

        <hr />

        {/* 组件标签中间的所有内容, 会传给一个名为 children 的 prop, */}
        <C>7</C>
        <C>8</C>
    </StrictMode>,
);

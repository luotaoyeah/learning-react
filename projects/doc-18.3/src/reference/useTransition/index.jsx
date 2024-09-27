import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "../../index.css";
import A from "./A";

// https://react.dev/reference/react/useTransition
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
    </StrictMode>,
);

// 我对 startTransition() 的理解:

//   在使用 startTransition() 之前: 我修改了一个状态数据, react 要因此去更新界面, 但是这个新的界面包含一个加载中的组件, 此时整个界面会卡住, 去等待这个组件加载完成,
//   在使用 startTransition() 之后: 我修改了一个状态数据, react 要因此去更新界面, 但是这个新的界面包含一个加载中的组件, 此时 react 只会去加载这个组件, 但是不会触发界面更新, 此时界面不会卡住,
//     当组件加载完成后 react 会重新根据状态判断是否需要更新界面,

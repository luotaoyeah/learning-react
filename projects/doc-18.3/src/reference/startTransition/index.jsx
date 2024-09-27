import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "../../index.css";

// https://react.dev/reference/react/startTransition
createRoot(document.getElementById("root")).render(<StrictMode></StrictMode>);

// 在某些不能使用 useTransition() 的地方, 比如条件语句中, 可以使用 startTransition(),
// 它不像 useTransition() 会返回一个 isPending 状态数据,

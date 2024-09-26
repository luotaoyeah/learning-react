import { Suspense, useState, useTransition } from "react";
import { X5 } from "./00";

// https://react.dev/reference/react/Suspense#preventing-already-revealed-content-from-hiding
export function D() {
    const [currentTab, setCurrentTab] = useState("X0");
    const [isPending, startTransition] = useTransition();

    // 我对 startTransition() 的理解:
    //   在使用 startTransition() 之前: 我修改了一个状态数据, react 要因此去更新界面, 但是这个新的界面包含一个加载中的组件, 此时整个界面会卡住, 去等待这个组件加载完成,
    //   在使用 startTransition() 之后: 我修改了一个状态数据, react 要因此去更新界面, 但是这个新的界面包含一个加载中的组件, 此时 react 只会去加载这个组件, 但是不会触发界面更新, 此时界面不会卡住,
    //     当组件加载完成后 react 会重新根据状态判断是否需要更新界面,

    return (
        <fieldset style={{ borderColor: "blue" }}>
            <legend>D</legend>

            <Suspense
                fallback={
                    <fieldset>
                        <legend>LOADING 01</legend>
                    </fieldset>
                }
            >
                <div>
                    <button
                        onClick={() => {
                            setCurrentTab("X0");
                        }}
                    >
                        X0
                    </button>

                    <button
                        onClick={() => {
                            // 将更新状态的代码放到 startTransition() 的回调函数中,
                            startTransition(() => {
                                setCurrentTab("X5");
                            });
                        }}
                    >
                        {isPending ? "正在加载..." : "X5"}
                    </button>
                </div>

                {currentTab === "X0" ? (
                    <fieldset>
                        <legend>X0</legend>
                    </fieldset>
                ) : (
                    <X5 />
                )}
            </Suspense>
        </fieldset>
    );
}

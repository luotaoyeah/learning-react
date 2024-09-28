import { lazy, Suspense, useState } from "react";
import { __LOG__ } from "../../utils";

function A() {
    return (
        <fieldset style={{ borderColor: "red" }}>
            <legend>A</legend>
        </fieldset>
    );
}

// 使用 lazy() 延迟加载一个组件, 则当该组件第一次被渲染时才会被加载,
const B = lazy(() => {
    __LOG__({ message: "B() 被加载了", color: "blue" });

    return new Promise((resolve) =>
        setTimeout(() => {
            resolve({
                default: () => {
                    __LOG__({ message: "B() 被渲染了", color: "green" });

                    return (
                        <fieldset style={{ borderColor: "blue" }}>
                            <legend>B</legend>
                        </fieldset>
                    );
                },
            });
        }, 2000),
    );
});

export default function () {
    const [isShowB, setIsShowB] = useState(false);

    return (
        <fieldset style={{ borderColor: "red" }}>
            <legend>01</legend>

            <div>
                <button
                    onClick={() => {
                        setIsShowB(!isShowB);
                    }}
                >
                    TOGGLE B
                </button>
            </div>

            <div>
                <A />
                {isShowB && (
                    <Suspense fallback={"LOADING"}>
                        <B />
                    </Suspense>
                )}
            </div>
        </fieldset>
    );
}

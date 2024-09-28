import { __LOG__ } from "../../utils";
import { createContext, memo, useContext, useState } from "react";

const ZContext = createContext(0);

// 默认情况下, 当父组件渲染时, 所有的子组件也会渲染,
// 使用 memo() 包装之后, 当父组件渲染时, 只要子组件的 props 不变, 子组件就不会渲染,
const B = memo(({ x }) => {
    __LOG__({ message: "B() 被渲染了", color: "red" });

    // 当子组件自己的 state 变化时, 依然触发子组件的渲染,
    const [y, setY] = useState(0);

    // 当子组件依赖的 context 变化时, 依然会触发子组件的渲染,
    const z = useContext(ZContext);

    return (
        <fieldset style={{ borderColor: "green" }}>
            <legend>B</legend>

            <div>x: {x}</div>
            <div>z: {z}</div>
            <div>
                <button
                    onClick={() => {
                        setY(y + 1);
                    }}
                >
                    y: {y}
                </button>
            </div>
        </fieldset>
    );
});

function A() {
    __LOG__({ message: "A() 被渲染了", color: "blue" });

    const [count, setCount] = useState(0);
    const [x, setX] = useState(0);
    const [z, setZ] = useState(0);

    return (
        <fieldset style={{ borderColor: "blue" }}>
            <legend>A</legend>

            <div>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    x: {count}
                </button>
                <button
                    onClick={() => {
                        setZ(z + 1);
                    }}
                >
                    z: {z}
                </button>
            </div>

            <ZContext.Provider value={z}>
                <B x={x} />
            </ZContext.Provider>
        </fieldset>
    );
}

export default function () {
    return (
        <fieldset style={{ borderColor: "red" }}>
            <legend>01</legend>

            <A />
        </fieldset>
    );
}

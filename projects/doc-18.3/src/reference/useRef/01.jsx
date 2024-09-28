import { useRef, useState } from "react";
import { __LOG__ } from "../../utils";

function A() {
    __LOG__({ message: "A() 被渲染了", color: "blue" });

    const [count, setCount] = useState(0);
    const ref01 = useRef(0);

    __LOG__({ message: ref01.current, color: "red" });

    return (
        <fieldset style={{ borderColor: "blue" }}>
            <legend>A</legend>

            <div>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    count: {count}
                </button>

                <button
                    onClick={() => {
                        // 可以直接修改 ref 的 current 属性, 并且不会触发渲染,
                        ref01.current += 1;
                    }}
                >
                    INCREMENT REF01
                </button>
            </div>
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

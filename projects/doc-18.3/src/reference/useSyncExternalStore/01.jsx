import { useSyncExternalStore } from "react";
import { add, getSnapshot, subscribe } from "./01.01";
import { __LOG__ } from "../../utils";

export default function () {
    __LOG__({ message: "A() 被渲染了", color: "purple   " });

    const todos = useSyncExternalStore(subscribe, getSnapshot);

    return (
        <fieldset style={{ borderColor: "red" }}>
            <legend>01</legend>

            <div>
                <button
                    onClick={() => {
                        add();
                    }}
                >
                    ADD
                </button>
            </div>

            <ul>
                {todos.map((i) => (
                    <li key={i.id}>{i.text}</li>
                ))}
            </ul>
        </fieldset>
    );
}

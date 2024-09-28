import { useTodo } from "./02.01";
import { __LOG__ } from "../../utils";

// https://react.dev/reference/react/useSyncExternalStore#extracting-the-logic-to-a-custom-hook
export default function () {
    __LOG__({ message: "02() 被渲染了", color: "purple" });

    const [todos, add] = useTodo();

    return (
        <fieldset style={{ borderColor: "red" }}>
            <legend>02</legend>

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

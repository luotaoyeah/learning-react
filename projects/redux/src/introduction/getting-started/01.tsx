import { useState } from "react";
import { decrement, increment, store } from "./01.01.tsx";

export default function C01() {
    const [count, setCount] = useState(store.getState().value);

    store.subscribe(() => {
        setCount(store.getState().value);
    });

    return (
        <fieldset>
            <legend>01</legend>

            <div>{count}</div>
            <div>
                <button
                    onClick={() => {
                        store.dispatch(increment());
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        store.dispatch(decrement());
                    }}
                >
                    -
                </button>
            </div>
        </fieldset>
    );
}

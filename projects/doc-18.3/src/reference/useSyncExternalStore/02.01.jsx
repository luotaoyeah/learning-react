import { __LOG__ } from "../../utils";
import { useSyncExternalStore } from "react";

let todos = [];
let id = 0;
let listeners = [];

function emit() {
    listeners.forEach((listener) => listener());
}

function add() {
    id = id + 1;

    todos = [...todos, { id: id, text: `TODO ${id}` }];

    emit();
}

function subscribe(listener) {
    __LOG__({ message: "02() | subscribe() 被调用了", color: "blue" });

    listeners.push(listener);

    return () => {
        listeners = listeners.filter((i) => i !== listener);
    };
}

function getSnapshot() {
    __LOG__({ message: "02() | getSnapshot() 被调用了", color: "red" });

    return todos;
}

/**
 * 把 useSyncExternalStore() 包装到一个 custom hook 中,
 */
export function useTodo() {
    return [useSyncExternalStore(subscribe, getSnapshot), add];
}

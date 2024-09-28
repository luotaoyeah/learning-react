import { __LOG__ } from "../../utils";

let todos = [];
let id = 0;
let listeners = [];

function emit() {
    listeners.forEach((listener) => listener());
}

export function add() {
    id = id + 1;

    todos = [...todos, { id: id, text: `TODO ${id}` }];

    emit();
}

/**
 * subscribe() 函数接收一个参数(我们叫它 listener), listener 是一个无参函数, 是由 react 传给外部的,
 * 当外部数据变更时, 外部需要调用 listener, 这样 react 就会去调用 getSnapshot() 函数获取最新数据, 然后判断数据是否有变,
 *
 * @param listener
 */
export function subscribe(listener) {
    __LOG__({ message: "01() | subscribe() 被调用了", color: "blue" });

    listeners.push(listener);

    // subscribe() 函数需要返回一个函数, 称为 unsubscriber, 用于退订,
    return () => {
        listeners = listeners.filter((i) => i !== listener);
    };
}

/**
 * getSnapshot() 函数是一个无参函数, 由 react 调用, 用来获取最新数据,
 */
export function getSnapshot() {
    __LOG__({ message: "01() | getSnapshot() 被调用了", color: "red" });

    return todos;
}

import React, { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

function A() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("A | useEffect()");
    });

    return (
        <fieldset>
            <legend>A</legend>

            <div>{count}</div>
            <div>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    +
                </button>
            </div>
        </fieldset>
    );
}

function B() {
    const [isPlay, setIsPlay] = useState(false);
    const [text, setText] = useState("");
    const videoRef = useRef(null);

    // 当没有指定 dependencies 时, 每次 render 之后都会执行,
    // 当 dependencies 为 [] 时, 只会在首次 mount 之后执行一次,
    // 当 dependencies 不为空时, 当里面任意一个 dependency 发生变更时, 才会执行,
    //   通过 Object.is() 来判断是否发生了变更,
    useEffect(() => {
        console.log("B | useEffect()");
        if (isPlay) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isPlay]);

    return (
        <fieldset>
            <legend>B</legend>

            <div>
                <video autoPlay={false} ref={videoRef} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"></video>
            </div>
            <div>
                <button
                    onClick={() => {
                        setIsPlay(!isPlay);
                    }}
                >
                    {isPlay ? "PAUSE" : "PLAY"}
                </button>
            </div>

            <div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </fieldset>
    );
}

function C() {
    // 在开发环境, 组件会 mount 两次,
    console.log("C()");

    useEffect(() => {
        console.log("C | useEffect()");

        // useEffect() 中返回一个函数, 这个函数称为 destructor,
        // destructor 的返回值必须为 void,
        // destructor 会在下次执行 effect 之前执行, 并且会在组件 unmount 时执行一次,
        return () => {
            console.log("C | useEffect() | destroy");
        };
    }, []);

    return (
        <fieldset>
            <legend>C</legend>

            <div></div>
        </fieldset>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
        <B />
        <C />
    </StrictMode>,
);

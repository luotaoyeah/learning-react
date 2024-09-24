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

    // 当没有指定 dependencies 时, 每次 render 之后都会触发,
    useEffect(() => {
        console.log("B | useEffect()");
        if (isPlay) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    });

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

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <A />
        <B />
    </StrictMode>,
);

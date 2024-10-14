import React, { StrictMode, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../../index.css';
import { C03 } from './03.tsx';
import { C04 } from './04.tsx';

function C01() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('C01 | useEffect()');
    });

    return (
        <fieldset>
            <legend>C01</legend>

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

function C02() {
    const [isPlay, setIsPlay] = useState(false);
    const [text, setText] = useState('');
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // 当没有指定 dependencies 时, 每次 render 之后都会执行,
    // 当 dependencies 为 [] 时, 只会在首次 mount 之后执行一次,
    // 当 dependencies 不为空时, 当里面任意一个 dependency 发生变更时, 才会执行,
    //   通过 Object.is() 来判断是否发生了变更,
    useEffect(() => {
        console.log('C02 | useEffect()');
        if (isPlay) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    }, [isPlay]);

    return (
        <fieldset>
            <legend>C02</legend>

            <div>
                <video autoPlay={false} ref={videoRef} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"></video>
            </div>
            <div>
                <button
                    onClick={() => {
                        setIsPlay(!isPlay);
                    }}
                >
                    {isPlay ? 'PAUSE' : 'PLAY'}
                </button>
            </div>

            <div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </fieldset>
    );
}

// https://react.dev/learn/synchronizing-with-effects
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <C01 />
        <C02 />
        <C03 />
        <C04 />
    </StrictMode>,
);

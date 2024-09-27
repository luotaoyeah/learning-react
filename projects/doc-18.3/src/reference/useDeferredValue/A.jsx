import { memo, useDeferredValue, useState } from "react";

/**
 * 模拟加载很慢的组件.
 */
function B01({ text }) {
    const now = performance.now();
    while (performance.now() - now < 1) {}

    return <li>{text}</li>;
}

const A = memo(({ text }) => {
    let items = [];

    for (let i = 0; i < 1000; i++) {
        items.push(<B01 key={i} text={text} />);
    }

    return <ul>{items}</ul>;
});

export default function () {
    const [text, setText] = useState("");
    const deferredText = useDeferredValue(text);

    return (
        <fieldset>
            <legend>A</legend>

            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
            </div>

            <A text={deferredText}></A>
        </fieldset>
    );
}

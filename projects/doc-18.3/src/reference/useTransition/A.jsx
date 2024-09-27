import { useState, useTransition } from "react";

/**
 * 模拟加载很慢的组件.
 */
function B01() {
    const now = performance.now();
    while (performance.now() - now < 1) {}

    return <div>B</div>;
}

function A() {
    return <div>A</div>;
}

function B() {
    let items = [];
    for (let i = 0; i < 1000; i++) {
        items.push(<B01 key={i} />);
    }

    return <div>{items}</div>;
}

function C() {
    return <div>C</div>;
}

function TabButton({ isActive, children, onClick }) {
    return (
        <button
            style={{ margin: "0 3px", borderColor: isActive ? "red" : "black", color: isActive ? "red" : "black" }}
            onClick={() => {
                if (isActive) {
                    return;
                }

                onClick();
            }}
        >
            {children}
        </button>
    );
}

// https://react.dev/reference/react/useTransition#marking-a-state-update-as-a-non-blocking-transition
export default function () {
    const [tab, setTab] = useState("A");
    const [isPending, startTransition] = useTransition();

    return (
        <fieldset style={{ borderColor: "red" }}>
            <legend>A</legend>

            <fieldset>
                <legend>
                    <TabButton isActive={tab === "A"} onClick={() => setTab("A")}>
                        A
                    </TabButton>
                    <TabButton
                        isActive={tab === "B"}
                        onClick={() =>
                            startTransition(() => {
                                setTab("B");
                            })
                        }
                    >
                        {isPending ? "LOADING" : "B"}
                    </TabButton>
                    <TabButton isActive={tab === "C"} onClick={() => setTab("C")}>
                        C
                    </TabButton>
                </legend>

                {tab === "A" && <A />}
                {tab === "B" && <B />}
                {tab === "C" && <C />}
            </fieldset>
        </fieldset>
    );
}

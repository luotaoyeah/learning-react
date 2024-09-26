import { Suspense, useState, useTransition } from "react";
import { X5 } from "./00";

// https://react.dev/reference/react/Suspense#preventing-already-revealed-content-from-hiding
export function D() {
    const [currentTab, setCurrentTab] = useState("X0");
    const [isPending, startTransition] = useTransition();

    return (
        <fieldset style={{ borderColor: "blue" }}>
            <legend>D</legend>

            <Suspense
                fallback={
                    <fieldset>
                        <legend>LOADING 01</legend>
                    </fieldset>
                }
            >
                <div>
                    <button
                        onClick={() => {
                            setCurrentTab("X0");
                        }}
                    >
                        X0
                    </button>

                    <button
                        onClick={() => {
                            startTransition(() => {
                                setCurrentTab("X5");
                            });
                        }}
                    >
                        {isPending ? "正在加载..." : "X5"}
                    </button>
                </div>

                {currentTab === "X0" ? (
                    <fieldset>
                        <legend>X0</legend>
                    </fieldset>
                ) : (
                    <X5 />
                )}
            </Suspense>
        </fieldset>
    );
}

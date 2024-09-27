import { Suspense } from "react";
import { X1 } from "./00";

// https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading
export function A() {
    return (
        <fieldset style={{ borderColor: "red" }}>
            <legend>A</legend>

            <Suspense
                fallback={
                    <fieldset>
                        <legend>LOADING</legend>
                    </fieldset>
                }
            >
                <X1 />
            </Suspense>
        </fieldset>
    );
}

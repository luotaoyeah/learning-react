import { lazy } from "react";

// 使用 lazy() 模拟组件的延迟加载,

export const X1 = lazy(
    () =>
        new Promise((resolve) =>
            setTimeout(
                () =>
                    resolve({
                        default: function () {
                            return (
                                <fieldset>
                                    <legend>X1</legend>
                                </fieldset>
                            );
                        },
                    }),
                1000,
            ),
        ),
);

export const X2 = lazy(
    () =>
        new Promise((resolve) =>
            setTimeout(
                () =>
                    resolve({
                        default: function () {
                            return (
                                <fieldset>
                                    <legend>X2</legend>
                                </fieldset>
                            );
                        },
                    }),
                2000,
            ),
        ),
);

export const X3 = lazy(
    () =>
        new Promise((resolve) =>
            setTimeout(
                () =>
                    resolve({
                        default: function () {
                            return (
                                <fieldset>
                                    <legend>X3</legend>
                                </fieldset>
                            );
                        },
                    }),
                3000,
            ),
        ),
);

export const X5 = lazy(() => {
    console.log("X5 | 000");

    return new Promise((resolve) =>
        setTimeout(
            () =>
                resolve({
                    default: function () {
                        console.log("X5 | X5()");

                        return (
                            <fieldset>
                                <legend>X5</legend>
                            </fieldset>
                        );
                    },
                }),
            5000,
        ),
    );
});

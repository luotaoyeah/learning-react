import { useEffect, useState } from 'react';
import { __LOG__ } from '../../utils.tsx';

export function A() {
    __LOG__({ message: 'C04 | A | render', color: 'red' });

    const [count, setCount] = useState(1);

    // 下面这个 effect 模拟了 mounted 和 unmounted 事件,
    useEffect(() => {
        __LOG__({ message: 'C04 | A | mounted' });

        return () => {
            __LOG__({ message: 'C04 | A | unmounted' });
        };
    }, []);

    return (
        <fieldset>
            <legend>A</legend>

            <div>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    {count}
                </button>
            </div>
        </fieldset>
    );
}

export function C04() {
    __LOG__({ message: 'C04 | render', color: 'red' });

    const [isVisible, setIsVisible] = useState(true);

    return (
        <fieldset>
            <legend>C04</legend>

            <div>
                <button
                    onClick={() => {
                        setIsVisible((value) => !value);
                    }}
                >
                    切换显示
                </button>
            </div>

            {isVisible && <A />}
        </fieldset>
    );
}

import { useEffect, useState } from 'react';
import { __LOG__ } from '../../utils.tsx';

// https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed
export default function () {
    // 在开发环境, 组件会 mount 两次,
    __LOG__({ message: 'C03 | render', color: 'red' });

    const [count, setCount] = useState(1);

    useEffect(() => {
        __LOG__({ message: 'C03 | useEffect()', color: 'green' });

        // useEffect() 中返回一个函数, 这个函数称为 destructor,
        // destructor 的返回值必须为 void,
        // destructor 会在下次执行 effect 之前执行, 并且会在组件 unmount 时执行一次,
        return () => {
            __LOG__({ message: 'C03 | useEffect() | destroy', color: 'blue' });
        };
    });

    return (
        <fieldset>
            <legend>C</legend>

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

// 组件本质上是一个函数,
// 组件函数首字母必须大写,
export default function Profile() {
    return (
        <div>
            <A />
        </div>
    );
}

// 同一个源文件中可以定义多个组件函数,
export function A() {
    // return 后面的 JSX 如果只在一行, 则可以不用圆括号包裹, 如果跨越多行, 则必须用圆括号包裹,
    return <div>A</div>;
}

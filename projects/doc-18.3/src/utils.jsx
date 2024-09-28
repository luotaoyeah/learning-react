/**
 * 打印日志.
 *
 * @param message 日志消息.
 * @param color 颜色.
 */
export function __LOG__({ message, color }) {
    const now = new Date().toISOString().replace("T", " ").replace("Z", "");
    console.log(`%c${now} | ${message}`, `color:${color};`);
}

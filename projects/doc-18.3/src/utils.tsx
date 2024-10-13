/**
 * 打印日志.
 *
 * @param param.message 日志消息.
 * @param param.color 颜色.
 */
export function __LOG__(param: { message: string; color?: string }): void {
    const { message, color = 'black' } = param ?? {};

    const now = new Date().toISOString().replace('T', ' ').replace('Z', '');
    console.log(`%c${now} | ${message}`, `color:${color};`);
}

const context = require.context('./zh-CN', true, /\.ts$/);

const keys = context.keys();

let langs = {};
keys.forEach((el: string) => {
  langs = {
    ...langs,
    ...context(el).default,
  };
});
export default langs;

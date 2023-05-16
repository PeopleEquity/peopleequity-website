const context = require.context('./en-US', true, /\.ts$/);

const keys = context.keys();

let langs = {};
keys.forEach((el: string) => {
  langs = {
    ...langs,
    ...context(el).default,
  };
});
export default langs;

const path = require("path");

module.exports = (env) => {
  return {
    // path.resolve склеивает участки пути, __dirname - текущая папка, src - папка, где лежит index.js
    // entry может быть несколько, указываются они как ключ: значение (entry: {entry1: path.resolve...} )
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "build"),
      // [] - позволяет создать динамичное название файла, больше в документации: https://webpack.js.org/configuration/output/#outputfilename
      filename: "[name].[contenthash].js",
      // будет отчищать папку build при каждой сборке, чтобы файлы не кэшировались
      clean: true,
    },
    // берем окружение из env, если оно не указано - ставим dev
    mode: env.mode ?? "development",
  };
};

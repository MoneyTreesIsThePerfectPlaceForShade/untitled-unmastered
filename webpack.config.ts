import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

type Mode = 'production' | 'development';

interface IEnvVars {
  mode: Mode;
  port: number;
}

export default (env: IEnvVars) => {
  const isDev = env.mode === 'development';

  const config: webpack.Configuration = {
    // берем окружение из env, если оно не указано - ставим dev
    mode: env.mode ?? 'development',
    // path.resolve склеивает участки пути, __dirname - текущая папка, src - папка, где лежит index.js
    // entry может быть несколько, указываются они как ключ: значение (entry: {entry1: path.resolve...} )
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      path: path.resolve(__dirname, 'build'),
      // [] - позволяет создать динамичное название файла, больше в документации: https://webpack.js.org/configuration/output/#outputfilename
      filename: '[name].[contenthash].js',
      // будет отчищать папку build при каждой сборке, чтобы файлы не кэшировались
      clean: true
    },
    // плагины
    plugins: [
      // нужен для React, он берет шаблон, который мы укажем и на его основе создает свой html в сборку
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
      // показывает процент прохождения сборки // в проде лучше не использовать, замедляет сборку
      isDev && new webpack.ProgressPlugin()
    ].filter(Boolean),
    module: {
      // тут указываются loader'ы
      rules: [
        {
          test: /\.tsx?$/, // регулярка какие файлы обрабатываем
          use: 'ts-loader', // название loader'а
          exclude: /node_modules/ // что не нужно обрабатывать
        }
      ]
    },
    // нужны для импортов, чтобы не писать Component.tsx, а чтобы было Component
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev
      ? {
          port: env.port ?? 9000,
          open: true
        }
      : undefined
  };
  return config;
};

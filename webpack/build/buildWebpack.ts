import webpack from 'webpack';
import {buildDevServer} from './buildDevServer';
import {buildLoaders} from './buildLoaders';
import {buildPlugins} from './buildPlugins';
import {buildResolvers} from './buildResolvers';
import {BuildOptions} from './types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const {mode, paths} = options;

  const isDev = mode === 'development';

  return {
    // берем окружение из env, если оно не указано - ставим dev
    mode: mode ?? 'development',
    // entry может быть несколько, указываются они как ключ: значение (entry: {entry1: path.resolve...})
    entry: paths.entry,
    output: {
      path: paths.output,
      // [] - позволяет создать динамичное название файла, больше в документации: https://webpack.js.org/configuration/output/#outputfilename
      filename: '[name].[contenthash].js',
      // будет отчищать папку build при каждой сборке, чтобы файлы не кэшировались
      clean: true
    },
    // плагины
    plugins: buildPlugins(options),
    module: {
      // тут указываются loader'ы
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined
  };
}

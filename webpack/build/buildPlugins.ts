import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack, {Configuration, DefinePlugin} from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import {BuildOptions} from './types';

export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    // нужен для React, он берет шаблон, который мы укажем и на его основе создает свой html в сборку
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico')
    }),
    // что-то в духе создания переменных окружения, порой очень полезная штука
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __ENV__: JSON.stringify(mode)
    })
  ];

  if (isDev) {
    plugins.push(
      // показывает процент прохождения сборки // в проде лучше не использовать, замедляет сборку
      new webpack.ProgressPlugin()
    );
    plugins.push(
      // проверяет типы отдельно, вне билда
      new ForkTsCheckerWebpackPlugin()
    );
    plugins.push(
      // для HMR
      new ReactRefreshWebpackPlugin()
    );
  }

  if (isProd) {
    plugins.push(
      // минифицирует css
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    );
    plugins.push(
      new CopyPlugin({
        // копируем файлы локализации в сборку
        patterns: [{from: path.resolve(paths.public, 'locales'), to: path.resolve(paths.output, 'locales')}]
      })
    );
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}

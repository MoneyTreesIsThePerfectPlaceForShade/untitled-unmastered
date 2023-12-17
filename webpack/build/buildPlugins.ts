import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, {Configuration} from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import {BuildOptions} from './types';

export function buildPlugins({mode, paths, analyzer}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    // нужен для React, он берет шаблон, который мы укажем и на его основе создает свой html в сборку
    new HtmlWebpackPlugin({
      template: paths.html
    })
  ];

  if (isDev) {
    plugins.push(
      // показывает процент прохождения сборки // в проде лучше не использовать, замедляет сборку
      new webpack.ProgressPlugin()
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
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}

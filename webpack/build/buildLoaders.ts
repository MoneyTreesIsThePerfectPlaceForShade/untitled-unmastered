import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import {ModuleOptions} from 'webpack';

import {BuildOptions} from './types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  };

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currenColor: true
                }
              }
            ]
          }
        }
      }
    ]
  };

  const cssLoaderWitModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
      }
    }
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWitModules,
      // Compiles Sass to CSS
      'sass-loader'
    ]
  };

  const tsLoader = {
    test: /\.tsx?$/, // регулярка какие файлы обрабатываем
    use: [
      {
        loader: 'ts-loader', // название loader'а
        options: {
          transpileOnly: true, // отключает проверку типов при билде
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
          })
        }
      }
    ],
    exclude: /node_modules/ // что не нужно обрабатывать
  };

  return [assetLoader, svgrLoader, scssLoader, tsLoader];
}

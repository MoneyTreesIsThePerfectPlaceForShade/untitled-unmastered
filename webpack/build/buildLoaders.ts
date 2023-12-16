import {ModuleOptions} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

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
    use: 'ts-loader', // название loader'а
    exclude: /node_modules/ // что не нужно обрабатывать
  };

  return [scssLoader, tsLoader];
}

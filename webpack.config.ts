import path from 'path';
import webpack from 'webpack';

import {buildWebpack} from './webpack/build/buildWebpack';
import {BuildMode, BuildPaths} from './webpack/build/types';

interface IEnvVars {
  mode: BuildMode;
  port: number;
  analyzer: boolean;
}

// path.resolve склеивает участки пути, __dirname - текущая папка, src - папка, где лежит index.tsx
export default (env: IEnvVars) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 9001,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer
  });

  return config;
};

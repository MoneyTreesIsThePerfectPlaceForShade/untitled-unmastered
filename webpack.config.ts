import path from 'path';
import webpack from 'webpack';

import {buildWebpack} from './webpack/build/buildWebpack';
import {BuildMode, BuildPaths, BuildPlatform} from './webpack/build/types';

interface IEnvVars {
  analyzer?: boolean;
  port?: number;
  mode?: BuildMode;
  platform?: BuildPlatform;
}

// path.resolve склеивает участки пути, __dirname - текущая папка, src - папка, где лежит index.tsx
export default (env: IEnvVars) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public')
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 9001,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop'
  });

  return config;
};

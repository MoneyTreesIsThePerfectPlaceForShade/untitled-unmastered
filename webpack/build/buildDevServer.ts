import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {BuildOptions} from './types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 9000,
    open: true,
    // нужно для правильной работы react-router-dom (for SPA only)
    // работает только для devServer
    // если раздавать статику через nginx, то надо делать проксирование на Index.html
    // https://www.youtube.com/watch?v=8OHe6chCWTE&ab_channel=UlbiTV
    historyApiFallback: true
  };
}

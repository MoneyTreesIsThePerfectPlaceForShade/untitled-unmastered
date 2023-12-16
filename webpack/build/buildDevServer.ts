import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import { BuildOptions } from './types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 9000,
    open: true
  };
}

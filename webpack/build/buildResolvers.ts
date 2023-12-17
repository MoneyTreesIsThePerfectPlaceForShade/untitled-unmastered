import {Configuration} from 'webpack';

import {BuildOptions} from './types';

// нужны для импортов, чтобы не писать Component.tsx, а чтобы было Component
export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js']
  };
}

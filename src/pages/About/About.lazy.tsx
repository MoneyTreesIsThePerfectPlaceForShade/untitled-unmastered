import {lazy} from 'react';

// нужно для оптимизации, создания чанков
export const LazyAbout = lazy(() => import('./About'));

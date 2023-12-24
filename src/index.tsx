import {Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {App, store} from '@/app';
import {About, ErrorPage} from '@/pages';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root не найден');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          // Suspense нужен для индикации загрузки
          <Suspense fallback={'Loading...'}>
            <About />
          </Suspense>
        )
      },
      {
        path: '/page1',
        element: <h1>PAGE 1</h1>
      },
      {
        path: '/page2',
        element: <h1>PAGE 2</h1>
      },
      {
        path: '*',
        element: (
          <Suspense fallback={'Loading...'}>
            <ErrorPage />
          </Suspense>
        )
      }
    ]
  }
]);

container.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

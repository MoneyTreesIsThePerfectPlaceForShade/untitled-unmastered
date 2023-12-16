import {createRoot} from 'react-dom/client';
import {App} from './app';
import {Provider} from 'react-redux';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root не найден');
}

const container = createRoot(root);

container.render(
  // @ts-expect-error отложил до времен, когда закончу с настройкой
  <Provider>
    <App />
  </Provider>
);

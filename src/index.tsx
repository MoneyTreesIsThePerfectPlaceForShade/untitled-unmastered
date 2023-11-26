import {createRoot} from 'react-dom/client';
import {App} from './app';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root не найден');
}

const container = createRoot(root);

container.render(<App />);

import {render, screen} from '@testing-library/react';
import About from 'src/pages/About/About';

describe('pages/About', () => {
  test('Отображает "About page" на странице', () => {
    render(<About />);

    expect(screen.getByText('About page').textContent).toEqual('About page');
  });
});

import {Link, Outlet} from 'react-router-dom';

export const App = () => {
  return (
    <div>
      {/* Тут непосредственно текст идет для ссылки, а в index.tsx уже логика роутинга */}
      {/* Этот комментарий нужен, потому что раньше я делал иначе */}
      <Link to={'/about'}>about</Link>
      <Link to={'/page1'}>page1</Link>
      <Link to={'/page2'}>page2</Link>
      {/* An <Outlet> should be used in parent route elements to render their child route elements.  */}
      <Outlet />
    </div>
  );
};

import {Link, Outlet} from 'react-router-dom';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/page1'}>page1</Link>
      <br />
      <Link to={'/page2'}>page2</Link>
      <br />
      <h1 className={styles.chocolatew}>Начало чего-то нового</h1>
      <span className={styles.value}>LETS CODE TONIGHT</span>
      {/* An <Outlet> should be used in parent route elements to render their child route elements.  */}
      <Outlet />
    </div>
  );
};

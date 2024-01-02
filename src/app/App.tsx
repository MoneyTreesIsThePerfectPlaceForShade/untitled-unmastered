import {useSelector} from 'react-redux';
import {Link, Outlet} from 'react-router-dom';

import Icon from '@/shared/assets/icon.svg';

import styles from './App.module.scss';
import {Store} from './store/types';

export const App = () => {
  const example = useSelector((state: Store) => state);
  // TODO: пока идёт настройка всего и вся, оставлю, потом удалить
  console.log(example);

  const s = __PLATFORM__ === 'desktop' ? <div>ISSA DESKTOP</div> : '';
  const d = __PLATFORM__ === 'mobile' ? <div>ISSA MOBILE</div> : '';

  return (
    <div>
      <h1>{s}</h1>
      <h1>{d}</h1>
      <h1>{__ENV__}</h1>
      <Link to={'/about'}>about</Link>
      <br />
      <Link to={'/page1'}>page1</Link>
      <br />
      <Link to={'/page2'}>page2</Link>
      <br />
      <h1 className={styles.chocolatew}>Начало чего-то нового</h1>
      <span className={styles.value}>LETS CODE TONIGHT</span>
      <br />
      <Icon width={100} height={100} style={{color: 'purple'}} />
      {/* An <Outlet> should be used in parent route elements to render their child route elements.  */}
      <Outlet />
    </div>
  );
};

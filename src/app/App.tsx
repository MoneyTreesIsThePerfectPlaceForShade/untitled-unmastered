import styles from './App.module.scss';

type Props = {};

export const App = (props: Props) => {
  return (
    <div>
      <h1 className={styles.chocolatew}>Начало чего-то нового</h1>
      <span className={styles.value}>LET'S CODE TONIGHT</span>
    </div>
  );
};

import styles from './index.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.link} href="/">
        Sushiboys
      </a>
    </header>
  );
}

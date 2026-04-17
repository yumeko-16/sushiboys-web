import styles from './index.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="/about">About</a>
          </li>
          <li className={styles.item}>
            <a href="/news">News</a>
          </li>
          <li className={styles.item}>
            <a href="/discography">Discography</a>
          </li>
          <li className={styles.item}>
            <a href="/goods">Goods</a>
          </li>
          <li className={styles.item}>
            <a href="/picture">Picture</a>
          </li>
          <li className={styles.item}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <p className={styles.copyright}>©SUSHIBOYS</p>
    </footer>
  );
}

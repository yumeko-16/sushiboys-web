import Link from 'next/link';
import { Nav } from '@/_components/Nav';
import styles from './index.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} href="/">
        Sushiboys
      </Link>

      <Nav />
    </header>
  );
}

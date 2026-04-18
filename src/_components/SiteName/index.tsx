import Link from 'next/link';
import styles from './index.module.scss';

export function SiteName() {
  return (
    <Link className={styles.link} href="/">
      Sushiboys
    </Link>
  );
}

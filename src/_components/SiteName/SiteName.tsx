import Link from 'next/link';
import styles from './SiteName.module.scss';

export function SiteName() {
  return (
    <Link className={styles.basic} href="/">
      Sushiboys
    </Link>
  );
}

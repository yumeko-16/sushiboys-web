import Link from 'next/link';
import { Container } from '@/_components/Container';
import { Nav } from '@/_components/Nav';
import styles from './index.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Container large>
        <div className={styles.flexContainer}>
          <Link className={styles.link} href="/">
            Sushiboys
          </Link>

          <Nav />
        </div>
      </Container>
    </header>
  );
}

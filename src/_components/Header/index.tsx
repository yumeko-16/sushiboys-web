import { Container } from '@/_components/Container';
import { SiteName } from '@/_components/SiteName';
import { Nav } from '@/_components/Nav';
import styles from './index.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Container large>
        <div className={styles.flexContainer}>
          <SiteName />
          <Nav />
        </div>
      </Container>
    </header>
  );
}

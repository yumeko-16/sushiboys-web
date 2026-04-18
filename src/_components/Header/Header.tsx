import { Container } from '@/_components/Container/Container';
import { SiteName } from '@/_components/SiteName/SiteName';
import { Nav } from '@/_components/Nav/Nav';
import styles from './Header.module.scss';

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

import { Container } from '@/_components/Container/Container';
import { SiteName } from '@/_components/SiteName/SiteName';
import { Social } from '@/_components/Social/Social';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <SiteName />
          <Social iconColor="var(--white, #fff)" />
        </div>

        <p className={styles.copyright}>©SUSHIBOYS</p>
      </Container>
    </footer>
  );
}

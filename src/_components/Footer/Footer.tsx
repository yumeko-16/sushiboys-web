import { Container } from '@/_components/Container/Container';
import { SiteName } from '@/_components/SiteName/SiteName';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <SiteName />
          [SNS]
        </div>

        <p className={styles.copyright}>©SUSHIBOYS</p>
      </Container>
    </footer>
  );
}

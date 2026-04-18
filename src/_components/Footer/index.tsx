import { Container } from '@/_components/Container';
import { SiteName } from '@/_components/SiteName';
import styles from './index.module.scss';

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

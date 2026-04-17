import Link from 'next/link';
import { Container } from '@/_components/Container';
import styles from './index.module.scss';

const navItems = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'about', href: '/about', label: 'About' },
  { id: 'news', href: '/news', label: 'News' },
  { id: 'discography', href: '/discography', label: 'Discography' },
  { id: 'goods', href: '/goods', label: 'Goods' },
  { id: 'picture', href: '/picture', label: 'Picture' },
  { id: 'contact', href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <div>Sushiboys</div>
          [SNS]
        </div>

        <p className={styles.copyright}>©SUSHIBOYS</p>
      </Container>
    </footer>
  );
}

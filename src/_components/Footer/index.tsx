import Link from 'next/link';
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
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className={styles.copyright}>©SUSHIBOYS</p>
    </footer>
  );
}

import Image from 'next/image';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.container}>
      <h1 className={styles.logo}>
        <Image src="/logo.webp" alt="SUSHIBOYS" width={3000} height={2000} />
      </h1>
    </section>
  );
}

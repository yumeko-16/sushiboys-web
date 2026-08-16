import styles from './index.module.scss';

export function Sheet({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

import { ReactNode } from 'react';
import styles from './PostBody.module.scss';

export function PostBody({ children }: { children: ReactNode }) {
  return <div className={styles.stack}>{children}</div>;
}

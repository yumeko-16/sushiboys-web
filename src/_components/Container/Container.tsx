import { ReactNode } from 'react';
import styles from './Container.module.scss';

export function Container({
  children,
  large = false,
}: {
  children: ReactNode;
  large?: boolean;
}) {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
}

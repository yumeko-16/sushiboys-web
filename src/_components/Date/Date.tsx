import Image from 'next/image';
import { ConvertDate } from '@/_components/ConvertDate/ConvertDate';
import styles from './Date.module.scss';

type Props = {
  date: string;
};

export function Date({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
      <ConvertDate dateISO={date} />
    </span>
  );
}

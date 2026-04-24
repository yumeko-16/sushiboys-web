import Image from 'next/image';
import { Container } from '@/_components/Container/Container';
import styles from './Hero.module.scss';

type Props = {
  heading: string;
  subHeading?: string;
  imageOn?: boolean;
};

export function Hero({ heading, subHeading, imageOn = false }: Props) {
  return (
    <section
      className={styles.container}
      data-image={imageOn ? 'true' : 'false'}
    >
      {imageOn ? (
        <h1 className={styles.logo}>
          <Image src="/logo.webp" alt={heading} width={3000} height={2000} />
        </h1>
      ) : (
        <Container>
          <h1 className={styles.heading} data-ja={subHeading}>
            {heading}
          </h1>
        </Container>
      )}
    </section>
  );
}

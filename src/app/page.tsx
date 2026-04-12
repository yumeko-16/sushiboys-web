import Hero from '@/_components/Hero';
import NewsList from '@/_components/NewsList';
import ButtonLink from '@/_components/ButtonLink';
import { News } from '@/_libs/microcms';
import styles from './page.module.scss';

const data: { contents: News[] } = {
  contents: [
    {
      id: '1',
      title: 'テスト01',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/05/19',
      createdAt: '2023/05/19',
    },
    {
      id: '2',
      title: 'テスト02',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/05/19',
      createdAt: '2023/05/19',
    },
    {
      id: '3',
      title: 'テスト03',
      category: {
        name: '更新情報',
      },
      publishedAt: '2023/05/19',
      createdAt: '2023/05/19',
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
      <Hero />

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}

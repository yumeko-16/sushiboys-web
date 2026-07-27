import { Hero } from '@/_components/Hero/Hero';
import { Sheet } from '@/_components/Sheet/Sheet';
import { NewsList } from '@/_components/NewsList/NewsList';
import { getNewsList } from '@/_libs/microcms';

export default async function News() {
  const { contents: news } = await getNewsList();

  return (
    <>
      <Hero heading="News" subHeading="戦況報告" />

      <Sheet>
        <NewsList news={news} />
      </Sheet>
    </>
  );
}

import { getNewsList } from '@/_libs/microcms';
import { Hero } from '@/_components/Hero/Hero';
import { Sheet } from '@/_components/Sheet/Sheet';
import { NewsList } from '@/_components/NewsList/NewsList';

export default async function News() {
  const { contents: news } = await getNewsList();

  return (
    <>
      <Hero />

      <Sheet>
        <NewsList news={news} />
      </Sheet>
    </>
  );
}

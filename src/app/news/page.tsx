import { Hero } from '@/_components/Hero/Hero';
import { Sheet } from '@/_components/Sheet/Sheet';
import { NewsList } from '@/_components/NewsList/NewsList';
import Pagination from '@/_components/Pagination/Pagination';
import { getNewsList } from '@/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/_constants';

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <Hero heading="News" subHeading="戦況報告" />

      <Sheet>
        <NewsList news={news} />
      </Sheet>

      <Pagination totalCount={totalCount} />
    </>
  );
}

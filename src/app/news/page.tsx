import { Hero } from '@/_components/Hero';
import { Sheet } from '@/_components/Sheet';
import { NewsList } from '@/_components/NewsList';
import Pagination from '@/_components/Pagination';
import SearchField from '@/_components/SearchField';
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
        <SearchField />
        <NewsList news={news} />
      </Sheet>

      <Pagination totalCount={totalCount} />
    </>
  );
}

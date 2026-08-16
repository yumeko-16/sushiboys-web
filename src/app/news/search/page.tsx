import Hero from '@/_components/Hero';
import Sheet from '@/_components/Sheet';
import NewsList from '@/_components/NewsList';
import SearchField from '@/_components/SearchField';
import { getNewsList } from '@/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/_constants';

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams;
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q,
  });

  return (
    <>
      <Hero heading="News" subHeading="戦況報告" />

      <Sheet>
        <SearchField />
        <NewsList news={news} />
      </Sheet>
    </>
  );
}

import { notFound } from 'next/navigation';
import { Hero } from '@/_components/Hero';
import { Sheet } from '@/_components/Sheet';
import { NewsList } from '@/_components/NewsList';
import Pagination from '@/_components/Pagination';
import { getCategoryDetail, getNewsList } from '@/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/_constants';

type Props = {
  params: Promise<{
    id: string;
    current: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const { current } = await params;
  const parsed = parseInt(current, 10);

  if (Number.isNaN(parsed) || parsed < 1) {
    notFound();
  }

  const category = await getCategoryDetail(id).catch(notFound);
  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (parsed - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <Hero heading="News" subHeading="戦況報告" />

      <Sheet>
        <NewsList news={news} />
      </Sheet>

      <Pagination
        totalCount={totalCount}
        current={parsed}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
}

import { notFound } from 'next/navigation';
import { Hero } from '@/_components/Hero/Hero';
import { Sheet } from '@/_components/Sheet/Sheet';
import { NewsList } from '@/_components/NewsList/NewsList';
import { getNewsList } from '@/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/_constants';

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { current } = await params;
  const parsed = parseInt(current, 10);

  if (Number.isNaN(parsed) || parsed < 1) {
    notFound();
  }

  const { contents: news } = await getNewsList({
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
    </>
  );
}

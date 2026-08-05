import { getCategoryDetail, getNewsList } from '@/_libs/microcms';
import { notFound } from 'next/navigation';
import { NewsList } from '@/_components/NewsList/NewsList';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  await getCategoryDetail(id).catch(notFound);

  const { contents: news } = await getNewsList({
    filters: `category[equals]${id}`,
  });

  return <NewsList news={news} />;
}

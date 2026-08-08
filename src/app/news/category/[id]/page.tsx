import { getCategoryDetail, getNewsList } from '@/_libs/microcms';
import { notFound } from 'next/navigation';
import { NewsList } from '@/_components/NewsList/NewsList';
import { Category } from '@/_components/Category/Category';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const category = await getCategoryDetail(id).catch(notFound);
  const { contents: news } = await getNewsList({
    filters: `category[equals]${id}`,
  });

  return (
    <>
      <p>
        <Category category={category} /> の一覧
      </p>

      <NewsList news={news} />
    </>
  );
}

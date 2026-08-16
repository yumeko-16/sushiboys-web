import { notFound } from 'next/navigation';
import Article from '@/_components/Article';
import { ButtonLink } from '@/_components/ButtonLink';
import { getNewsDetail } from '@/_libs/microcms';

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const data = await getNewsDetail(slug, { draftKey: searchParams.dk }).catch(
    notFound,
  );

  return (
    <>
      <Article data={data} />

      <div>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}

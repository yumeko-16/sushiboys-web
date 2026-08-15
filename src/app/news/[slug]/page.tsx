import Article from '@/_components/Article/Article';
import { ButtonLink } from '@/_components/ButtonLink/ButtonLink';
import { getNewsDetail } from '@/_libs/microcms';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = await getNewsDetail(slug);

  return (
    <>
      <Article data={data} />

      <div>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}

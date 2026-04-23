import { getNewsDetail } from '@/_libs/microcms';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params;
  const data = await getNewsDetail(slug);

  return <div>{data.title}</div>;
}

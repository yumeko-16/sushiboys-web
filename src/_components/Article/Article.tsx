import Image from 'next/image';
import type { News } from '@/_libs/microcms';
import { Date } from '@/_components/Date/Date';
import { Category } from '@/_components/Category/Category';
import styles from './Article.module.scss';

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1>{data.title}</h1>

      <div>
        <Category category={data.category} />
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>

      {data.eyecatch && (
        <Image
          src={data.eyecatch.url}
          alt=""
          width={data.eyecatch.width}
          height={data.eyecatch.height}
        />
      )}

      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </main>
  );
}

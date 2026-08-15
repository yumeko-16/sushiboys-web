import Link from 'next/link';
import Image from 'next/image';
import { Sheet } from '@/_components/Sheet/Sheet';
import { Date } from '@/_components/Date/Date';
import { Category } from '@/_components/Category/Category';
import type { News } from '@/_libs/microcms';
import styles from './Article.module.scss';

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <Sheet>
        <h1>{data.title}</h1>

        <div>
          <Link href={`/news/category/${data.category.id}`}>
            <Category category={data.category} />
          </Link>
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
      </Sheet>
    </main>
  );
}

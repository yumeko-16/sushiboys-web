import type { Category } from '@/_libs/microcms';
import styles from './Category.module.scss';

type Props = {
  category: Category;
};

export function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}

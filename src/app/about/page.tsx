import { Hero } from '@/_components/Hero/Hero';
import { Container } from '@/_components/Container/Container';
import { PostBody } from '@/_components/PostBody/PostBody';
import { Sheet } from '@/_components/Sheet/Sheet';
import { Member } from '@/_components/Member/Member';
import styles from './page.module.scss';

export default function About() {
  return (
    <>
      <Hero heading="About" subHeading="組織概要" />

      <Container>
        <PostBody>
          <p>埼玉県越生町に突如現れた国民の最後の希望。</p>
          <p>映画マトリックスの世界観に衝撃を受け、2016年にグループ結成。</p>
          <p>
            自身たちが作成した楽曲は国民に真実を気付かせてしまうため、再生回数が伸びないよう政府によって厳重に管理されている。
          </p>
          <p>
            メンバーはFARMHOUSE、サンテナ、DJ兼カメラマン兼マネージャー兼運転手兼スーパーバイザーのneo
            yoshikawaで構成される。
          </p>
          <p>
            アヒルの形をしたゴムボートのようなものを客席に投げるLIVEに定評がある。
          </p>
        </PostBody>

        <div className={styles.member}>
          <Sheet>
            <Member />
          </Sheet>
        </div>
      </Container>
    </>
  );
}

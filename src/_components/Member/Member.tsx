import Image from 'next/image';
import styles from './Member.module.scss';

const data = {
  contents: [
    {
      id: '1',
      image: {
        url: '/member_farmhouse.jpg',
        width: 480,
        height: 480,
      },
      name: 'FARMHOUSE',
      position: 'CEO',
      profile:
        '以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。',
    },
    {
      id: '2',
      image: {
        url: '/member_santena.jpg',
        width: 480,
        height: 480,
      },
      name: 'サンテナ',
      position: 'COO',
      profile:
        '脳筋。三國無双でいうところの魏延。敵キャラとして出てくるCPUの魏延はエグい。',
    },
    {
      id: '3',
      image: {
        url: '/member_neo-yoshikawa.jpg',
        width: 480,
        height: 480,
      },
      name: 'neo yoshikawa',
      position: 'CTO',
      profile: '電話交換手。',
    },
  ],
};

export function Member() {
  return (
    <>
      {data.contents.length === 0 ? (
        <p>メンバーはいません。</p>
      ) : (
        <div>
          {data.contents.map((member) => (
            <article key={member.id} className={styles.member}>
              <Image
                className={styles.image}
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
              />

              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

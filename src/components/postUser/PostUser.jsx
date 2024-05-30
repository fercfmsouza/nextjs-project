import Image from 'next/image';
import { getUser } from '@/lib/data';
import styles from './postUser.module.css';

const PostUser = async ({ userId }) => {
  //FETCH DATA WITHOUT AN API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image src={user.image ? user.image : '/noavatar.png'} alt='' className={styles.avatar} width={50} height={50} />

      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;

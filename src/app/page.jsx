import Image from 'next/image';
import styles from './home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
        </p>
        <div className={styles.buttons}>
          <Link className={styles.button} href='/about'>
            Learn more
          </Link>
          <Link className={styles.button} href='/contact'>
            Contact
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src='/brands.png' alt='' fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/hero.gif' alt='' fill className={styles.heroGif} />
      </div>
    </div>
  );
};

export default Home;

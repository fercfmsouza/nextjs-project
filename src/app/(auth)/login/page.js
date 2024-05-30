import { LoginForm } from '@/components/loginForm/LoginForm';
import { handleGithubLogin } from '../../../lib/action';
import { handleGoogleLogin } from '../../../lib/action';
import styles from './login.module.css';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGoogleLogin}>
          <button className={styles.google}>
            <Image src='/google.svg' alt='Google logo' width={40} height={40} /> Login with Google
          </button>
        </form>

        <form action={handleGithubLogin}>
          <button className={styles.github}>
            <Image src='/github-mark.svg' alt='Github logo' width={30} height={30} /> Login with Github
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

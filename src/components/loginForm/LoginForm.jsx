'use client';

import { login } from '../../lib/action';
import { useFormState } from 'react-dom';
import styles from './loginForm.module.css';
import Link from 'next/link';

export const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <input type='text' placeholder='username' name='username' />
      <input type='password' placeholder='password' name='password' />
      <button>Login</button>
      <p>{state?.error}</p>
      <Link href='/register'>
        Don&apos;t have an account? <b>Register</b>
      </Link>
    </form>
  );
};

'use server';

import { revalidatePath } from 'next/cache';
import { connectToDB } from './connectToDB';
import { Post, User } from './models';
import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs';

//ADD POST
export const addPost = async (previousState, formData) => {
  const { title, desc, slug, userId, image } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      image,
    });

    await newPost.save();
    console.log('save to DB');
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong' };
  }
};

//DELETE POST
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.findByIdAndDelete(id);
    console.log('deleted from DB');
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong' };
  }
};

//ADD USER
export const addUser = async (previousState, formData) => {
  const { username, email, password, image } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      image,
    });

    await newUser.save();
    console.log('save to DB');
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong' };
  }

  console.log(username, email, password, image);
};

//DELETE USER
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log('deleted user from DB');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong' };
  }
};

//LOGIN WITH GITHUB
export const handleGithubLogin = async () => {
  'use server';
  await signIn('github');
};

//LOGIN WITH GOOGLE
export const handleGoogleLogin = async () => {
  'use server';
  await signIn('google');
};

//LOGOUT
export const handleLogout = async () => {
  'use server';
  await signOut();
};

//REGISTER USER
export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: 'Passwords do not match' };
  }

  try {
    connectToDB();

    const user = await User.findOne({ username });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (user) {
      return { error: 'Username already exists.' };
    }

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log('saved to DB');

    return { sucess: true };
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong!' };
  }
};

//LOGIN
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes('CredentialsSignin')) {
      return { error: 'Invalid username or password' };
    }

    throw error;
  }
};

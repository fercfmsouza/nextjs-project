import { NextResponse } from 'next/server';
import { Post } from '../../../lib/models';
import { connectToDB } from '../../../lib/connectToDB';

export const GET = async () => {
  try {
    connectToDB();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error(' Failed to fetch posts!');
  }
};

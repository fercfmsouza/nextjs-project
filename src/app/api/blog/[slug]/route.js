import { NextResponse } from 'next/server';
import { Post } from '../../../../lib/models';
import { connectToDB } from '../../../../lib/connectToDB';

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error(' Failed to fetch post!');
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();

    await Post.findOne({ slug });
    return NextResponse.json(' post deleted');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to delete post!');
  }
};

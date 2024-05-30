import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 50,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, //to create a date automatically
  },
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true, //to create a date automatically
  },
);

//With those models we can create new user, new post, we can update, fetch...
export const User = mongoose.models?.User || mongoose.model('User', userSchema); //if the user existes use it, if not, create a new one
export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema); //if the post existes use it, if not, create a new one

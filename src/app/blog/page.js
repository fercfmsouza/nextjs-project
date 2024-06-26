import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';

//FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch('http://nextjs-project-snowy-six.vercel.app/api/blog');

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  return res.json();
};

export const metadata = {
  title: 'Blog Page',
  description: 'Blog description',
};

const BlogPage = async () => {
  //FETCH DATA WITH AN API
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

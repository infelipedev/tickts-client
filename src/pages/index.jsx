import { Error, Layout, Loading, Posts } from "components";
import { usePosts } from "hooks";
import { fetcher } from "utils";

const HomePage = ({ initialData }) => {
  const posts = usePosts(initialData.posts);

  if (posts.error) {
    return <Error message={posts.error.message} />;
  }

  if (posts.isLoading) {
    return <Loading message="Loading posts, please wait..." />;
  }

  return (
    <Layout heading="Posts">
      <Posts posts={posts.data} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const posts = await fetcher("https://jsonplaceholder.typicode.com/posts");

  return { props: { initialData: { posts } } };
};

export default HomePage;

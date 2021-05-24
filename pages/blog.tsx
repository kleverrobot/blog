import Container from "../components/container";
import AllStories from "../components/all-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog | Kevin Legere</title>
        </Head>
        <Container>
          <AllStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "imageProps",
    "imageURL",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

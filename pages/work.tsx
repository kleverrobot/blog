import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image"
import Products from "../components/all-products";

const Work = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>My Work | Kevin Legere</title>
        </Head>
        <Container>
          <Products />
        </Container>
      </Layout>
    </>
  );
};

export default Work;



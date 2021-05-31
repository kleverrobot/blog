import Container from "../components/container";
import Head from "next/head";
import Image from "next/image"
import Layout from "../components/layout";
import Products from "../components/all-products";

const Work = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Work | Kevin Legere</title>
        </Head>
        <Container>
          <Products />
        </Container>
      </Layout>
    </>
  );
};

export default Work;



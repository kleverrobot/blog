import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";

const Work = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>My Work</title>
        </Head>
        <Container>
          <div className="">My Work.</div>
        </Container>
      </Layout>
    </>
  );
};

export default Work;

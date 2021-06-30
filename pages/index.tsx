import { AboutCard } from "../components/about";
import Container from "../components/container";
import Head from "next/head";
import Intro from "../components/intro";
import Layout from "../components/layout";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Kevin Legere</title>
        </Head>
        <Container>
          <Intro />
          <div className="mt-8 mb-20 border-t border-lavender"></div>
          <h2 className="mt-8 text-center text-space">I'm also...</h2>
          <AboutCard
            title="A father and a husband"
            text="I spend my weekends exploring beautiful places in British Columbia with the 2 best people in the world."
            imgSrc="/images/father.JPG"
          />

          <AboutCard
            title="A super nerd"
            text="I collect trading cards, play board games, build things with lego and obsess over everything Star Wars."
            imgSrc="/images/nerd.jpeg"
          />
          <AboutCard
            title="A music lover and sound designer"
            text="I spend my evenings and weekends making weird music with drum machines and synthesizers. I will also never turn down live outdoor music."
            imgSrc="/images/music.jpeg"
          />
          <AboutCard
            title="An adventurer"
            text="I am always explorying new places trying to find the perfect view from the top of a mountain."
            imgSrc="/images/adventure.JPG"
          />
        </Container>
      </Layout>
    </>
  );
};

export default Index;


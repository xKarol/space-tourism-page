import data from "../data.json";
import Technology from "../components/technology";
import Head from "next/head";

export default function TechnologyPage({ technology }) {
  return (
    <>
      <Head>
        <title>Space Tourism | Technology</title>
      </Head>
      <Technology technology={technology} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      technology: data.technology,
    },
    revalidate: 120,
  };
}

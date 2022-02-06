import data from "../data.json";
import Crew from "../components/crew";
import Head from "next/head";

export default function CrewPage({ crew }) {
  return (
    <>
      <Head>
        <title>Space Tourism | Crew</title>
      </Head>
      <Crew crew={crew} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      crew: data.crew,
    },
    revalidate: 120,
  };
}

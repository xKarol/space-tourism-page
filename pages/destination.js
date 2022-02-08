import data from "../data.json";
import Destination from "../components/destination";
import Head from "next/head";

export default function DestinationPage({ destinations }) {
  return (
    <>
      <Head>
        <title>Space Tourism | Destination</title>
      </Head>
      <Destination destinations={destinations} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      destinations: data.destinations,
    },
  };
}

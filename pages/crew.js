import data from "../data.json";

export default function Crew({ crew }) {
  console.log(crew);
  return <></>;
}

export async function getStaticProps() {
  return {
    props: {
      crew: data.crew,
    },
    revalidate: 120,
  };
}

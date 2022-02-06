import data from "../data.json";
import Crew from "../components/crew";

export default function CrewPage({ crew }) {
  console.log(crew);
  return <Crew crew={crew} />;
}

export async function getStaticProps() {
  return {
    props: {
      crew: data.crew,
    },
    revalidate: 120,
  };
}

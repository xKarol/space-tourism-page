import data from "../data.json";
import Technology from "../components/technology";

export default function TechnologyPage({ technology }) {
  console.log(technology);
  return <Technology technology={technology} />;
}

export async function getStaticProps() {
  return {
    props: {
      technology: data.technology,
    },
    revalidate: 120,
  };
}

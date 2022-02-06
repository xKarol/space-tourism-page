import data from "../data.json";
import Destination from "../components/destination";

export default function DestinationPage({ destinations }) {
  return <Destination destinations={destinations} />;
}

export async function getStaticProps() {
  return {
    props: {
      destinations: data.destinations,
    },
    revalidate: 120,
  };
}

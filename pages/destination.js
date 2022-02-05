import data from "../data.json";

export default function Destination({ destinations }) {
  console.log(destinations);
  return <></>;
}

export async function getStaticProps() {
  return {
    props: {
      destinations: data.destinations,
    },
    revalidate: 120,
  };
}

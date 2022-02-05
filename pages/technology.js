import data from "../data.json";

export default function Technology({ technology }) {
  console.log(technology);
  return <></>;
}

export async function getStaticProps() {
  return {
    props: {
      technology: data.technology,
    },
    revalidate: 120,
  };
}

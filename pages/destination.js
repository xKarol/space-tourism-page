import Image from "next/image";
import Header from "../components/header";
import Layout from "../components/layout";
import data from "../data.json";
import { useState } from "react";

export default function Destination({ destinations }) {
  console.log(destinations);
  const [activeId, setActiveId] = useState(0);
  const currentDestination = destinations[activeId];

  return (
    <Layout className="destination">
      <Header />
      <section className="main-section">
        <h1 className="main-section__heading --other">
          <b>01</b> Pick your destination
        </h1>
        <div className="main-section__container">
          <section className="main-section__image">
            <Image
              src={currentDestination.images.webp.substring(1)}
              alt={currentDestination.name}
              layout="fill"
            />
          </section>
          <section className="main-section__body">
            <nav className="main-section__nav">
              {destinations.slice(0, 4).map((destination, index) => (
                <label
                  key={index}
                  onClick={() => setActiveId(index)}
                  className={`main-section__nav__link ${
                    activeId === index ? "active" : ""
                  }`}
                >
                  {destination.name}
                </label>
              ))}
            </nav>
            <h1 className="main-section__heading --name">
              {currentDestination.name}
            </h1>
            <p className="main-section__body__text">
              {currentDestination.description}
            </p>
            <section className="main-section__planet-data">
              <article className="main-section__planet-data__info">
                <h2 className="main-section__planet-data__info__heading">
                  AVG. distance
                </h2>
                <p className="main-section__planet-data__info__text">
                  {currentDestination.distance}
                </p>
              </article>
              <article className="main-section__planet-data__info">
                <h2 className="main-section__planet-data__info__heading">
                  EST. travel time
                </h2>
                <p className="main-section__planet-data__info__text">
                  {currentDestination.travel}
                </p>
              </article>
            </section>
          </section>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      destinations: data.destinations,
    },
    revalidate: 120,
  };
}

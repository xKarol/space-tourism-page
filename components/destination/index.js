import { useState } from "react";
import Header from "../header";
import Layout from "../layout";
import Heading from "./heading";
import Navbar from "./navbar";
import DestinationContext from "../../context/DestinationContext";
import DataInfo from "./data-info";
import PlanetImage from "./planet-image";

export default function Destination({ destinations }) {
  const [activeId, setActiveId] = useState(0);
  const currentDestination = destinations[activeId];

  return (
    <DestinationContext.Provider
      value={{ currentDestination, destinations, activeId, setActiveId }}
    >
      <Layout className="destination">
        <Header />
        <section className="main-section">
          <Heading number={1} text={"Pick your destination"} />

          <div className="main-section__container">
            <PlanetImage />
            <section className="main-section__body">
              <Navbar />
              <h1 className="main-section__heading --name">
                {currentDestination.name}
              </h1>
              <p className="main-section__body__text">
                {currentDestination.description}
              </p>
              <DataInfo />
            </section>
          </div>
        </section>
      </Layout>
    </DestinationContext.Provider>
  );
}

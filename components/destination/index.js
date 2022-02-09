import { useLayoutEffect, useState } from "react";
import Header from "../header";
import Layout from "../layout";
import Heading from "../heading";
import Navbar from "./navbar";
import DestinationContext from "../../context/DestinationContext";
import DataInfo from "./data-info";
import ImageComponent from "../image";
import Description from "../description";
import useAnimation from "../../hooks/useAnimation";

export default function Destination({ destinations }) {
  const [activeId, setActiveId] = useState(0);
  const currentDestination = destinations[activeId];
  const { animation, setAnimation } = useAnimation(activeId);

  return (
    <DestinationContext.Provider
      value={{ currentDestination, destinations, activeId, setActiveId }}
    >
      <Layout className="destination">
        <Header />
        <section className="main-section">
          <Heading
            number={1}
            text={"Pick your destination"}
            className="--absolute"
          />
          <div
            className={"main-section__container fade-in"}
            onAnimationEndCapture={() => setAnimation(false)}
          >
            <ImageComponent
              src={currentDestination.images.webp.substring(1)}
              alt={currentDestination.name}
              className={`--planet ${animation ? "fade-in" : ""}`}
            />
            <section className="main-section__body">
              <Navbar />
              <Heading
                text={currentDestination.name}
                className="--destination"
              />
              <Description text={currentDestination.description} />
              <DataInfo />
            </section>
          </div>
        </section>
      </Layout>
    </DestinationContext.Provider>
  );
}

import Heading from "../heading";
import Header from "../header";
import Layout from "../layout";
import { useState } from "react";
import Slider from "../sliders";
import CrewContext from "../../context/CrewContext";
import Image from "next/image";

export default function Crew({ crew }) {
  const [activeId, setActiveId] = useState(0);
  const currentCrew = crew[activeId];
  return (
    <CrewContext.Provider value={{ crew, currentCrew, activeId, setActiveId }}>
      <Layout className="crew">
        <Header />
        <section className="main-section">
          <Heading number={2} text={"Meet your crew"} />

          <div className="main-section__container">
            <section className="main-section__body">
              <h2 className="main-section__subheading">{currentCrew.role}</h2>
              <h1 className="main-section__heading --crew">
                {currentCrew.name}
              </h1>
              <p className="main-section__body__text">{currentCrew.bio}</p>
              <Slider total={4} activeId={activeId} increment={setActiveId} />
            </section>

            <Image
              src={currentCrew.images.webp.substring(1)}
              alt={`${currentCrew.role} ${currentCrew.name}`}
              width={558}
              height={712}
              objectFit={"contain"}
              priority
            />
          </div>
        </section>
      </Layout>
    </CrewContext.Provider>
  );
}

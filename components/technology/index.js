import { useState } from "react";
import Header from "../header";
import Layout from "../layout";
import Heading from "../heading";
import TechnologyContext from "../../context/TechnologyContext";
import TechnologyImage from "./technology-image";
import Slider from "../sliders";
import { TECHNOLOGY_SLIDER } from "../../constants/slider";

export default function Technology({ technology }) {
  const [activeId, setActiveId] = useState(0);
  const currentTechnology = technology[activeId];

  return (
    <TechnologyContext.Provider
      value={{ currentTechnology, technology, activeId, setActiveId }}
    >
      <Layout className="technology">
        <Header />
        <section className="main-section">
          <Heading number={3} text={"Space launch 101"} />

          <div className="main-section__container">
            <div className="main-section__technology-box">
              <Slider
                total={3}
                activeId={activeId}
                increment={setActiveId}
                type={TECHNOLOGY_SLIDER}
              />

              <section className="main-section__body">
                <h2 className="main-section__subheading --technology">
                  The terminology...
                </h2>
                <h1 className="main-section__heading --technology">
                  {currentTechnology.name}
                </h1>
                <p className="main-section__body__text">
                  {currentTechnology.description}
                </p>
              </section>
            </div>

            <TechnologyImage />
          </div>
        </section>
      </Layout>
    </TechnologyContext.Provider>
  );
}
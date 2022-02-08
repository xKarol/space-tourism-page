import { useState } from "react";
import Header from "../header";
import Layout from "../layout";
import Heading from "../heading";
import TechnologyContext from "../../context/TechnologyContext";
import Slider from "../sliders";
import { TECHNOLOGY_SLIDER } from "../../constants/slider";
import Description from "../description";
import Subheading from "../subheading";
import ImageComponent from "../image";
import useWindowSize from "../../hooks/useWindowSize";
import { TABLET_SCREEN } from "../../constants/screen-sizes";

export default function Technology({ technology }) {
  const [activeId, setActiveId] = useState(0);
  const currentTechnology = technology[activeId];
  const { width } = useWindowSize();
  return (
    <TechnologyContext.Provider
      value={{ currentTechnology, technology, activeId, setActiveId }}
    >
      <Layout className="technology">
        <Header />
        <section className="main-section">
          <Heading
            number={3}
            text={"Space launch 101"}
            className="--absolute"
          />
          <div className="main-section__container fade-in">
            <div className="main-section__technology-box">
              <Slider
                total={3}
                activeId={activeId}
                increment={setActiveId}
                type={TECHNOLOGY_SLIDER}
              />

              <section className="main-section__body --center">
                <Subheading
                  text={"The terminology..."}
                  className="--technology"
                />
                <Heading
                  text={currentTechnology.name}
                  className="--technology"
                />
                <Description text={currentTechnology.description} />
              </section>
            </div>
            <ImageComponent
              src={
                width >= TABLET_SCREEN
                  ? currentTechnology.images.portrait.substring(1)
                  : currentTechnology.images.landscape.substring(1)
              }
              alt={currentTechnology.name}
              className="--technology"
            />
          </div>
        </section>
      </Layout>
    </TechnologyContext.Provider>
  );
}

import Heading from "../heading";
import Header from "../header";
import Layout from "../layout";
import { useState } from "react";
import Slider from "../sliders";
import CrewContext from "../../context/CrewContext";
import ImageComponent from "../image";
import Description from "../description";
import Subheading from "../subheading";
import useAnimation from "../../hooks/useAnimation";

export default function Crew({ crew }) {
  const [activeId, setActiveId] = useState(0);
  const currentCrew = crew[activeId];
  const { animation, setAnimation } = useAnimation(activeId);

  return (
    <CrewContext.Provider value={{ crew, currentCrew, activeId, setActiveId }}>
      <Layout className="crew">
        <Header />
        <section className="main-section">
          <Heading number={2} text={"Meet your crew"} className="--absolute" />
          <div
            className="main-section__container fade-in"
            onAnimationEndCapture={() => setAnimation(false)}
          >
            <section className="main-section__body --center">
              <Subheading text={currentCrew.role} className="--crew" />
              <Heading text={currentCrew.name} className="--crew" />
              <Description text={currentCrew.bio} />
              <Slider total={4} activeId={activeId} increment={setActiveId} />
            </section>
            <ImageComponent
              src={currentCrew.images.webp.substring(1)}
              alt={`${currentCrew.role} ${currentCrew.name}`}
              className={`--crew ${animation ? "fade-in" : ""}`}
            />
          </div>
        </section>
      </Layout>
    </CrewContext.Provider>
  );
}

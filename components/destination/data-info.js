import { useContext } from "react";
import DestinationContext from "../../context/DestinationContext";

export default function DataInfo() {
  const { currentDestination } = useContext(DestinationContext);
  return (
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
  );
}

import { useContext } from "react";
import DestinationContext from "../../context/DestinationContext";

export default function DataInfo() {
  const { currentDestination } = useContext(DestinationContext);
  return (
    <section className="destination__data-info">
      <article className="destination__data-info__info">
        <h2 className="destination__data-info__info__heading">
          AVG. distance
        </h2>
        <p className="destination__data-info__info__text">
          {currentDestination.distance}
        </p>
      </article>
      <article className="destination__data-info__info">
        <h2 className="destination__data-info__info__heading">
          EST. travel time
        </h2>
        <p className="destination__data-info__info__text">
          {currentDestination.travel}
        </p>
      </article>
    </section>
  );
}

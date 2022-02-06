import Image from "next/image";
import { useContext } from "react";
import DestinationContext from "../../context/DestinationContext";

export default function PlanetImage() {
  const { currentDestination } = useContext(DestinationContext);
  return (
    <section className="main-section__image">
      <Image
        src={currentDestination.images.webp.substring(1)}
        alt={currentDestination.name}
        layout="fill"
      />
    </section>
  );
}

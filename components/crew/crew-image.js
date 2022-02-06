import Image from "next/image";
import { useContext } from "react";
import CrewContext from "../../context/CrewContext";

export default function CrewImage() {
  const { currentCrew } = useContext(CrewContext);
  return (
    <section className="main-section__image --crew">
      <Image
        src={currentCrew.images.webp.substring(1)}
        alt={`${currentCrew.role} ${currentCrew.name}`}
        objectFit={"contain"}
        layout="fill"
        priority
      />
    </section>
  );
}

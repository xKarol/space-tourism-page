import Image from "next/image";
import { useContext } from "react";
import TechnologyContext from "../../context/TechnologyContext";

export default function TechnologyImage() {
  const { currentTechnology } = useContext(TechnologyContext);
  return (
    <section className="main-section__image --technology">
      <Image
        src={currentTechnology.images.portrait.substring(1)}
        alt={currentTechnology.name}
        objectFit={"contain"}
        layout="fill"
      />
    </section>
  );
}

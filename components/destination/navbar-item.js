import { useContext } from "react";
import DestinationContext from "../../context/DestinationContext";

export default function NavbarItem({ name, index }) {
  const { setActiveId, activeId } = useContext(DestinationContext);
  return (
    <a
      onClick={() => setActiveId(index)}
      className={`destination__navbar__link ${
        activeId === index ? "active" : ""
      }`}
    >
      {name}
    </a>
  );
}

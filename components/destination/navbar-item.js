import { useContext } from "react";
import DestinationContext from "../../context/DestinationContext";

export default function NavbarItem({ name, index }) {
  const { setActiveId, activeId } = useContext(DestinationContext);
  return (
    <label
      onClick={() => setActiveId(index)}
      className={`main-section__nav__link ${
        activeId === index ? "active" : ""
      }`}
    >
      {name}
    </label>
  );
}

import { useContext } from "react";
import DestinationContext from "../../context/DestinationContext";
import NavItem from "./navbar-item";

export default function Navbar() {
  const { destinations } = useContext(DestinationContext);

  return (
    <nav className="main-section__nav">
      {destinations.slice(0, 4).map((destination, index) => (
        <NavItem key={index} index={index} name={destination.name} />
      ))}
    </nav>
  );
}

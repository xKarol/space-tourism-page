import { useContext } from "react";
import NavbarContext from "../../context/NavbarContext";

export default function Hamburger() {
  const { hamburger, setHamburger } = useContext(NavbarContext);
  return (
    <div
      className={`hamburger ${hamburger ? "active" : ""}`}
      onClick={() => setHamburger(!hamburger)}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

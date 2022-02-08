import { useState } from "react";
import NavbarContext from "../../context/NavbarContext";
import Hamburger from "./hamburger";
import NavbarLink from "./navbar-link";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  return (
    <NavbarContext.Provider value={{ hamburger, setHamburger }}>
      <nav className={`navbar ${hamburger ? "hamburger-menu" : ""}`}>
        <ul className="navbar__links">
          <NavbarLink number={0} text={"Home"} href={"/"} />
          <NavbarLink number={1} text={"Destination"} href={"/destination"} />
          <NavbarLink number={2} text={"Crew"} href={"/crew"} />
          <NavbarLink number={3} text={"Technology"} href={"/technology"} />
        </ul>
      </nav>
      <Hamburger />
    </NavbarContext.Provider>
  );
}

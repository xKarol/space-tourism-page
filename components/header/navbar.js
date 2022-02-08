import { useEffect, useState } from "react";
import NavbarContext from "../../context/NavbarContext";
import Hamburger from "./hamburger";
import NavbarLink from "./navbar-link";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    if (hamburger) {
      window.scrollTo(0, 0);
      document.body.classList.add("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [hamburger]);
  
  return (
    <NavbarContext.Provider value={{ hamburger, setHamburger }}>
      <nav className={`navbar ${hamburger ? "hamburger-menu" : ""}`}>
        <section className="navbar__links">
          <NavbarLink number={0} text={"Home"} href={"/"} />
          <NavbarLink number={1} text={"Destination"} href={"/destination"} />
          <NavbarLink number={2} text={"Crew"} href={"/crew"} />
          <NavbarLink number={3} text={"Technology"} href={"/technology"} />
        </section>
      </nav>
      <Hamburger />
    </NavbarContext.Provider>
  );
}

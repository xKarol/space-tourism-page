import NavbarLink from "./navbar-link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <NavbarLink number={0} text={"Home"} href={"/"} />
        <NavbarLink number={1} text={"Destination"} href={"/destination"} />
        <NavbarLink number={2} text={"Crew"} href={"/crew"} />
        <NavbarLink number={3} text={"Technology"} href={"/technology"} />
      </ul>
    </nav>
  );
}

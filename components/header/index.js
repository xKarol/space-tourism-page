import Logo from "../logo";
import Navbar from "./navbar";
import Stroke from "./stroke";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Stroke />
      <Navbar />
    </header>
  );
}

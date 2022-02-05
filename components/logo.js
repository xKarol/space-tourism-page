import Image from "next/image";
import Link from "next/link";
import logo from "../assets/shared/logo.svg";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Image src={logo} alt="space tourism logo" />
    </Link>
  );
}

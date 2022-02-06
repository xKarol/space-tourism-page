import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="logo" aria-label="space tourism home">
        <Image
          src={"/assets/shared/logo.svg"}
          alt="space tourism logo"
          width={48}
          height={48}
        />
      </a>
    </Link>
  );
}

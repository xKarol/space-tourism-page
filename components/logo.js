import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Image
        src={"/assets/shared/logo.svg"}
        alt="space tourism logo"
        width={48}
        height={48}
      />
    </Link>
  );
}

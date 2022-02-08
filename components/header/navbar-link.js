import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarLink({ number, text, href }) {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Link href={href}>
      <a className={`navbar__link ${active ? "active" : ""}`} aria-label={text}>
        <b>{number.toString().padStart(2, "0")}</b> {text}
      </a>
    </Link>
  );
}

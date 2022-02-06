import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarLink({ number, text, href }) {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <li className={`navbar__link ${active ? "active" : ""}`}>
      <Link href={href}>
        <a aria-label={text}>
          <b>{number.toString().padStart(2, "0")}</b> {text}
        </a>
      </Link>
    </li>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarLink({ number, text, href }) {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Link href={href} passHref>
      <li className={`header__navbar__link ${active ? "active" : ""}`}>
        <a>
          {number.toString().padStart(2, "0")} {text}
        </a>
      </li>
    </Link>
  );
}

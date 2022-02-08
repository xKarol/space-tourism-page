import Link from "next/link";

export default function Explore() {
  return (
    <Link href="/destination">
      <a className="home__explore pop-up" aria-label="explore">
        Explore
      </a>
    </Link>
  );
}

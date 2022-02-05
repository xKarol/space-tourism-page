import Link from "next/link";
import Header from "../components/header";
import Layout from "../components/layout";
export default function Home() {
  return (
    <Layout className="home">
      <Header />
      <section className="main-section">
        <section className="main-section__body">
          <h1 className="main-section__body__heading">
            So, you want to travel to
          </h1>
          <b>Space</b>
          <p className="main-section__body__text">
            Let’s face it if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <Link href="/destination" passHref aria-label="explore">
          <label className="main-section__explore">Explore</label>
        </Link>
      </section>
    </Layout>
  );
}

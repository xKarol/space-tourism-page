import Header from "../header";
import Layout from "../layout";
import Explore from "./explore";

export default function Home() {
  return (
    <Layout className="home">
      <Header />
      <section className="main-section">
        <div className="main-section__container --home">
          <section className="main-section__body">
            <h1 className="main-section__heading heading-5">
              So, you want to travel to
            </h1>
            <b className="heading-1">Space</b>
            <p className="main-section__body__text">
              Let’s face it if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </section>
          <Explore />
        </div>
      </section>
    </Layout>
  );
}

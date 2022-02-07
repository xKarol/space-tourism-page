import Description from "../description";
import Header from "../header";
import Heading from "../heading";
import Layout from "../layout";
import Explore from "./explore";

export default function Home() {
  return (
    <Layout className="home">
      <Header />
      <section className="main-section --home">
        <div className="main-section__container">
          <section className="main-section__body --center">
            <Heading text={"So, you want to travel to"} className="heading-5 --home" />
            <b className="heading-1">Space</b>
            <Description
              text={
                "Let’s face it if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
              }
            />
          </section>
          <Explore />
        </div>
      </section>
    </Layout>
  );
}

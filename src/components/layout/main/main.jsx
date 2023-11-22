import Consultation from "../../blocks/consultation/consultation";
import IntroDesc from "../../blocks/intro-desc/intro-desc";

const Main = () => {
  return (
    <main className="main">
      <section className="intro">
        <div className="intro__container">
          <IntroDesc />
          <Consultation />
        </div>
      </section>
    </main>
  );
};

export default Main;

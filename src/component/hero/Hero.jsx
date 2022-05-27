import "./hero.css";
import paint from "../../assets/banner-head.svg";
import lowerShadow from "../../assets/lower-shadow.png";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__container_top">
          <div className="hero__container_left">
            <h2>CREATIVI</h2>
            <h2>MARKETIN</h2>
            <h2>CONTEN</h2>
            <img src={lowerShadow} alt="" className="lowerShadow1" />
            <img src={lowerShadow} alt="" className="lowerShadow2" />
          </div>
          <div className="hero__container_right">
            <img src={paint} alt="" />
            <h2>
              <span>E</span>VOLUTO.
            </h2>
          </div>
        </div>
        <div className="hero__container_bottom">
          <p>Andrea's projects and activities have been featured in</p>
          <div>
            <h3>Forbes</h3>
            <h3>Glamour</h3>
            <h3>Vanity Fair</h3>
            <h3>LA STAMPA</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

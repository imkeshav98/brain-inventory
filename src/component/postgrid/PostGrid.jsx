import "./postgrid.css";

export const PostGrid = () => {
  return (
    <section className="postgrid">
      <div className="postgrid__container">
        <div className="postgrid_one">
          <h2>DO NOT WAIT TO</h2>
          <h2>GET MOTIVATED</h2>
          <button className="yellowBtn">READ MORE</button>
        </div>
        <div className="postgrid_two">
          <h2>HARD DAYS WON'T WIN.</h2>
          <button className="yellowBtn">READ MORE</button>
        </div>
        <div className="postgrid_three">
          <h2>LAUGH. SMILE. LOVE.</h2>
          <h3>FOCUS ON YOUR PURPOSE.</h3>
          <button className="yellowBtn">READ MORE</button>
        </div>
        <div className="postgrid_four">
          <h2>LET'S DO WHAT WE</h2>
          <h2>LOVE</h2>
          <button className="yellowBtn">READ MORE</button>
        </div>
      </div>
    </section>
  );
};

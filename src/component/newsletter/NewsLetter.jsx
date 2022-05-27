import "./newsletter.css";

export const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <h3 className="newsletter__title">
          GET IN TOUCH AND STAY UPDATED WITH OUR NEWS AND EVENTS
        </h3>
        <div>
          <input type="text" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

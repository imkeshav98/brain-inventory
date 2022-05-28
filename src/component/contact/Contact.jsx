import "./contact.css";
import paint from "../../assets/banner-head.svg";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__container_left">
          <div className="contact__container_heading">
            <h2 className="heading">GET IN TOUCH</h2>
            <img src={paint} alt="paint" />
          </div>
          <div className="contact__container_left_form_container">
            <form action="" className="contact__container_left_form">
              <div className="contact_container_form_input">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              <div className="contact_container_form_input">
                <input type="email" placeholder="Email address" />
                <input type="url" name="url" id="url" placeholder="Website" />
              </div>
              <div className="contact_container_form_input">
                <div className="contact_container_form_message_left">
                  <input type="number" placeholder="Phone number" />
                  <input type="date" />
                </div>
                <div className="contact_container_form_message_right">
                  <label htmlFor="message">Message</label>
                  <textarea name="message"></textarea>
                </div>
              </div>
              <input
                type="submit"
                className="contact__container_left_form_submit"
              />
            </form>
          </div>
        </div>
        <div className="contact__container_right">
          <div className="contact__container_heading">
            <h2 className="heading">EVENTS</h2>
            <img src={paint} alt="paint" />
          </div>
          <h3 className="contact__container_right_month">APRIL</h3>
          <div className="contact__container_right_events">
            <div className="contact__container_right_event">
              <h3>28</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <a href="details">DETAILS</a>
            </div>
            <div className="contact__container_right_event">
              <h3>27</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <a href="details">DETAILS</a>
            </div>
            <div className="contact__container_right_event">
              <h3>20</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <a href="details">DETAILS</a>
            </div>
            <div className="contact__container_right_event">
              <h3>16</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <a href="details">DETAILS</a>
            </div>
            <div className="contact__container_right_event">
              <h3>10</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <a href="details">DETAILS</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

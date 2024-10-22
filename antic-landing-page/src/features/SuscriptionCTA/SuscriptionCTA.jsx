import { useState } from "react";
import "./SuscriptionCTA.css";

const SuscriptionCTA = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Suscription for", email);
    setEmail("");
  };

  return (
    <section className="subscription-section full-width-section">
      <div className="subscription-container">
        <div className="subscription-content">
          <h2 className="subscription-title merriweather-light">
            Be aware of the latest trends
          </h2>
          <p className="subscription-description varta-regular">
            Stay informed of new trends, but also of our various offers.
          </p>
          <span className="footer-links varta-heavy">Learn more</span>
        </div>
        <form className="subscription-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email@address.com"
            className="subscription-input"
            required
          />
          <button type="submit" className="subscription-button varta-heavy">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SuscriptionCTA;

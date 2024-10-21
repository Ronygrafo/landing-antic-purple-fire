import { MaterialSymbol } from "react-material-symbols";
import logo from "../../../public/Antic-Logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer full-width-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <img
              className="footer-logo"
              src={logo}
              alt="Logo"
              width={80}
              height={20}
            />
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle varta-heavy">Products</h3>
            <ul className="footer-list varta-regular">
              {[
                "Furniture",
                "Decoration",
                "Storage",
                "Baby and child",
                "Connected home",
              ].map((item, index) => (
                <li key={index} className="footer-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle varta-heavy">Rooms</h3>
            <ul className="footer-list varta-regular">
              {[
                "Living room",
                "Dining room",
                "Cooked",
                "Bedroom",
                "Bathroom",
                "Office",
                "Laundry",
                "Garage",
              ].map((item, index) => (
                <li key={index} className="footer-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle varta-heavy">Services</h3>
            <ul className="footer-list varta-regular">
              {[
                "Click and collect",
                "Conception",
                "Installation",
                "Advices",
                "Gift card",
              ].map((item, index) => (
                <li key={index} className="footer-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-subtitle varta-heavy">About</h3>
            <ul className="footer-list varta-regular">
              {["Our story", "Our stores", "Our partners"].map(
                (item, index) => (
                  <li key={index} className="footer-list-item">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="footer-column footer-planet">
            <h3 className="footer-subtitle varta-heavy">
              We respect our planet
            </h3>
            <div className="footer-img-container">
              <img
                src="../../../footer.png"
                alt="Sustainable interior"
                className="footer-image"
              />
            </div>
            <p className="footer-text varta-regular">
              We are taking positive steps to reduce our impact on the planet.
              For us, that means retailing responsibly.
            </p>
            <span className="footer-links varta-heavy">Learn more</span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            {/* Placeholders for social media icons */}
            <MaterialSymbol
              icon={"public"}
              size={36}
              grade={0}
              weight={400}
              color={"var(--color-secondary)"}
            />
            <MaterialSymbol
              icon={"public"}
              size={36}
              grade={0}
              weight={400}
              color={"var(--color-secondary)"}
            />
            <MaterialSymbol
              icon={"public"}
              size={36}
              grade={0}
              weight={400}
              color={"var(--color-secondary)"}
            />
            <MaterialSymbol
              icon={"public"}
              size={36}
              grade={0}
              weight={400}
              color={"var(--color-secondary)"}
            />
          </div>
          <div className="footer-copyright">
            <p className="varta-regular">
              Copyright, 2036. Coded by{" "}
              <a
                href="https://www.linkedin.com/in/ronygrafo/?locale=en_US"
                target="_blank"
                rel="noopener"
                className="varta-bold"
              >
                {" "}
                @ronygrafo{" "}
              </a>{" "}
              for PurpleFire Frontend Developer Challenge
            </p>
            <div className="footer-links">
              <span className="varta-bold">Privacy policy</span>
              <span className="varta-bold">Term of service</span>
              <span className="varta-bold">Language</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

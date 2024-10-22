import IconButton from "../../components/iconButton/iconButton";
import "./HeroSection.css";

const HeroSection = ({ onScroll }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text-container">
          <h2 className="varta-bold">HOME DESIGN</h2>
          <h1 className="merriweather-light">
            Elegance for Interiors & Exteriors
          </h1>
          <p className="varta-regular">
            We provide everyone with modern, trendy, quality furniture
          </p>
          <div className="hero-button">
            <IconButton
              iconName="keyboard_arrow_down"
              variant="primary"
              size="base"
              iconfill="false"
              onClick={onScroll}
            />
          </div>
          <div className="mobile-hero-button">
            <IconButton
              iconName="keyboard_arrow_down"
              variant="secondary"
              size="base"
              iconfill="false"
              onClick={onScroll}
            />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="../../../lamps.jpeg" alt="Beautiful Lamps" loading="lazy" />
      </div>
    </section>
  );
};

export default HeroSection;

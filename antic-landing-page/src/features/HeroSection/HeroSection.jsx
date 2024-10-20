import IconButton from "../../components/iconButton/iconButton";
import "./HeroSection.css";

const HeroSection = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Btn Clicked");
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="varta-bold">HOME DESIGN</h2>
        <h1 className="merriweather-light">
          Elegance for Interiors & Exteriors
        </h1>
        <p className="varta-regular">
          We provide everyone with modern, trendy, quality furniture
        </p>
        <IconButton
          iconName="keyboard_arrow_down"
          variant="primary"
          size="base"
          iconFill="false"
          onClick={handleClick}
        />
      </div>
      <div className="hero-image">
        <img src="../../../public/lamps.jpeg" alt="Beautiful Lamps" loading="lazy"/>
      </div>
    </section>
  );
};

export default HeroSection;

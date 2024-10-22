import { useRef } from "react";
import ImageCarousel from "../../features/Carousel/ImageCarousel";
import FloatingButton from "../../features/FloatingButton/FloatingButton";
import Footer from "../../features/Footer/Footer";
import HeroSection from "../../features/HeroSection/HeroSection";
import MenuBar from "../../features/MenuBar/MenuBar";
import MulticolumnSection from "../../features/MulticolumnSection/MulticolumnSection";
import SuscriptionCTA from "../../features/SuscriptionCTA/SuscriptionCTA";

const LandingPage = () => {
  const seccionRef = useRef(null);

  const scrollASeccion = () => {
    seccionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <MenuBar />
      <FloatingButton />
      <HeroSection onScroll={scrollASeccion} />
      <MulticolumnSection ref={seccionRef} />
      <SuscriptionCTA />
      <ImageCarousel />
      <Footer />
    </>
  );
};

export default LandingPage;

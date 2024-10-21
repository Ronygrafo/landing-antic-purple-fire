//import IconButton from "../../components/iconButton/iconButton";
import ImageCarousel from "../../features/Carousel/ImageCarousel";
import FloatingButton from "../../features/FloatingButton/FloatingButton";
import Footer from "../../features/Footer/Footer";
import HeroSection from "../../features/HeroSection/HeroSection";
import MenuBar from "../../features/MenuBar/MenuBar";
import { MulticolumnSection } from "../../features/MulticolumnSection/MulticolumnSection";
import SuscriptionCTA from "../../features/SuscriptionCTA/SuscriptionCTA";
import "./LandingPage.css";

const LandingPage = () => {

/*   const handleClick = (e) => {
    e.preventDefault();
    console.log("Btn Clicked");
  }; */

  return (
    <>
      <MenuBar />
      <FloatingButton />
      <HeroSection />
      <MulticolumnSection/>
      <SuscriptionCTA/>
      <ImageCarousel/>
      <Footer/>
    </>
  );
};

export default LandingPage;

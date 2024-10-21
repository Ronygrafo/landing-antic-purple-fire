//import IconButton from "../../components/iconButton/iconButton";
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

 {/*      <IconButton
        iconName="keyboard_arrow_down"
        variant="primary"
        size="base"
        iconFill="false"
        onClick={handleClick}
      />
      <IconButton
        iconName="forum"
        variant="secondary"
        size="base"
        iconFill="true"
        onClick={handleClick}
      />
      <IconButton
        iconName="chevron_left"
        variant="primary"
        size="small"
        iconFill="false"
        onClick={handleClick}
      />
      <IconButton
        iconName="chevron_right"x
        variant="primary"
        size="small"
        iconFill="false"
        onClick={handleClick}
      /> */}
      <Footer/>
    </>
  );
};

export default LandingPage;

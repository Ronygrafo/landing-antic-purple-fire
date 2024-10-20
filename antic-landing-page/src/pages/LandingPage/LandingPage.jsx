import IconButton from "../../components/iconButton/iconButton";
import "./LandingPage.css";

const LandingPage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Btn Clicked");
  };

  return (
    <>
      <IconButton
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
        iconName="chevron_right"
        variant="primary"
        size="small"
        iconFill="false"
        onClick={handleClick}
      />
    </>
  );
};

export default LandingPage;

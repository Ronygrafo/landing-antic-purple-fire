import IconButton from "../../components/iconButton/iconButton";
import "./FloatingButton.css";

const FloatingButton = () => {
  const handleContact = (e) => {
    e.preventDefault();
    console.log("Floatiing message clicked");
  };

  return (
    <div className="contact-button">
      <IconButton
        iconName="forum"
        variant="secondary"
        size="base"
        iconfill="true"
        onClick={handleContact}
      />
    </div>
  );
};

export default FloatingButton;

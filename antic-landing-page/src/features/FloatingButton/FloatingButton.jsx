import IconButton from "../../components/iconButton/iconButton";
import "./FloatingButton.css";

const FloatingButton = () => {
  const handleContact = (e) => {
    e.preventDefault();
    console.log("Contact Clicked");
  };

  return (
    <div className="contact-button">
      <IconButton
        iconName="forum"
        variant="secondary"
        size="base"
        iconFill="true"
        onClick={handleContact}
      />
    </div>
  );
};

export default FloatingButton;

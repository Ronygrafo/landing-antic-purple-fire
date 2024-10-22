import IconButton from "../../components/iconButton/iconButton";
import "./FloatingButton.css";

const FloatingButton = () => {
  const href = "https://wa.me/573104051410?text=Hi%20Rony!,%20You're%20Hired!";

  const handleContact = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
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

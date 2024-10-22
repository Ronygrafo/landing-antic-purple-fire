import { MaterialSymbol } from "react-material-symbols";
import "./iconButton.css";

const IconButton = ({
  iconName,
  variant = "",
  size = "",
  iconfill = "false",
  onClick,
}) => {
  const getIconColor = () => {
    return variant === "primary"
      ? "var(--color-primary)"
      : "var(--color-white)";
  };

  const getIconSize = () => {
    switch (size) {
      case "small":
        return 20;
      case "large":
        return 32;
      default:
        return 24;
    }
  };

  const materialSymbolProps = {
    icon: iconName,
    size: getIconSize(),
    color: getIconColor(),
  };

  if (iconfill === "true") {
    materialSymbolProps.iconfill = true;
  }

  return (
    <button
      className={`button button--${variant} button--${size}`}
      onClick={onClick}
    >
      <MaterialSymbol {...materialSymbolProps} />
    </button>
  );
};

export default IconButton;

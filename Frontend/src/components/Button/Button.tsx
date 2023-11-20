import { IButton } from "../../interfaces/IButton";

const Button = ({ text, disabled, type, classes, onclick }: IButton) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={classes}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
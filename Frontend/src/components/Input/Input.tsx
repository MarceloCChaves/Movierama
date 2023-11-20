import { IInput } from "../../interfaces/IInput";

const Input = ({ placeholder, value, onchange, classes, type }: IInput) => {
  return (
    <input
      className={classes}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onchange}
    />
  );
};

export default Input;
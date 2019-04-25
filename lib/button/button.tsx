import React from "react";
import "./button.scss";
// import classes from "../helpers/classes";
import { scopedClassMaker } from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
}

const sc = scopedClassMaker("golu-button");

const Button: React.FunctionComponent<Props> = props => {
  const { className, disabled, onClick, type, ...restProps } = props;
  const handelOnClick = (e: React.MouseEvent) => {
    if (disabled) {
      return e.preventDefault();
    }
    onClick && onClick.call(e.target, e);
  };
  return (
    <button
      className={sc(
        { "": true, primary: type === "primary" },
        { extra: className }
      )}
      disabled={disabled}
      onClick={handelOnClick}
      {...restProps}
    >
      {props.children}
    </button>
  );
};

export default Button;

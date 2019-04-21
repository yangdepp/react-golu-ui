import React from "react";
import "./button.scss";
import classes from "../helpers/classes";

interface Props {
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
}

const Button: React.FunctionComponent<Props> = props => {
  const onClick = (e: React.MouseEvent) => {
    if (props.disabled) {
      return e.preventDefault();
    }
    props.onClick && props.onClick.call(e.target, e);
  };
  return (
    <button
      className={classes(
        "golu-button",
        props.type ? "golu-button-primary" : "",
        props.disabled ? "golu-button-disabled" : "",
        props.className
      )}
      disabled={props.disabled}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

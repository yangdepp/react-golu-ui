import React from "react";
import "./button.scss";
import classes from "../helpers/classes";

interface Props {
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FunctionComponent<Props> = props => {
  const onClick = (e: React.MouseEvent) => {
    props.onClick && props.onClick.call(e.target, e);
  };
  return (
    <button
      className={classes("golu-button", props.className)}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

import React from "react";
import "./Button.scss";
import classNames from "classnames";

export const Button = (Props) => {
  const {
    text,
    onAction = () => {},
    inverted = false,
    disabled = false,
  } = Props;

  return (
    <button
      onClick={onAction}
      className={classNames({ "mg-button": true, inverted, disabled })}
    >
      {text}
    </button>
  );
};

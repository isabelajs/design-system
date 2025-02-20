import Text from "../Text";
import React, { MouseEventHandler } from "react";
import styles from "./styles.module.scss";

export type ButtonProps = {
  text?: string;
  variant: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  customStyles?: React.CSSProperties;
};


const Button: React.FC<ButtonProps> = ({
  variant,
  disabled,
  text,
  onClick,
  customStyles,
  ...props
}) => {
  return (
    <button
      className={styles.button + ' ' + styles[`button--${variant}`]}
      disabled={disabled}
      onClick={onClick}
      style={customStyles}
      {...props}
    >
      <Text text={text} type="body1" fontWeight="medium" />
    </button>
  );
};

export default Button;
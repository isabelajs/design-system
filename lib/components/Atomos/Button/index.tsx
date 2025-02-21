import Text from "../Text";
import Icon from "../Icons";
import React, { MouseEventHandler } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export type ButtonProps = {
  /** Texto a mostrar en el botón */
  text?: string;
  /** Variante visual del botón */
  variant: 'primary' | 'secondary' | 'outline';
  /** Deshabilita el botón */
  disabled?: boolean;
  /** Función a ejecutar al hacer click */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Estilos personalizados adicionales */
  customStyles?: React.CSSProperties;
  /** Icono a mostrar antes del texto */
  startIcon?: string;
  /** Icono a mostrar después del texto */
  endIcon?: string;
  /** Clase CSS adicional */
  className?: string;
  /** Tamaño del botón */
  size?: 'small' | 'large';
  /** Tipo de botón HTML */
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  size = 'small',
  text,
  onClick,
  customStyles,
  startIcon,
  endIcon,
  className,
  type = 'button',
  ...props
}) => {
  const buttonClasses = classNames(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      style={customStyles}
      type={type}
      {...props}
    >
      {startIcon && (
        <span className={styles['button__icon']}>
          <Icon icon={startIcon} />
        </span>
      )}
      
      {text && (
        <Text 
          text={text} 
          type="body1" 
          fontWeight="medium"
          color={variant === 'outline' ? 'tertiary' : 'white'}
        />
      )}

      {endIcon && (
        <span className={styles['button__icon']}>
          <Icon icon={endIcon} />
        </span>
      )}
    </button>
  );
};

export default Button;
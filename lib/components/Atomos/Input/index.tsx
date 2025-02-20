import React, { useState, useCallback } from "react";
import styles from "./styles.module.scss";
import Icon from "../Icons";
import Text from "../Text";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** Indica si el valor del input es válido */
  isValid?: boolean;
  /** Mensaje de error a mostrar */
  error?: string;
  /** Estilos CSS personalizados para el contenedor del input */
  customStyles?: React.CSSProperties;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value = "",
  isValid,
  onChange,
  disabled = false,
  error,
  customStyles,
  name,
  id,
  required = false,
  maxLength,
  minLength,
  pattern,
  autoComplete = "off",
  className,
  defaultValue,
  ...restProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [internalValue, setInternalValue] = useState(value || defaultValue || "");

  // Manejar cambios del input
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(e);
  }, [onChange]);

  // Manejar visibilidad de contraseña
  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, []);

  // Actualizar valor interno cuando cambia el prop value
  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  const containerClassName = [
    styles["input-container"],
    error && styles.error,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={styles["input-wrapper"]}>
      <div
        className={containerClassName}
        style={customStyles}
        data-testid="input-container"
      >
        <input
          {...restProps}
          type={inputType}
          placeholder={placeholder}
          value={internalValue}
          onChange={handleChange}
          className={styles.input}
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          name={name}
          id={id || `${name}-${Math.random().toString(36).substr(2, 9)}`}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          autoComplete={autoComplete}
          aria-describedby={error ? `${name}-error` : undefined}
          data-testid="input-field"
        />

        {type !== "password" && isValid && !error && (
          <div className={styles["icon--container"]} data-testid="valid-icon">
            <Icon
              icon="FaRegCheckCircle"
              customStyles={{
                color: "var(--color-success)",
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
          </div>
        )}

        {type === "password" && (
          <div
            className={styles["icon--container"]}
            onClick={!disabled ? togglePasswordVisibility : undefined}
            aria-label={isPasswordVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
            data-testid="password-toggle"
          >
            <Icon
              icon={isPasswordVisible ? "AiFillEyeInvisible" : "AiFillEye"}
              customStyles={{
                color: disabled ? "var(--color-text-disabled)" : "var(--color-text-primary)",
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
          </div>
        )}
      </div>
      {error && (
        <Text
          type="body2"
          fontWeight="regular"
          color="error"
          className={styles["error-message"]}
          text={error}
          data-testid="error-message"
        />
      )}
    </div>
  );
};

export default Input;

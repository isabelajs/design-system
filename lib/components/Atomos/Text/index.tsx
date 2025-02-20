import React from "react";
import styles from './styles.module.scss'
import classNames from 'classnames';

export type TextProps = {
    /** Texto a mostrar */
    text?: string;
    /** Tipo de texto que define el tamaño y estilo */
    type?: "h1" | "h2" | "body1" | "body2";
    /** Peso de la fuente */
    fontWeight?: "regular" | "medium" | "semibold" | "bold";
    /** Color del texto */
    color?: "primary" | "secondary" | "tertiary" | "error" | "success" | "inherit" | "white";
    /** Estilos personalizados adicionales */
    customStyles?: React.CSSProperties;
    /** Clase CSS adicional */
    className?: string;
}

/**
 * Componente Text para mostrar texto con diferentes estilos y variantes
 */
const Text: React.FC<TextProps> = ({ 
    text,
    type = "body1",
    fontWeight = "regular",
    color = "inherit",
    customStyles,
    className
}) => {

    const textClasses = classNames(
        styles.text,
        styles[`text--${type}`],
        styles[`text-fontWeight--${fontWeight}`],
        styles[`text-color--${color}`],
        className
    );
    return React.createElement(
        type.startsWith('h') ? type : 'p',
        {
            className: textClasses,
            style: customStyles
        },
        text
    );
};

export default Text;
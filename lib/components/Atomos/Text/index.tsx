import React from "react";
import styles from './styles.module.scss'

export type TextProps = {
    text?: string;
    type?: "h1" | "h2" | "body1" | "body2" ;
    fontWeight?: "regular" | "medium" | "semibold" | "bold" ;
    customStyles?: React.CSSProperties;
}


const Text: React.FC<TextProps> = ({ text, type, fontWeight, customStyles }) => {
    return (
        <div className={styles.text + ' ' +styles[`text--${type}`] + ' ' +styles[`text-fontWeight--${fontWeight}`]} style={customStyles}>
            {text}
        </div>
    );
};

export default Text;
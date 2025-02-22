import React from "react";
import styles from "./styles.module.scss";
import Text from "../Text";
import Icon from "../Icons";

export type CardProps = {
  title: string;
  description: string;
  icon: string;
  customStylesIcon?: React.CSSProperties;
  onAction?: () => void;
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  onAction,
  customStylesIcon,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <Text color="secondary" fontWeight="bold" text={title} type="h2" />
        <Icon icon={icon} customStyles={customStylesIcon} onClick={onAction} />
      </div>
      <Text color="primary" text={description} type="body2" />
    </div>
  );
};

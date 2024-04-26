import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }: ButtonProps) => {
  return <button className={styles.button__container}>{title}</button>;
};

export default Button;

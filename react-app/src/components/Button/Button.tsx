import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  //color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick /*color = "primary"*/ }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;

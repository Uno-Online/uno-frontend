import { ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./styles.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  onClick: () => void;
}

export function Button({
  onClick,
  children,
  "aria-label": ariaLabel,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes.btn}
    >
      {children}
    </button>
  );
}

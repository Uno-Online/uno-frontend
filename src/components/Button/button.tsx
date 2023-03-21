import { ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./styles.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | ReactNode;
  onClick: () => void;
};

export function Button({ onClick, children, "aria-label": ariaLabel }: Props) {
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

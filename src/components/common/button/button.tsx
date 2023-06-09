import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import classes from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  theme?: 'primary' | 'secondary';
  className?: string;
}

export function Button({
  onClick,
  children,
  "aria-label": ariaLabel,
  theme = 'primary',
  className = ''
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${classes.btn} ${classes[`btn-${theme}`]} ${className}`}
    >
      {children}
    </button>
  );
}

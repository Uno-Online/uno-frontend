import { ButtonHTMLAttributes } from "react";
import classes from "./uno-button.module.css";

type UnoButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function UnoButton({ onClick, "aria-label": ariaLabel }: UnoButtonProps) {
  return (
    <button
      type="button"
      className={classes.button}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div className={classes.pressable}>
        <div className={classes.light} />
        
        <span className={classes.label}>
          UNO
        </span>
      </div>
    </button>
  );
}

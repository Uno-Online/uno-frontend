import classes from "./uno-button.module.css";
import { ButtonHTMLAttributes } from "react";

interface UnoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function UnoButton(props: UnoButtonProps) {
  return (
    <button
      type="button"
      className={classes.button}
      {...props}
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

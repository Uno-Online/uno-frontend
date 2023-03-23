import { CardColor } from "@/constants/index";
import classes from "./card.module.css";

export interface CardProps {
  color?: CardColor;
}

export function Card({ color = CardColor.Red }: CardProps) {
  return (
    <button type="button" className={classes.card}>
      <div
        className={`${classes["card-content"]} ${
          classes[`card-content-${color}`]
        }`}
      >
        <div className={classes["card-circle"]} />
        <span className={classes["card-content-text"]}>1</span>
      </div>
    </button>
  );
}

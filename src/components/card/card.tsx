import { CardColor, CardText } from "../../constants";
import classes from "./card.module.css";
import image from "../../../public/assets/image/card/block.svg?raw"

export interface CardProps {
  color?: CardColor;
  text?: CardText;
}

export function Card({ color = CardColor.Red,  text = CardText.Zero }: CardProps): JSX.Element {
  return (
    <button type="button" className={classes.card}>
      <div
        className={`${classes["card-content"]} ${
          classes[`card-content-${color}`]
        }`}
      >
        <img className="start-image-or-number" src={image} width={30} alt="" />
        <div className={classes["card-circle"]} />
        <span className={classes["card-content-text"]}>{text}</span>
        <img className="end-image-or-number" src={image} width={30} alt="" />
      </div>
    </button>
  );
}

import { Card } from "@/components/index";
import classes from "./game.module.css";

export function Game() {
  return (
    <div className={classes.board}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

import React from "react";
import { calculateBoxColor, onMouseLeave, onMouseMove } from "./scripts";
import styles from "./room.module.css";
import iconUser from "../../../assets/icons/icon-user.svg";

export type RoomProps = {
  disableAnimation?: boolean;
  maximumPlayers?: number;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ownerName?: string;
  playerCount?: number;
};

export function Room({
  disableAnimation = false,
  maximumPlayers = 0,
  name = "Nome da Sala",
  onClick = undefined,
  ownerName = "#user",
  playerCount = 0,
}: RoomProps) {
  const refButton = React.useRef<HTMLButtonElement>(null);
  const refWrapper = React.useRef<HTMLDivElement>(null);

  return (
    <button
      aria-label={`Entrar na sala ${name}`}
      className={styles.room}
      ref={refButton}
      onClick={onClick}
      onMouseLeave={() => {
        if (disableAnimation) return;

        onMouseLeave({ refWrapper });
      }}
      onMouseMove={(event) => {
        if (disableAnimation) return;

        onMouseMove({ event, refButton, refWrapper });
      }}
      type="button"
    >
      <div className={styles.wrapper} ref={refWrapper}>
        <h4 className={styles["room-title"]}>{name}</h4>

        <span className={styles["room-user"]}>{ownerName}</span>

        <div
          className={styles["room-amount-of-players"].concat(
            " ",
            calculateBoxColor({ playerCount })
          )}
        >
          <img alt="Ícone do usuário" src={iconUser} />

          <span>{`${playerCount}/${maximumPlayers}`}</span>
        </div>
      </div>
    </button>
  );
}

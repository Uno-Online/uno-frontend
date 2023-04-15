import styles from "./room.module.css";

type CalculateBoxColor = (agr0: { playerCount?: number }) => string;

type CalculateDegrees = (arg0: {
  length: number;
  maximumDegree: number;
  position: number;
}) => number;

type OnMouseLeave = (arg0: {
  refWrapper: React.RefObject<HTMLDivElement>;
}) => void;

type OnMouseMove = (arg0: {
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  refButton: React.RefObject<HTMLButtonElement>;
  refWrapper: React.RefObject<HTMLDivElement>;
}) => void;

export const calculateBoxColor: CalculateBoxColor = ({ playerCount = 0 }) => {
  if (playerCount >= 0 && playerCount <= 2)
    return styles["room-amount-of-players-green"];
  if (playerCount === 3) return styles["room-amount-of-players-yellow"];
  if (playerCount === 4) return styles["room-amount-of-players-red"];

  return styles["room-amount-of-players-green"];
};

export const calculateDegrees: CalculateDegrees = ({
  length,
  maximumDegree,
  position,
}) => (maximumDegree * position) / length;

export const onMouseLeave: OnMouseLeave = ({ refWrapper }) => {
  if (!refWrapper.current) return;

  const wrapper = refWrapper.current;

  wrapper.style.transitionDuration = "0.5s";
  wrapper.style.transform = `perspective(62.5rem) rotateX(${0}deg) rotateY(${0}deg)`;
};

export const onMouseMove: OnMouseMove = ({ event, refButton, refWrapper }) => {
  if (!refButton.current || !refWrapper.current) return;

  const button = refButton.current;
  const wrapper = refWrapper.current;

  const rectButton = button.getBoundingClientRect();
  const dx = -(event.pageY - rectButton.y - rectButton.height / 2);
  const dy = event.pageX - rectButton.x - rectButton.width / 2;

  const rotationX = calculateDegrees({
    length: rectButton.height / 2,
    maximumDegree: 20,
    position: dx,
  });
  const rotationY = calculateDegrees({
    length: rectButton.width / 2,
    maximumDegree: 20,
    position: dy,
  });

  wrapper.style.transitionDuration = "0s";
  wrapper.style.transform = `perspective(62.5rem) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
};

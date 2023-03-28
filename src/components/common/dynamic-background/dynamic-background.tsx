import React from "react";
import { CardColor } from "@/constants";
import styles from "./dynamic-background.module.css";

type CreateClassName = (arg0: {
  className?: string;
  customTheme?: React.CSSProperties["backgroundColor"][];
  theme?: CardColor;
}) => string | undefined;

type CreateCustomTheme = (
  arg0: React.CSSProperties["backgroundColor"][]
) => React.CSSProperties;

export type DynamicBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
  customTheme?: React.CSSProperties["backgroundColor"][];
  style?: React.CSSProperties;
  theme?: CardColor;
};

type ThemeClasses = {
  [key: string]: string;
};

const themeClasses: ThemeClasses = {
  blue: styles["dynamic-background-blue"],
  green: styles["dynamic-background-green"],
  red: styles["dynamic-background-red"],
  yellow: styles["dynamic-background-yellow"],
};

const createClassName: CreateClassName = ({
  className = undefined,
  customTheme = [],
  theme = CardColor.Blue,
}) => {
  if (customTheme.length !== 0) return className;

  const customClassName =
    className === undefined
      ? themeClasses[theme]
      : themeClasses[theme].concat(" ", className);

  return customClassName;
};

const createCustomTheme: CreateCustomTheme = (customTheme = []) => {
  const colors = customTheme.join(", ");

  return { backgroundImage: `radial-gradient(circle closest-side, ${colors})` };
};

export function DynamicBackground({
  children = undefined,
  className = undefined,
  customTheme = [],
  style = undefined,
  theme = CardColor.Blue,
}: DynamicBackgroundProps) {
  return (
    <div
      className={createClassName({ className, customTheme, theme })}
      style={{
        ...createCustomTheme(customTheme),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

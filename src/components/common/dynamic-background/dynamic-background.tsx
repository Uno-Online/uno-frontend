import React from "react";
import styles from "./dynamic-background.module.css";

type CreateCustomTheme = (
  arg0: React.CSSProperties["backgroundColor"][]
) => React.CSSProperties;

export type DynamicBackgroundProps = {
  customTheme?: React.CSSProperties["backgroundColor"][];
  theme?: "blue" | "green" | "red" | "yellow";
};

type ThemeStyles = {
  [key: string]: React.CSSProperties;
};

const createCustomTheme: CreateCustomTheme = (customTheme = []) => {
  const colors = customTheme.join(", ");

  return { backgroundImage: `radial-gradient(circle closest-side, ${colors})` };
};

const themeStyles: ThemeStyles = {
  blue: {
    backgroundImage: `radial-gradient(circle closest-side, #65C0E3, #3E6BD9)`,
  },
  green: {
    backgroundImage: `radial-gradient(circle closest-side, #43F555, #01A54E)`,
  },
  red: {
    backgroundImage: `radial-gradient(circle closest-side, #F97E84, #ED1A24)`,
  },
  yellow: {
    backgroundImage: `radial-gradient(circle closest-side, #FFF5B1, #E3BF00)`,
  },
};

export function DynamicBackground({
  customTheme = [],
  theme = "blue",
}: DynamicBackgroundProps) {
  return (
    <div
      className={styles["dynamic-background"]}
      style={
        customTheme.length === 0
          ? themeStyles[theme]
          : createCustomTheme(customTheme)
      }
    />
  );
}

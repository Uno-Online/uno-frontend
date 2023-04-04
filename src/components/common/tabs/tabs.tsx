import React from "react";
import styles from "./tabs.module.css";

export type TabsProps = {
  tabs?: {
    name?: string;
    children?: React.ReactNode;
  }[];
};

export function Tabs({ tabs = [] }: TabsProps) {
  const [panel, setPanel] = React.useState<number>(0);

  const id = React.useId();

  return (
    <div className={styles.tabs} style={{ color: "black" }}>
      <div
        aria-labelledby={`tablist-${id}`}
        className={styles["tab-container"]}
        role="tablist"
      >
        {tabs.map(({ name }, index, array) => (
          <button
            aria-controls={`tabpanel-${index}-${id}`}
            aria-selected={panel === index}
            className={
              panel === index
                ? styles.button.concat(" ", styles["button-selected"])
                : styles.button
            }
            id={`tab-${index}-${id}`}
            key={name}
            onClick={() => setPanel(index)}
            onKeyUp={(event) => {
              const { key } = event;

              switch (key) {
                case "ArrowRight":
                  setPanel(panel === array.length - 1 ? 0 : panel + 1);
                  break;
                case "ArrowLeft":
                  setPanel(panel === 0 ? array.length - 1 : panel - 1);
                  break;
                default:
              }
            }}
            role="tab"
            tabIndex={index === panel ? 0 : -1}
            type="button"
          >
            {name}
          </button>
        ))}
      </div>

      {tabs.map(({ children, name }, index) => (
        <div
          aria-labelledby={`tab-${index}-${id}`}
          className={index === panel ? styles.tabpanel : styles['tabpanel-hidden']}
          hidden={index !== panel}
          id={`tabpanel-${index}-${id}`}
          key={name}
          role="tabpanel"
        >
          {children}
        </div>
      ))}
    </div>
  );
}

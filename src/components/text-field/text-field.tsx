import React from "react";
import styles from "./TextField.module.css";

export type TextFieldProps = {
  id?: string | undefined;
  label?: string | undefined;
  maxWidth?: React.CSSProperties["maxWidth"];
  placeholder?: string | undefined;
  required?: boolean | undefined;
  width?: React.CSSProperties["width"];
};

export function TextField({
  id = undefined,
  label = "Label",
  maxWidth = undefined,
  placeholder = undefined,
  required = undefined,
  width = "100%",
}: TextFieldProps) {
  return (
    <label
      htmlFor={id}
      className={styles["text-field"]}
      style={{ maxWidth, width }}
    >
      <span className={styles["text-field-label"]}>
        {label}

        {required === true && (
          <span className={styles["text-field-label-red"]}>{" *"}</span>
        )}
      </span>

      <input
        className={styles["text-field-input"]}
        id={id}
        placeholder={placeholder}
        required={required}
        type="text"
      />
    </label>
  );
}

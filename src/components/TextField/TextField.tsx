import React from "react";
import styles from "./TextField.module.css";

export type TextFieldProps = {
  error?: boolean | undefined;
  helperText?: string | undefined;
  id?: string | undefined;
  label?: string | undefined;
  maxWidth?: React.CSSProperties["maxWidth"];
  name?: string | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string | undefined;
  required?: boolean | undefined;
  requiredDecoration?: boolean | undefined;
  value?: string | number | readonly string[] | undefined;
  width?: React.CSSProperties["width"];
};

export function TextField({
  id = undefined,
  error = undefined,
  helperText = undefined,
  label = "Label",
  maxWidth = undefined,
  name = undefined,
  onBlur = undefined,
  onChange = undefined,
  placeholder = undefined,
  required = undefined,
  requiredDecoration = undefined,
  value = undefined,
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

        {(required === true || requiredDecoration === true) && (
          <span className={styles["text-field-label-red"]}>{" *"}</span>
        )}
      </span>

      <input
        className={styles["text-field-input"]}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type="text"
        value={value}
      />

      {error === true && (
        <span className={styles["text-field-helper-text"]}>{helperText}</span>
      )}
    </label>
  );
}

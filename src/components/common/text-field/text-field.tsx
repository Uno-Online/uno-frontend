import React from "react";
import styles from "./text-field.module.css";

export interface TextFieldProps {
  error?: boolean;
  helperText?: string;
  id?: string;
  label?: string;
  maxWidth?: React.CSSProperties["maxWidth"];
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  requiredDecoration?: boolean;
  value?: string | number | readonly string[];
  width?: React.CSSProperties["width"];
  type?: React.HTMLInputTypeAttribute
}

export function TextField({
  id = undefined,
  error = undefined,
  helperText = undefined,
  label = undefined,
  maxWidth = undefined,
  name = undefined,
  onBlur = undefined,
  onChange = undefined,
  placeholder = undefined,
  required = undefined,
  requiredDecoration = undefined,
  value = undefined,
  width = "100%",
  type = undefined
}: TextFieldProps) {
  return (
    <label
      htmlFor={id}
      className={styles["text-field"]}
      style={{ maxWidth, width }}
    >
      <span className={styles["text-field-label"]}>
        {label}

        {(required || requiredDecoration) && (
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
        type={type}
        value={value}
      />

      {error && (
        <span className={styles["text-field-helper-text"]}>{helperText}</span>
      )}
    </label>
  );
}

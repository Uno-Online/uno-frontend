import { ChangeEventHandler, InputHTMLAttributes, ReactNode } from "react";
import styles from './checkbox.module.css'
import checkedImage from '@/assets/checked.svg'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  id: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>
  className?: string;
}

export function Checkbox({ children = null, id, checked, onChange, className = '' }: CheckboxProps) {
  return (
    <label className={`${styles["checkbox-container"]} ${className}`} htmlFor={id}>
      <div className={styles.checkbox}>
        {checked && <img src={checkedImage} alt="imagem de uma caixa de seleção marcada" />}
      </div>
      <input aria-hidden type="checkbox" id={id} checked={checked} onChange={onChange} className={styles.input} />
      {children}
    </label>
  )
}

import React from "react";
import styles from './styles.module.scss';

type Props = {
  disabled?: boolean
  secondary?: boolean
  onClick?: () => void
}
export const Button: React.FC<Props> = ({disabled, onClick, secondary = false, children}) => {

  const secondaryClassName = secondary ? styles.secondary : '';

  return <button
      className={`${styles.button} ${secondaryClassName}`}
      disabled={disabled}
      onClick={onClick}
  >
    {children}
  </button>;

}
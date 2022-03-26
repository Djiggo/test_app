import React from "react";
import styles from './styles.module.scss';

type Props = {
  error?: boolean
  light?: boolean
}
export const Label: React.FC<Props> = ({children, error,light}) => {

  const errorClassName = error ? styles.error : "";
  const lightClassName = light ? styles.light : "";

  return <div className={`${styles.wrapper} ${errorClassName} ${lightClassName}`}>{children}</div>;

}
import React from "react";
import styles from './styles.module.scss';

export const H1: React.FC = ({children}) => {

  return <h1 className={styles.wrapper}>{children}</h1>
}
import React from "react";
import styles from './styles.module.scss';

export const H2: React.FC = ({children}) => {

  return <h2 className={styles.wrapper}>{children}</h2>
}
import React from "react";
import styles from './styles.module.scss';

export const FormGroup: React.FC = ({children}) => {

  return <div className={styles.wrapper}>{children}</div>;

}
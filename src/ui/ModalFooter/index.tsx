import React from "react";
import styles from './styles.module.scss';


type Props = {
  children: React.ReactNode,
}
export const ModalFooter: React.FC<Props> = ({ children}) => {

  return <div className={styles.wrapper}>
    {children}
  </div>;

}
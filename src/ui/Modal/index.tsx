import React from "react";
import styles from './styles.module.scss';


type Props = {
  title: string,
  children: React.ReactNode,
  onClose: () => void
}
export const Modal: React.FC<Props> = ({title, children, onClose}) => {

  return <div className={styles.overlay}>
    <div className={styles.wrapper}>

      <div className={styles.title}>
        {title}
        <div className={styles.close_btn} onClick={onClose}>x</div>
      </div>

      <div className={styles.body}>
        {children}
      </div>

    </div>
  </div>;

}
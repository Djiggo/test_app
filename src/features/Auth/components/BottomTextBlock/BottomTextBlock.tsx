import React from "react";
import styles from './styles.module.scss';

type Props = {
  title: string,
  date: string,
  children: string,
}
export const BottomTextBlock: React.FC<Props> = ({title, date, children}) => {

  return <div className={styles.wrapper}>
    <div className={styles.title}>{title}</div>
    <div className={styles.date}>{date}</div>
    <div className={styles.text}>{children}</div>
  </div>
}
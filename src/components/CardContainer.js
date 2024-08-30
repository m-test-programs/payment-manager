import React from "react";
import styles from "../styles/Components.module.scss";

function CardContainer(props) {
  const { children, title } = props;
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      {children}
    </div>
  );
}

export default CardContainer;

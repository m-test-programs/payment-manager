import React from "react";
import styles from "../../styles/Components.module.scss";

function Counter(props) {
  const { children } = props;
  return <div className={styles.counter}>{children}</div>;
}

export default Counter;

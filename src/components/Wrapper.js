import React from "react";
import styles from "../styles/Components.module.scss";

function Wrapper(props) {
  const { children, customStyle } = props;
  return (
    <div className={styles.wrapper} style={customStyle}>
      {children}
    </div>
  );
}

export default Wrapper;

import React from "react";

import styles from "../styles/MainContainer.module.scss";

function MainContainer(props) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}

export default MainContainer;

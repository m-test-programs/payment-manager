import React from "react";
import styles from "../styles/Effects.module.scss";
import { Mosaic } from "react-loading-indicators";

function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}>
      <Mosaic
        color={["#2C47B1", "#7899D4", "#6554A2", "#4219D8"]}
        size="large"
        text="Loading Data..."
        textColor={["#2C47B1", "#7899D4", "#6554A2", "#4219D8"]}
      />
    </div>
  );
}

export default LoadingScreen;

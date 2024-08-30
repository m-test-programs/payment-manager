import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../styles/Components.module.scss";

function Icon(props) {
  const { icon, customStyle, label } = props;
  return (
    <div className={styles.icon} style={{ ...customStyle }}>
      <FontAwesomeIcon icon={icon} />
      {label && <p>{label}</p>}
    </div>
  );
}

export default Icon;

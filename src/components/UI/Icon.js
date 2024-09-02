import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/Components.module.scss";

function Icon(props) {
  const { icon, customStyle, label, size, sx, click } = props;
  return (
    <div className={styles.icon} style={{ ...customStyle }}>
      <FontAwesomeIcon
        icon={icon}
        style={sx}
        onClick={() => click && click()}
      />
      {label && (
        <p
          className={
            size === "small" ? styles.icon__labelSmall : styles.icon__label
          }
        >
          {label}
        </p>
      )}
    </div>
  );
}

export default Icon;

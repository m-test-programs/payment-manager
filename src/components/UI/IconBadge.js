import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/Components.module.scss";

function IconBadge(props) {
  const { icon } = props;
  return (
    <div className={styles.iconBadge}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

export default IconBadge;

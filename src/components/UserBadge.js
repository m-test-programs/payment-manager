import React from "react";
import styles from "../styles/Components.module.scss";

function UserBadge(props) {
  const { image, name } = props;
  return (
    <div className={styles.userBadge}>
      <div className={styles.imageWrapper}>
        <img src={`images/${image}`} alt="user-image" />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default UserBadge;

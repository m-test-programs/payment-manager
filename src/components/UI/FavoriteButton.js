import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Components.module.scss";

function FavoriteButton(props) {
  const { isFavorite, click } = props;
  return (
    <div className={styles.favoriteButton} onClick={click}>
      <FontAwesomeIcon icon={isFavorite ? fullStar : emptyStar} />
    </div>
  );
}

export default FavoriteButton;

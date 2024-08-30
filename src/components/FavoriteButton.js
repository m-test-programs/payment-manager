import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function FavoriteButton(props) {
  const { isFavorite } = props;
  return (
    <div>
      <FontAwesomeIcon icon={isFavorite ? fullStar : emptyStar} />
    </div>
  );
}

export default FavoriteButton;

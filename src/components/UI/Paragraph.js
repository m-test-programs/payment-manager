import React from "react";
import styles from "../../styles/Components.module.scss";

function Paragraph(props) {
  const { children, size } = props;
  return (
    <div
      className={
        size && size === "small" ? styles.paragraphSmall : styles.paragraph
      }
    >
      {children}
    </div>
  );
}

export default Paragraph;

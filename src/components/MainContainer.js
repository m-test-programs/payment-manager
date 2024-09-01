import React from "react";

import styles from "../styles/MainContainer.module.scss";
import useStore from "../store/store";
import { variables } from "../utils/variables";

function MainContainer(props) {
  const { children } = props;

  const isMobile = useStore((store) => store.isMobile);

  const paymentDetailsVisible = useStore(
    (store) => store.paymentDetailsMobileVisible
  );

  const containerStyle = {
    marginTop: paymentDetailsVisible
      ? variables.headerMobileHeightExtended
      : variables.headerMobileHeight,
  };

  return (
    <div
      className={styles.container}
      style={isMobile.matches ? containerStyle : {}}
    >
      {children}
    </div>
  );
}

export default MainContainer;

import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import DashboardHeaderTopbar from "./DashboardHeaderTopbar";
import DashboardHeaderNav from "./DashboardHeaderNav";
import Icon from "../../../components/Icon";
import useStore from "../../../store/store";
import PaymentDetailsMobile from "../../../components/DataRenderers/PaymentDetailsMobile";
import { variables } from "../../../utils/variables";

function DashboardHeader() {
  const isMobile = useStore((store) => store.isMobile);

  const paymentDetailsVisible = useStore(
    (store) => store.paymentDetailsMobileVisible
  );

  const headerStyle = {
    height: paymentDetailsVisible
      ? variables.headerMobileHeightExtended
      : variables.headerMobileHeight,
  };

  return (
    <div className={styles.header} style={isMobile.matches ? headerStyle : {}}>
      <DashboardHeaderTopbar />
      <DashboardHeaderNav />
      {isMobile.matches && <PaymentDetailsMobile />}
      <div className={styles.back}>
        <Icon
          icon="chevron-left"
          customStyle={{ color: "#fff", fontSize: "0.6rem" }}
        />
        <p>Back to Main Dashboard</p>
      </div>
    </div>
  );
}

export default DashboardHeader;

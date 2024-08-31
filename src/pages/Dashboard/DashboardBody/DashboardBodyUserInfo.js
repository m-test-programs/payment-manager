import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import CardContainer from "../../../components/CardContainer";
import CustomerDetails from "../../../components/DataRenderers/CustomerDetails";
import CustomButton from "../../../components/CustomButton";
import PaymentDetails from "../../../components/DataRenderers/PaymentDetails";
import Paragraph from "../../../components/UI/Paragraph";

function DashboardBodyUserInfo() {
  return (
    <div className={styles.userInfo}>
      <CardContainer title="Payment Details">
        <PaymentDetails />
      </CardContainer>
      <CardContainer title="Customer Details">
        <CustomerDetails />
      </CardContainer>
      <CardContainer title="Need help?">
        <img
          className={styles.helpImage}
          src="/images/assistance.png"
          alt="assistance"
        />
        <Paragraph size="small">
          <p>
            Need assistance? Our team is here to support you every step of the
            way. Feel free to reach out—we've got you covered.
          </p>
        </Paragraph>
        <CustomButton title="Ask a question" color="primary" fullWidth />
      </CardContainer>
    </div>
  );
}

export default DashboardBodyUserInfo;

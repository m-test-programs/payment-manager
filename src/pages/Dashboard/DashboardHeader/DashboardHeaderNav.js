import React from "react";
import styles from "../../../styles/DashboardHeader.module.scss";

function DashboardHeaderNav() {
  return (
    <div className={styles.nav}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Payments</li>
          <li className={styles.selected}>Billings</li>
          <li>Balances</li>
          <li>Customers</li>
          <li>Products</li>
          <li>Reports</li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default DashboardHeaderNav;

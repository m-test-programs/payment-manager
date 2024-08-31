import React, { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import styles from "../../styles/Dashboard.module.scss";
import DashboardBody from "./DashboardBody/DashboardBody";
import axios from "axios";

import useStore from "../../store/store";

function Dashboard() {
  // const setInvoices = useStore((state) => state.setInvoices);
  // const setSelectedInvoice = useStore((state) => state.setSelectedInvoice);

  const fetchInvoices = useStore((state) => state.fetchInvoices);

  const setUsers = useStore((state) => state.setUsers);
  const setSelectedUser = useStore((state) => state.setSelectedUser);
  const setPaymentDetails = useStore((state) => state.setPaymentDetails);

  const fetchUsers = async () => {
    try {
      const { data: users } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/get_data.php`
      );
      if (!!users && users.length > 0) {
        setUsers(users);
        setSelectedUser(users[0]);
        setPaymentDetails(users[0].payment_details);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInvoices({
      autoSelect: true,
    });
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <DashboardHeader />
      <DashboardBody />
    </div>
  );
}

export default Dashboard;

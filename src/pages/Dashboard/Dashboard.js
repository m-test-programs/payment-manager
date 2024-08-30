import React, { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import styles from "../../styles/Dashboard.module.scss";
import DashboardBody from "./DashboardBody/DashboardBody";
import axios from "axios";

import useStore from "../../store/store";

function Dashboard() {
  const setInvoices = useStore((state) => state.setInvoices);
  const setSelectedInvoice = useStore((state) => state.setSelectedInvoice);

  const setUsers = useStore((state) => state.setUsers);
  const setSelectedUser = useStore((state) => state.setSelectedUser);

  const fetchInvoices = async () => {
    try {
      const { data: invoices } = await axios.get(
        "http://localhost:8000/invoices/get_data.php"
      );

      if (!!invoices && invoices.length > 0) {
        setInvoices(invoices);
        setSelectedInvoice(invoices[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const { data: users } = await axios.get(
        "http://localhost:8000/users/get_data.php"
      );
      if (!!users && users.length > 0) {
        setUsers(users);
        setSelectedUser(users[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInvoices();
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

import React, { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import styles from "../../styles/Dashboard.module.scss";
import DashboardBody from "./DashboardBody/DashboardBody";
import axios from "axios";

import useStore from "../../store/store";
import CustomDialog from "../../components/UI/CustomDialog";
import SummaryScreen from "../../components/SummaryScreen";

function Dashboard() {
  const invoice = useStore((state) => state.selectedInvoice);

  const fetchInvoices = useStore((state) => state.fetchInvoices);

  const setUsers = useStore((state) => state.setUsers);
  const setSelectedUser = useStore((state) => state.setSelectedUser);
  const setPaymentDetails = useStore((state) => state.setPaymentDetails);

  const dialogOpen = useStore((state) => state.summaryDialog);
  const dialogMode = useStore((state) => state.summaryDialogMode);
  const closeDialog = useStore((store) => store.closeSummaryDialog);
  const assignPrice = useStore((state) => state.assignPrice);
  const removePrice = useStore((state) => state.removePrice);

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
      <CustomDialog
        open={dialogOpen}
        onClose={closeDialog}
        title="Your Summary for the invoice"
        titleAddon={`#${invoice.invoice_number}`}
        titleAddonStyle={{ color: "var(--info)", fontWeight: 600 }}
        fullWidth
        actions={[
          {
            title:
              dialogMode === "assign"
                ? "Confirm and Assign"
                : "Confirm and Remove",
            click: dialogMode === "assign" ? assignPrice : removePrice,
            color: dialogMode === "assign" ? "" : "error",
          },
          {
            title: "Cancel",
            color: "info",
            click: closeDialog,
          },
        ]}
      >
        <SummaryScreen mode={dialogMode} />
      </CustomDialog>

      <DashboardHeader />
      <DashboardBody />
    </div>
  );
}

export default Dashboard;

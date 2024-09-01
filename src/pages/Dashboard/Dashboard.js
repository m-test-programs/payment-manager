import React, { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import styles from "../../styles/Dashboard.module.scss";
import DashboardBody from "./DashboardBody/DashboardBody";
import axios from "axios";

import useStore from "../../store/store";
import CustomDialog from "../../components/UI/CustomDialog";
import SummaryScreen from "../../components/SummaryScreen";
import { Alert } from "@mui/material";
import ConnectionError from "../../components/UI/ConnectionError";

function Dashboard() {
  const invoice = useStore((store) => store.selectedInvoice);

  const fetchInvoices = useStore((store) => store.fetchInvoices);

  const getUsers = useStore((store) => store.fetchUsers);

  const dialogOpen = useStore((store) => store.summaryDialog);
  const dialogMode = useStore((store) => store.summaryDialogMode);
  const closeDialog = useStore((store) => store.closeSummaryDialog);
  const assignPrice = useStore((store) => store.assignPrice);
  const removePrice = useStore((store) => store.removePrice);

  const fetchUsers = () => {
    getUsers();
  };

  useEffect(() => {
    fetchInvoices({
      autoSelect: true,
    });
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <ConnectionError />

      <CustomDialog
        open={dialogOpen}
        onClose={closeDialog}
        title="Your Summary for the invoice"
        titleAddon={`#${invoice?.invoice_number}`}
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

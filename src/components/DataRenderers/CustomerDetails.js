import React from "react";
import UserBadge from "../UserBadge";
import useStore from "../../store/store";
import Icon from "../Icon";
import dateFormatter from "../../utils/dateFormatter";
import CustomButton from "../CustomButton";
import styles from "../../styles/DataRenderers.module.scss";

function CustomerDetails() {
  const user = useStore((store) => store.selectedUser);
  return (
    <div className={styles.customerDetails}>
      <UserBadge
        image={user?.image}
        name={`${user?.first_name} ${user?.last_name}`}
      />
      <Icon icon="envelope" label={user?.email} size="small" />
      <Icon
        icon="fa-calendar"
        label={dateFormatter(user?.date_of_birth)}
        size="small"
      />
      <CustomButton color="primary" title="Show more Details" fullWidth />
    </div>
  );
}

export default CustomerDetails;

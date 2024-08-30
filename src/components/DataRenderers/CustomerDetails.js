import React from "react";
import UserBadge from "../UserBadge";
import useStore from "../../store/store";
import Icon from "../Icon";
import dateFormatter from "../../utils/dateFormatter";

function CustomerDetails() {
  const user = useStore((store) => store.selectedUser);

  console.log(user);
  return (
    <div>
      <UserBadge
        image={user?.image}
        name={`${user?.first_name} ${user?.last_name}`}
      />
      <Icon icon="envelope" label={user?.email} />
      <Icon icon="fa-calendar" label={dateFormatter(user?.date_of_birth)} />
      <Icon icon="dollar" label={user?.payment_amount} />
    </div>
  );
}

export default CustomerDetails;

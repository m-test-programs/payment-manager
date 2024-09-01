import React from "react";
import styles from "../../../styles/DashboardHeader.module.scss";
import IconBadge from "../../../components/IconBadge";
import Icon from "../../../components/Icon";
import UserBadge from "../../../components/UserBadge";
import SearchInputAsync from "../../../components/SearchInputAsync";
import { Box } from "@mui/material";
import useStore from "../../../store/store";

function ListOption(props) {
  const { optionProps, option, key } = props;

  const imgStyle = {
    width: "1.4rem",
    height: "1.4rem",
    objectFit: "cover",
    borderRadius: "100%",
    overflow: "hidden",
  };

  return (
    <Box
      key={key}
      component="li"
      {...optionProps}
      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
    >
      <img src={`images/${option.image}`} alt="user-image" style={imgStyle} />{" "}
      <span>
        {option.first_name} {option.last_name}
      </span>
    </Box>
  );
}

function DashboardHeaderTopbar() {
  const inputStyle = {
    width: "100%",
    backgroundColor: "var(--dark-soft)",
    color: "#FFF",
    "& .MuiInputBase-root": {
      padding: "0.2rem",
      paddingLeft: "0.5rem",
    },
    "& .MuiInputBase-input": {
      padding: "0.2rem !important",
      color: "#FFF",
    },

    "& .MuiInputLabel-root": {
      fontSize: "0.8rem",
    },
  };

  const setUser = useStore((store) => store.setSelectedUser);

  return (
    <div className={styles.topBar}>
      <div className={styles.topBar__search}>
        <div className={styles.topBar__titleWrapper}>
          <IconBadge icon="dollar-sign" />
          <h3 className={styles.topBar__title}>Payment Manager Dashboard</h3>
        </div>
        <div className={styles.topBar__searchInput}>
          <SearchInputAsync
            inputStyle={inputStyle}
            placeholder="Search Customer"
            renderOptionComponent={ListOption}
            optionLabel="full_name"
            optionKey="user_id"
            onInputChange={(value) => setUser(value)}
            useObjectAsValue
            endpoint="users/get_data.php"
          />
        </div>
      </div>
      <div className={styles.topBar__user}>
        <Icon icon="bell" />
        <Icon icon="gear" />
        <UserBadge image="admin.jpg" name="Adrian Smith" />
      </div>
    </div>
  );
}

export default DashboardHeaderTopbar;

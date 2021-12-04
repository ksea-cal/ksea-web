import React, { Link, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import styles from "./header.module.css";

function Header() {
  const [value, setValue] = useState("home");

  const handleChange = (event, newValue) => {
    // 여기서 렌더링 되어버려서 문제가 되는 이유를 몰겠
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className={styles.headerbody}>
      <div className={styles.leftbody}>
        <p>개세 로고</p>
      </div>
      <div className={styles.mainbody}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor=""
          aria-label="secondary tabs example"
          centered
        >
          <Tab href="/home" value="home" label="Home" sx={tabStyle} />
          <Tab href="/events" value="events" label="Events" sx={tabStyle} />
          <Tab
            href="/focusgroup"
            value="focusgroup"
            label="Focus Group"
            sx={tabStyle}
          />
          <Tab href="/members" value="members" label="Members" sx={tabStyle} />
          <Tab href="/alumni" value="alumni" label="Alumni" sx={tabStyle} />
        </Tabs>
      </div>
      <div className={styles.rightbody}>
        <IconButton>
          <PersonOutlineIcon>
            <li>
              <Link to="/user" />
            </li>
          </PersonOutlineIcon>
        </IconButton>
      </div>
    </div>
  );
}

const tabStyle = {
  width: "20%",
  color: "#0b254b",
  "&:hover": {
    color: "#0b254b",
    opacity: 0.5,
  },
};

export default Header;

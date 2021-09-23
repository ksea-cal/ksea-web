import React from "react";
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import styles from './header.module.css';

function Header() {
    const [value, setValue] = React.useState('events');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.headerbody}>
            <div className={styles.leftbody}>
            </div>
            <div className={styles.mainbody}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor=""
                    aria-label="secondary tabs example"
                    centered
                >
                    <Tab value="events" label="Events" sx={tabStyle} />
                    <Tab value="focusgroup" label="Focus Group" sx={tabStyle} />
                    <Tab value="members" label="Members" sx={tabStyle} />
                    <Tab value="alumni" label="Alumni" sx={tabStyle} />
                </Tabs>
            </div>
            <div className={styles.rightbody}>
                <IconButton>
                    <PersonOutlineIcon />
                </IconButton>
            </div>
        </div>
    );
}

const tabStyle = {
    width: "25%", color: '#0b254b',
    '&:hover': {
        color: '#0b254b',
        opacity: 0.5,
    }
}

export default Header;
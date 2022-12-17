import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonIcon from "@mui/icons-material/Person";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DehazeIcon from "@mui/icons-material/Dehaze";

interface LinkTabProps {
  label?: string;
  href?: string;
  icon?: any;
  iconPosition: any;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", backgroundColor: "#f2f2f2", borderRadius: "15px" }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab
          icon={<PersonIcon />}
          iconPosition="start"
          label="Page One"
          href="/user/profile"
        />
        <LinkTab
          icon={<LockPersonIcon />}
          iconPosition="start"
          label="Page Two"
          href="/user/authentication"
        />
        <LinkTab
          icon={<NotificationsIcon />}
          iconPosition="start"
          label="Page Three"
          href="/user/notifications"
        />
        <LinkTab
          icon={<DehazeIcon />}
          iconPosition="start"
          label="Preferences"
          href="/user/preferences"
        />
      </Tabs>
    </Box>
  );
}

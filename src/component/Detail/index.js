import React, { useEffect, useRef, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const handleTabChange = (event, newValue) => {
  // setClickValue("");
  // setSelvalue({});
  // setTabValue(newValue);
};

const Detail = () => {
  const tabList = ["탭1", "탭2", "탭3", "탭4", "탭5"];
  const [tab_value, setTabValue] = useState(0);
  return (
    <div className="container">
      <div>Detail</div>
      <div className="table-container">
        <AppBar position="static">
          <Tabs
            value={tab_value}
            onChange={handleTabChange}
            aria-label="simple tabs example"
          >
            {tabList.map((row, index) => {
              return (
                <Tab
                  key={index}
                  label={row.name}
                  {...a11yProps(+row.tab_order - 1)}
                  sx={{ textTransform: "none" }}
                />
              );
            })}
          </Tabs>
        </AppBar>
      </div>
    </div>
  );
};

export default Detail;

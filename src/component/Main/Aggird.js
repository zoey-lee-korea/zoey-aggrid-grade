import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { MDBCard, MDBCardTitle } from "mdb-react-ui-kit";

import "../../assets/css/layout.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Aggird = () => {
  const [tab_value, setTabValue] = useState(0);
  const [click_value, setClickValue] = useState("");
  const [selvalue, setSelvalue] = useState({});
  const handleTabChange = (event, newValue) => {
    setClickValue("");
    setSelvalue({});
    setTabValue(newValue);
  };

  const tabList = [{ name: "제목1" }, { name: "제목2" }];

  // tabList.forEach((item, index) => {
  //     item.tab_order = `${index + 1}`;
  // });

  return (
    <>
      <div>Aggird</div>
      <div className="table-container">
        <div className="container">
          <MDBCard className="panel" style={{ padding: "20px" }}>
            <MDBCardTitle>
              <b>화면 타이틀</b>
            </MDBCardTitle>
          </MDBCard>
          <AppBar position="static">
            <Tabs
              value={tab_value}
              onChange={handleTabChange}
              aria-label="main page tabs"
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
          {/* {tabList.map((row, index) => {
                    return (
                    !isLoading && (
                        <TabPanel value={tab_value} index={index} key={index}>
                        {row.program_id === "DefectDetailTab" ? (
                            <DefectDetailTab
                            sprint_list={sprint_list}
                            scrum_list={scrum_list}
                            domain_list={domain_list}
                            sel_prj_id={selected_projectId}
                            selected_date={selected_date.current}
                            sel_sprint={sel_dev_sprint.current}
                            sel_nthsprint={sel_nthsprint.current}
                            thirdTestProgramList={thirdTestProgramList}
                            custTestProgramList={custTestProgramList}
                            signalStandard={signalStandard}
                            />
                        ) : (
                            <DetailTableParent
                            name={row.program_id}
                            sprint_list={sprint_list}
                            scrum_list={scrum_list}
                            domain_list={domain_list}
                            prj_code={prjCode}
                            relatedList={relatedList}
                            ifMethodList={ifMethodList}
                            ifDegreeList={ifDegreeList}
                            ifDevelopStatusList={ifDevelopStatusList}
                            ifDomainList={ifDomainList}
                            ifScrumList={ifScrumList}
                            sel_prj_id={selected_projectId}
                            selected_date={selected_date.current}
                            sel_sprint={sel_dev_sprint.current}
                            sel_nthsprint={sel_nthsprint.current}
                            program_type_list={program_type_list}
                            dev_group_list={dev_group_list}
                            designer_list={designer_list}
                            developer_list={developer_list}
                            dev_type_list={dev_type_list}
                            thirdTestProgramList={thirdTestProgramList}
                            custTestProgramList={custTestProgramList}
                            is_onboarding="0"
                            setTabValue={setTabValue}
                            click_value={click_value}
                            selvalue={selvalue}
                            setSelvalue={setSelvalue}
                            setClickValue={setClickValue}
                            index={index}
                            searchAuthorization={searchAuthorization}
                            signalStandard={signalStandard}
                            tabList={tabList}
                            group_list={props.group_list}
                            />
                        )}
                        </TabPanel>
                    )
                    );
                })} */}
        </div>
      </div>
    </>
  );
};

export default Aggird;

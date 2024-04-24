import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

import "../../assets/css/navbar.css";

export default function NavigationBar(props) {
  const prjCode = props.prjCode;
  const [prj_name, setPrjName] = useState("");

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="white"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Navbar.Brand
        // href={`/erpdash/solution_detail/${prjCode}`} // ZOEY
        href={`/main`}
        style={{ color: "#4D34B1", fontWeight: "700", marginLeft: "40px",padding:"12px 0" }}
      >
        {/* {prj_name} // ZOEY */} 
        zoey's study project
      </Navbar.Brand>
      <div className="header-sub-title">
        ag-grid 연습
      </div>
    </Navbar>
  );
}

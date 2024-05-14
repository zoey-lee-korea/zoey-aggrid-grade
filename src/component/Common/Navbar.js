import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import "./navbar.css";
import favicon from "../../assets/images/favicon.png";

export default function NavigationBar(props) {
  // OLD: 기존엔 props를 사용함. Ex) props.navList를 이용해 공통 코드에서 navList 목록을 받아온다
  // const prjCode = props.prjCode;
  // const [prj_name, setPrjName] = useState("");

  const navList = ["메인", "상세", "Everything", "Zoey"];

  const [selectedMenu, setSelectedMenu] = useState(props.selected_menu);

  useEffect(() => {
    setSelectedMenu(props.selected_menu);
  }, [props.selected_menu]);

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
        // href={`/erpdash/solution_detail/${prjCode}`} // OLD
        href={`/main`}
        style={{
          color: "#4D34B1",
          fontWeight: "700",
          marginLeft: "40px",
          padding: "12px 0",
        }}
      >
        {/* {prj_name} // OLD */}
        <Image
          src={favicon} // 이미지 경로
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="zoey"
          style={{ paddingRight: "10px" }}
        />
        Zoey의 프로젝트
      </Navbar.Brand>

      <div className="header-sub-title">부제</div>

      <Navbar.Collapse
        id="responsive-navbar-nav"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {
          // !!props.navList ? // OLD
          !!navList ? (
            <Nav className="mr-auto">
              {navList.map((item, index) => {
                const NAVURL = {
                  메인: "main",
                  상세: "detail",
                  Everything: "everything",
                  Zoey: "zoey",
                };

                return (
                  <Nav.Link
                    key={index}
                    href={`/${NAVURL[item]}`}
                    className={`custom-tab ${
                      selectedMenu === NAVURL[item] ? "active" : ""
                    }`}
                    onClick={() => {
                      // 모든 메뉴 항목에서 'active' 클래스 제거
                      document
                        .querySelectorAll(".custom-tab")
                        .forEach((tab) => {
                          tab.classList.remove("active");
                        });
                    }}
                  >
                    {item}
                  </Nav.Link>
                );
              })}
            </Nav>
          ) : null
        }
      </Navbar.Collapse>
    </Navbar>
  );
}

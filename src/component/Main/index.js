import React, { useEffect, useRef, useState } from "react";

import "../../assets/css/layout.css";

import Navbar from "../Common/Navbar";
import Aggird from "./Aggird";

const Main = () => {
  return (
    <div className="container">
      <div>Main</div>
      <Aggird />
    </div>
  );
};

export default Main;

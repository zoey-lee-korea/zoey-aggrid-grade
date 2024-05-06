import React, { useEffect, useRef, useState } from "react";

import "../../assets/css/layout.css";

import Navbar from "../Common/Navbar";
import Aggird from "./Aggird";

const Main = () => {
  return (
    <>
      <Navbar />
      <div>Main</div>
      <Aggird />
    </>
  );
};

export default Main;

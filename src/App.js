import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useLocation } from "react-router-dom";

import Navbar from "./component/Common/Navbar";
import Main from "./component/Main";
import Detail from "./component/Detail";
import Everything from "./component/Everything";
import Zoey from "./component/Zoey";

const NavbarWithLocation = () => {
  const location = useLocation();
  const selectedMenu = location.pathname.replace("/", "");
  return <Navbar selected_menu={selectedMenu} />;
};

const Home = () => {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <Router basename="/zoey"> */}
        <Router>
          <NavbarWithLocation />
          <Routes>
            <Route path="/main" element={<Main />}></Route> {/* 메인 */}
            <Route path="/detail" element={<Detail />}></Route> {/* 상세 */}
            <Route path="/everything" element={<Everything />}></Route>
            <Route path="/zoey" element={<Zoey />}></Route>
          </Routes>
        </Router>
      </LocalizationProvider>
    </div>
  );
};

export default Home;

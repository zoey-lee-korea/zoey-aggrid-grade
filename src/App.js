import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Main from "./component/Main";
import Detail from "./component/Detail";
import Everything from "./component/Everything";
import Zoey from "./component/Zoey";

const Home = () => {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <BrowserRouter basename="/zoey"> */}
        <BrowserRouter>
          <Routes>
            {/* 메인 */}
            <Route path="/main" element={<Main />}></Route>

            {/* 상세 */}
            <Route path="/detail" element={<Detail />}></Route>

            {/* 개인 작업 */}
            <Route path="/everything" element={<Everything />}></Route>

            {/* 개인 작업 */}
            <Route path="/zoey" element={<Zoey />}></Route>
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </div>
  );
};

export default Home;

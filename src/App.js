import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Main from "./component/Main";
import Zoey from "./component/My/Zoey";
import SolutionDetail from "./component/SolutionDetail/SolutionDetail";

const Home = () => {
    return (
        <div className="App">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <BrowserRouter basename="/zoey"> */}
                <BrowserRouter>
                    <Routes>
                        {/* 개인 작업 */}
                        <Route path="/zoey" element={<Zoey />}></Route>

                        {/* 메인 */}
                        {/* <Route path="/main_dashboard" element={<Main />}></Route> */}
                        <Route path="/main" element={<Main />}></Route>

                        {/* 전자/엔솔 개발진척 */}
                        <Route path="/solution_detail" element={<SolutionDetail />}></Route>
                    </Routes>
                </BrowserRouter>
            </LocalizationProvider>
        </div>
    );
};

export default Home;
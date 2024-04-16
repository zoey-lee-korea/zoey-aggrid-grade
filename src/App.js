import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Main from "./component/DashboardMain/Main";
import SolutionDetail from "./component/SolutionDetail/SolutionDetail";

const Home = () => {
    return (
        <div className="App">
            <BrowserRouter basename="/zoey">
                <Routes>
                    {/* 메인 */}
                    <Route path="/main_dashboard" element={<Main />}></Route>

                    {/* 전자/엔솔 개발진척 */}
                    <Route path="/solution_detail" element={<SolutionDetail />}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Home;
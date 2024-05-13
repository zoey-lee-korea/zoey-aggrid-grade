import Navbar from "../Common/Navbar";

import GlobalHelloWorld from "./LocalizationProvider/GlobalHelloWorld";

const Zoey = () => {
  return (
    <>
      <Navbar selected_menu="zoey" />
      <div className="container">
        <div>Zoey</div>
        <GlobalHelloWorld />
      </div>
    </>
  );
};

export default Zoey;

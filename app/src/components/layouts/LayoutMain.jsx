import Header from "../common/Header";
import Nagivation from "../common/Nagivation";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";


const LayoutMain = () => {
  
  return (
    <div className="container mx-auto bg-slate-100 mt-10">
      {/** header */}
      <Header/>
      {/** body */}

      <div className="flex md:flex-row mt-6 mb-6 gap-4 h-full ml-5 mr-5 sm:flex-col">
        <div className="pt-3 lg:w-[200px] sm:flex-auto pb-3 h-72 shadow-lg bg-white">
          <Nagivation />
        </div>
        <div className="pb-3 flex-auto w-full">
          <div className="tracking-wide text-justify">
            <Outlet />
          </div>
        </div>
      </div>

      {/** Footer */}
      <Footer />
    </div>
  );
};

export default LayoutMain;

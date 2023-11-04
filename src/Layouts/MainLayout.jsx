import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div >
      <div className="max-w-[1140px] mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;

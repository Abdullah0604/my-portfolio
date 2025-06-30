import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <ToastContainer />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default MainLayout;

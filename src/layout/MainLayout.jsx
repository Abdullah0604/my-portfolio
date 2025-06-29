import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

function MainLayout() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <ToastContainer />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;

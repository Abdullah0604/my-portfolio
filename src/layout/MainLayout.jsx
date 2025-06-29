import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;

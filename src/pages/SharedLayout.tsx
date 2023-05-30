import { FC } from "react";
import Navbar from "../component/Navbar";
import HomeModals from "../component/HomeModals";
import { Outlet } from "react-router-dom";
const SharedLayout: FC = () => {
  return (
    <div className="h-full ">
      <Navbar />
      <hr />

      <Outlet />
    </div>
  );
};

export default SharedLayout;

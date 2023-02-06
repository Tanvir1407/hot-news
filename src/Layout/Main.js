import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheared/Footer";
import Header from "../Pages/Sheared/Header";
import LeftsideNav from "../Pages/Sheared/LeftsideNav";
import RightSideNav from "../Pages/Sheared/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-12">
        <div className="bg-red-200 col-span-2">
          <LeftsideNav></LeftsideNav>
        </div>
        <div className="bg-blue-300 col-span-7">
          <Outlet></Outlet>
        </div>
        <div className="bg-sky-900 col-span-3">
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheared/Footer";
import Header from "../Pages/Sheared/Header";
import LeftsideNav from "../Pages/Sheared/LeftsideNav";
import RightSideNav from "../Pages/Sheared/RightSideNav";

const Main = () => {
  return (
    <div className="bg-gray-200 ">
      <Header></Header>
      <div className="grid mt-8 grid-cols-12 mx-10 ">
        <div className=" col-span-12 lg:col-span-2 md:col-span-2">
          <LeftsideNav></LeftsideNav>
        </div>
        <div className="rounded col-span-12 lg:col-span-7  md:col-span-7">
          <Outlet></Outlet>
        </div>
        <div className=" col-span-12  lg:col-span-3 md:col-span-3">
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

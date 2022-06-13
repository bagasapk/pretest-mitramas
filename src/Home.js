import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Breadcrumb } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import profile from "./images/1.jpg";
import Company from "./components/Company";
import Location from "./components/Location";
import Bank from "./components/Bank";
import Relasi from "./components/Relasi";
import Activity from "./components/Activity";
import logo from "./logo.svg";

const Home = () => {
  const routes = [
    {
      path: "index",
      breadcrumbName: "Perusahaan",
    },
    {
      path: "/",
      breadcrumbName: "Mitramas Infosys Global",
    },
  ];

  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span className="font-bold">{route.breadcrumbName}</span>
    ) : (
      <a href={paths.join("/")}>{route.breadcrumbName}</a>
    );
  }

  const [collapsed, setCollapsed] = useState(true);
  function renderButton() {
    if (collapsed) {
      return <MenuOutlined onClick={() => setCollapsed(!collapsed)} />;
    } else {
      return <CloseOutlined onClick={() => setCollapsed(!collapsed)} />;
    }
  }
  return (
    <div className="App sm:flex justify-start">
      <div className="sm:hidden logo flex w-full bg-white sm:w-16 mx-auto p-3 justify-between items-center ">
        {renderButton()}
        <img className="w-16" alt="logo" src={logo}></img>
        <div className="flex w-40 justify-between items-center">
          <div className="flex w-20 items-center justify-around">
            <SearchOutlined />
            <BellOutlined />
          </div>
          <div className="flex items-center justify-center sm:justify-end">
            <img
              className="profile w-8 h-8 rounded-full mx-2"
              alt="John Doe"
              src={profile}
            ></img>
            <p className="font-bold m-0">John Doe</p>
          </div>
        </div>
      </div>
      <Sidebar
        collapsed={collapsed}
        className={collapsed ? "hidden sm:block" : "block"}
      ></Sidebar>
      <div className="sm:w-screen">
        <div className="hidden sm:flex justify-between items-start mx-5 sm:mx-10 my-3 row-span-0 sm:h-10">
          <Breadcrumb separator=">" itemRender={itemRender} routes={routes} />
          <div className="sm:flex w-56 justify-between items-center">
            <div className="sm:flex basis-4/12">
              <SearchOutlined className="basis-10/12" />
              <BellOutlined />
            </div>
            <div className="flex basis-8/12 items-center justify-center sm:justify-end">
              <img
                className="profile w-8 h-8 rounded-full mx-2"
                alt="John Doe"
                src={profile}
              ></img>
              <p className="font-bold m-0">John Doe</p>
            </div>
          </div>
        </div>
        <div className="sm:grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-1">
          <Company className="mt-10 sm:mt-0 col-start-1 col-span-2"></Company>
          <div className="mx-5 sm:mx-0 sm:mr-5 col-start-3 col-span-3 lg:col-span-4 lg:grid grid-cols-11 gap-10 auto-rows-min">
            <Location className="mb-5 lg:mb-0 row-span-1 col-start-1 col-span-11"></Location>
            <div className="row-start-2 col-start-1 col-span-4 xl:col-span-5 grid grid-rows-2 lg:gap-4 md:mb-5">
              <Bank className="w-full"></Bank>
              <Relasi></Relasi>
            </div>
            <Activity className="py-5 sm:py-0 sm:my-0 lg:ml-5 xl:ml-0 col-start-6 col-span-6"></Activity>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

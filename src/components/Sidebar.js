import logo from "../logo.svg";
import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  AreaChartOutlined,
  StockOutlined,
  UnlockOutlined,
  TagOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from "antd";
import React, { useState } from "react";

const { Sider } = Layout;

function getItem(label, key, icon, children, route) {
  return {
    key,
    icon,
    children,
    label:
      label === "Dashboard" ? (
        <a href="/">{label}</a>
      ) : (
        <a href={`${label.toLowerCase()}`}>{label}</a>
      ),
  };
}

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

const items = [
  getItem("Dashboard", "1", <HomeOutlined />),
  getItem("Customers", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />),
  getItem("Team", "sub2", <TeamOutlined />),
  getItem("Files", "7", <FileOutlined />),
  getItem("Chart", "9", <AreaChartOutlined />),
  getItem("Stock", "10", <StockOutlined />),
  getItem("Privacy", "11", <UnlockOutlined />),
  getItem("Tag", "12", <TagOutlined />),
  getItem("Wallet", "13", <WalletOutlined />),
];

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={props.className}>
      {window.location.pathname === "/customers" ? null : (
        <div className="sm:hidden mx-5 sm:mx-10 my-3 row-span-0 sm:h-10">
          <Breadcrumb separator=">" itemRender={itemRender} routes={routes} />
        </div>
      )}
      <Layout
        className="sidebar h-full"
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          style={{ width: "1rem !important" }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          theme="light"
        >
          <div className="logo hidden sm:block sm:w-16 mx-auto my-5">
            <img alt="logo" src={logo}></img>
          </div>
          <Menu
            theme="light"
            defaultSelectedKeys={["5"]}
            mode="inline"
            items={items}
          >
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
};

export default Sidebar;

import { Button, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Add from "./components/Add";
import Popup from "./components/Popup";
import Sidebar from "./components/Sidebar";
import Update from "./components/Update";
import RestService from "./services/RestService";
import {
  SearchOutlined,
  BellOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import logo from "./logo.svg";
import profile from "./images/1.jpg";

const Customers = () => {
  const baseURL = "https://mitramas-test.herokuapp.com";

  useEffect(() => {
    getInfo();
  }, []);

  const [info, setInfo] = useState([]);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [updateName, setUpdateName] = useState([]);
  const [param, searchParam] = useState("");
  const [filter, searchFilter] = useState("All");
  const [searchParamQ] = useState([
    "name",
    "address",
    "country",
    "phone_number",
    "job_title",
    "status",
  ]);

  function search(items) {
    return items.filter((item) => {
      if (item.status.toString() === filter) {
        return searchParamQ.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(param.toLowerCase()) > -1
          );
        });
      } else if (filter === "All") {
        return searchParamQ.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(param.toLowerCase()) > -1
          );
        });
      }
      return false;
    });
  }
  const togglePopupAdd = () => {
    setIsOpenAdd(!isOpenAdd);
  };

  const togglePopupUpdate = (record) => {
    setIsOpenUpdate(!isOpenUpdate);
    setUpdateName(record);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Phone Number",
      key: "phone_number",
      dataIndex: "phone_number",
    },
    {
      title: "Job",
      key: "job_title",
      dataIndex: "job_title",
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) =>
        record.status === true ? <p>Active</p> : <p>Inactive</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div className="flex justify-between w-48">
            <button
              className="bg-blue-300 p-2 rounded "
              onClick={() => togglePopupUpdate(record)}
            >
              Update {record.name.split(" ")[0]}
            </button>
            <button
              className="bg-red-300 p-2 rounded "
              onClick={() => deleteCustomer(record.id)}
            >
              Delete
            </button>
          </div>
        </Space>
      ),
    },
  ];

  const deleteCustomer = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4e944f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: baseURL + "/customers",
          headers: {},
          data: {
            id: id, // This is the body part
          },
        })
          .then(() => {
            Swal.fire(
              "Success!",
              "Your data has been deleted!",
              "success"
            ).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    });
  };

  const getInfo = () => {
    RestService.get()
      .then((res) => {
        const allInfo = res.data.data;
        setInfo(allInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleToken = () => {
    axios({
      method: "post",
      url: baseURL + "/auth/login",
      headers: {},
      data: {
        email: "akun40@mig.id", // This is the body part
        password: "41504C81", // This is the body part
      },
    })
      .then((res) => {
        const token = res.data.access_token;
        sessionStorage.setItem("token", token);
        Swal.fire("Success!", "Your token has been created!", "success").then(
          (result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          }
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function renderButton() {
    if (collapsed) {
      return <MenuOutlined onClick={() => setCollapsed(!collapsed)} />;
    } else {
      return <CloseOutlined onClick={() => setCollapsed(!collapsed)} />;
    }
  }
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="sm:flex">
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
      <div className="overflow-y-auto w-screen sm:m-10 lg:m-5 xl:m-10">
        {info.length > 0 ? null : (
          <p className="text-center p-5 bg-red-200 w-64 sm:w-full my-5 mx-auto rounded-lg">
            Data kosong, anda harus generate token terlebih dahulu
          </p>
        )}
        <h1 className="text-4xl font-bold sm:text-left">Customers</h1>
        <button
          onClick={() => handleToken()}
          className="flex bg-stone-50 p-4 rounded font-bold mx-auto sm:mx-0"
        >
          Generate Token
        </button>
        <div className="lg:flex justify-between items-center">
          <div className="sm:flex  my-5">
            <input
              className="basic-slide sm:mr-5"
              type="search"
              id="search"
              placeholder="Find Customer"
              onChange={(e) => searchParam(e.target.value)}
            ></input>
            <div className="sm:flex my-5 sm:my-0">
              <label>Status</label>
              <select
                onChange={(e) => searchFilter(e.target.value)}
                defaultValue="All"
              >
                <option value="All">All</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-around lg:justify-between sm:w-48 mb-5 sm:mb-5">
            <Button onClick={togglePopupAdd}>Tambah Data</Button>
            <p className="m-0 mx-3 sm:mx-0">{info.length} Result</p>
          </div>
        </div>
        <div className="tableOverflow">
          <Table columns={columns} dataSource={search(info)}></Table>
        </div>
      </div>
      {isOpenAdd && (
        <Popup
          content={
            <>
              <Add></Add>
            </>
          }
          handleClose={togglePopupAdd}
        />
      )}
      {isOpenUpdate && (
        <Popup
          content={
            <>
              <Update update={updateName}></Update>
            </>
          }
          handleClose={togglePopupUpdate}
        />
      )}
    </div>
  );
};

export default Customers;

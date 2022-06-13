import React from "react";
import { Button } from "antd";
import visa from "../images/Visa_Inc._logo.svg.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Bank = (props) => {
  const banks = [
    {
      path: visa,
      label: "visa",
      title: "Bank KB Bukopin",
      number: "***** 0876",
      name: "Yusron Taufiq",
      currency: "IDR",
    },
    {
      path: visa,
      label: "visa",
      title: "Citibank, NA",
      number: "***** 5525",
      name: "Si Tampan",
      currency: "USD",
    },
  ];
  return (
    <div className={props.className}>
      <div className="bg-white p-5 lg:p-3 xl:p-5 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="m-0 text-lg font-bold">Akun Bank</h2>
          <Button>+ Tambah Akun Bank</Button>
        </div>
        <div>
          {banks.map((index, keys) => (
            <div key={keys} className="flex justify-between my-4">
              <div className="flex">
                <div className="hidden lg:block bg-stone-300 w-24 h-auto rounded-lg">
                  <img className="w-8" alt={index.label} src={index.path}></img>
                </div>
                <div className="text-left ml-5">
                  <h3>{index.title}</h3>
                  <p className="m-0 font-normal text-gray-400">
                    {index.number} - {index.name}
                  </p>
                  <p className="m-0 font-normal text-gray-400">
                    {index.currency}
                  </p>
                </div>
              </div>
              <div className="flex">
                <a href="#home">
                  <EditOutlined
                    style={{ color: "green", marginInline: "1rem" }}
                  />
                </a>
                <a href="#home">
                  <DeleteOutlined style={{ color: "red" }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bank;

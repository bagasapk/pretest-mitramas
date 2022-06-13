import React, { useState } from "react";
import Banner from "../images/1.jpg";
import {
  EditOutlined,
  PlayCircleFilled,
  PauseCircleOutlined,
} from "@ant-design/icons";

const Company = (props) => {
  const [play, setPlay] = useState(false);
  const renderButton = () => {
    return play ? (
      <div className="flex justify-between text-green-700 items-center">
        <p className="text-normal font-bold m-0">Aktif</p>
        <PlayCircleFilled className="text-xl" onClick={() => setPlay(false)} />
      </div>
    ) : (
      <div className="flex justify-between items-center">
        <p className="text-normal font-bold m-0">Non-Aktif</p>
        <PauseCircleOutlined
          className="text-xl"
          onClick={() => setPlay(true)}
        />
      </div>
    );
  };

  const perusahaan = [
    {
      title: "Singkatan",
      label: "MIG",
      type: "string",
    },
    {
      title: "Alamat Perusahaan",
      label: "Jl. Tebet Raya No.42, Jakarta Selatan",
      type: "string",
    },
    {
      title: "Penanggung Jawab (PIC)",
      label: "John Doe",
      type: "string",
    },
    {
      title: "Tanggal PKP",
      label: "03 Maret 2021",
      type: "string",
    },
    {
      title: "E-mail",
      label: "mig@mitrasolusi.group",
      type: "link",
    },
    {
      title: "No. Telp",
      label: "021-5678-1234",
      type: "link",
    },
    {
      title: "Situs Web",
      label: "mitramas.com",
      type: "link",
    },
  ];

  return (
    <div className={props.className}>
      <div className="rounded-lg mx-5 xl:mx-10 bg-white sm:h- mb-5">
        <div className="h-48">
          <img
            className="rounded-t-lg profile h-28 w-full"
            alt="banner"
            src={Banner}
          ></img>
          <img
            className="profileLogo mx-auto rounded-full w-28 h-28"
            alt="profile"
            src={Banner}
          ></img>
        </div>
        <h2 className="text-lg font-bold ">Mitramas Infosys Global</h2>
        <p className="text-xs font-normal text-gray-400">Layanan IT</p>
        <a
          href="#home"
          className="text-normal text-green-700 font-semibold flex justify-center items-center"
        >
          <EditOutlined className="mx-2" />
          <p className="m-0"> Sunting Profile</p>
        </a>
        <div className="text-left p-7 my-5">
          <div className="mb-5">
            <p className="text-xs font-normal text-gray-400 mb-2">
              Status Perusahaan
            </p>
            {renderButton()}
          </div>
          {perusahaan.map((index,keys) => (
            <div key={keys} className="mb-5">
              <p className="text-xs font-normal text-gray-400 mb-2">
                {index.title}
              </p>
              {index.type === "string" ? (
                <p>{index.label}</p>
              ) : (
                <a
                  href="#home"
                  className="overflow-hidden text-green-700 font-normal"
                >
                  {index.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;

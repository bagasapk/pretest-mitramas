import React from "react";
import { HomeOutlined, KeyOutlined, SlidersOutlined } from "@ant-design/icons";

const Location = (props) => {
  const info = [
    {
      icon: <HomeOutlined className="text-3xl" />,
      jumlah: 20,
      label: "Induk",
    },
    {
      icon: <KeyOutlined className="text-3xl" />,
      jumlah: 3,
      label: "Sub Lokasi Level 1",
    },
    {
      icon: <SlidersOutlined className="text-3xl" />,
      jumlah: 3,
      label: "Sub Lokasi Level 2",
    },
  ];
  return (
    <div className={props.className}>
      <div className="bg-white p-5 rounded-lg">
        <div className="flex justify-between mb-3">
          <h2 className="text-lg font-bold">Lokasi</h2>
          <a href="#home" className="text-normal text-green-700 font-semibold">
            Lihat Semua
          </a>
        </div>
        <div className="lg:grid grid-cols-3 gap-4">
          {info.map((index ,keys) => (
            <div key={keys} className="my-5 lg:my-0 flex justify-between info text-stone-50 items-center p-3 rounded-md flex justify-between info text-stone-50 items-center p-3 rounded-md">
              {index.icon}
              <div className="text-right">
                <p className="m-0 text-xl font-bold">{index.jumlah}</p>
                <p className="m-0">{index.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;

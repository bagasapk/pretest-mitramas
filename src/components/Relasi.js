import React from "react";
import { ShareAltOutlined } from "@ant-design/icons";

const Relasi = (props) => {
  const info = [
    {
      icon: <ShareAltOutlined className="text-2xl" />,
      jumlah: 20,
      label: "Memiliki",
    },
    {
      icon: <ShareAltOutlined className="text-2xl" />,
      jumlah: 108,
      label: "Menggunakan",
    },
    {
      icon: <ShareAltOutlined className="text-2xl" />,
      jumlah: 67,
      label: "Meminjam",
    },
  ];
  return (
    <div className={props.className}>
      <div className="bg-white p-5 lg:p-3 xl:p-5 rounded-lg h-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="m-0 text-lg font-bold">Relasi</h2>
          <a href="#home" className="text-normal text-green-700 font-semibold">
            Lihat Semua
          </a>
        </div>
        <div className="grid grid-rows-3 gap-4">
          {info.map((index,keys) => (
            <div key={keys} className="flex items-center">
              {index.icon}
              <div className="text-left ml-5">
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

export default Relasi;

import React from "react";

const Activity = (props) => {
  const perusahaan = [
    {
      activity:
        "Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa",
      date: "Hari ini, 06.00",
    },
    {
      activity: "Alamat Perusahaan",
      date: "Kemarin, 17.32",
    },
    {
      activity: "Penanggung Jawab (PIC)",
      date: "Kemarin, 17.32",
    },
  ];

  return (
    <div className={props.className}>
      <div className="bg-white rounded-lg p-5 lg:p-3 h-full">
        <h2 className="m-0 text-lg font-bold text-left mb-10">Aktivitas</h2>
        {perusahaan.map((index, keys) => (
          <div key={keys} className="mb-5 text-left">
            <p>{index.activity}</p>
            <p className="text-xs font-normal text-gray-400">{index.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;

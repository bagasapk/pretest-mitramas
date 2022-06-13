import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Update = (props) => {
  const baseURL = "https://mitramas-test.herokuapp.com";
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [updateInfo, setUpdateInfo] = useState([]);

  useEffect(() => {
    setUpdateInfo(props.update);
  }, [props.update]);

  const onSubmit = (data) =>
    Swal.fire({
      title: "Are you sure?",
      text: "is everything correct ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4e944f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "put",
          url: baseURL + "/customers",
          headers: {},
          data: {
            id: updateInfo.id,
            name: data.name ? data.name : updateInfo.name,
            address: data.address ? data.address : updateInfo.address,
            country: data.country ? data.country : updateInfo.country,
            phone_number: data.phone_number
              ? data.phone_number
              : updateInfo.phone_number,
            job_title: data.job_title ? data.job_title : updateInfo.job_title,
            status: data.status ? data.status : updateInfo.status,
          },
        })
          .then(() => {
            Swal.fire(
              "Success!",
              "Your data has been updated!",
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

  return (
    <div className="register">
      <div className="sideRegister p-4 text-left">
        <p className="sideTitle pt-5 text-left">Update Customers {}</p>
      </div>
      <div>
        <p>Please leave it blank if there's no update</p>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="inputRegister flex flex-col justify-between pt-4"
          >
            <div className="my-2">
              <label className="font-bold" htmlFor="name">
                Full Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder={updateInfo.name}
              ></input>
            </div>
            <div className="my-2">
              <label className="font-bold px-6" htmlFor="address">
                Address
              </label>
              <input
                {...register("address")}
                type="text"
                placeholder={updateInfo.address}
              ></input>
            </div>
            <div className="my-2">
              <label className="font-bold px-6  " htmlFor="country">
                Country
              </label>
              <input
                {...register("country")}
                type="text"
                placeholder={updateInfo.country}
              ></input>
            </div>
            <div className="my-2">
              <label className="font-bold px-6" htmlFor="phone_number">
                Number
              </label>
              <input
                {...register("phone_number")}
                type="number"
                placeholder={updateInfo.phone_number}
              ></input>
            </div>
            <div className="my-2">
              <label className="font-bold px-10" htmlFor="job_title">
                Job
              </label>
              <input
                {...register("job_title")}
                type="text"
                placeholder={updateInfo.job_title}
              ></input>
            </div>
            <div className="my-2">
              <label className="font-bold px-10" htmlFor="status">
                Status
              </label>
              <select {...register("status")} defaultValue={updateInfo.status}>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
            </div>
            {errors.apiError && (
              <span className="errorText text-start">
                Please wait for a moment
              </span>
            )}
            <button className="px-5 mx-auto" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RestService from "../services/RestService";
import Swal from "sweetalert2";

const Add = () => {
  const { register, handleSubmit, setError, formState } = useForm();
  const { errors } = formState;
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) =>
    Swal.fire({
      title: "Are you sure?",
      text: "is everything correct?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4e944f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, create it!",
    }).then((result) => {
      if (result.isConfirmed) {
        RestService.post(data)
          .then((response) => {
            console.log(response.data);
            setSuccess(!success);
            if (!success) {
              Swal.fire(
                "Success!",
                "Your data has been saved!",
                "success"
              ).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              });
            }
          })
          .catch((e) => {
            setError("apiError", { message: e });
          });
      }
    });

  return (
    <div className="register">
      <div className="sideRegister p-4 text-left">
        <p className="sideTitle pt-5 text-left">Add New Customers</p>
      </div>
      <div className="">
        <div className="">
          <div className=""></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="inputRegister flex flex-col justify-between pt-4"
          >
            <div className="my-2">
              <label className="font-bold" htmlFor="name">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Full Name"
              ></input>
            </div>
            {errors.name && (
              <span className="errorText text-start">
                This field is required
              </span>
            )}
            <div className="my-2">
              <label className="font-bold px-6" htmlFor="address">
                Address
              </label>
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Address"
              ></input>
            </div>
            {errors.address && (
              <span className="errorText text-start">
                This field is required
              </span>
            )}
            <div className="my-2">
              <label className="font-bold px-6  " htmlFor="country">
                Country
              </label>
              <input
                {...register("country", { required: true })}
                type="text"
                placeholder="Country"
              ></input>
            </div>
            {errors.country && (
              <span className="errorText text-start">
                This field is required
              </span>
            )}
            <div className="my-2">
              <label className="font-bold px-6" htmlFor="phone_number">
                Number
              </label>
              <input
                {...register("phone_number", { required: true })}
                type="number"
                placeholder="Phone Number"
              ></input>
            </div>
            {errors.phone_number && (
              <span className="errorText text-start">
                This field is required
              </span>
            )}
            <div className="my-2">
              <label className="font-bold px-10" htmlFor="job_title">
                Job
              </label>
              <input
                {...register("job_title", { required: true })}
                type="text"
                placeholder="Job"
              ></input>
            </div>
            {errors.job_title && (
              <span className="errorText text-start">
                This field is required
              </span>
            )}
            <div className="my-2">
              <label className="font-bold px-10" htmlFor="status">
                Status
              </label>
              <select {...register("status", { required: true })}>
                <option value={true} defaultValue>
                  True
                </option>
                <option value={false}>False</option>
              </select>
            </div>
            {errors.status && (
              <span className="errorText text-start">
                This field is required
              </span>
            )}
            {errors.apiError && (
              <span className="errorText text-start">
                Please wait for a moment
              </span>
            )}
            <button className="px-5 mx-auto" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;

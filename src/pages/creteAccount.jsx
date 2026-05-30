import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../compontent/button";
export default function CreateAccount() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });
const navigate = useNavigate();
const [loading, setloading] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();



  localStorage.setItem(
    "userData",
    JSON.stringify(formData)
  );


    setFormData({
      fullName: "",
      phone: "",
      email: "",
      password: "",
      company: "",
      agency: "Yes",
    });
  setloading(true)
    setTimeout(()=>{
     navigate("/account")
    },1000)
  };

  const inputClass =
    "peer w-full border-2 border-gray-200 rounded-md px-3 p-3 focus:outline-none focus:border-gray-400";

  const labelClass =
    "absolute left-3 bg-gray-50 px-1 text-gray-500 transition-all duration-200 top-4 peer-placeholder-shown:top-3  peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:font-bold  peer-focus:text-violet-600 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-3">
      <div className="w-full max-w-[400px] min-h-[95vh] bg-gray-50 border border-gray-300 rounded-2xl p-5 flex flex-col ">
        {/* Heading */}
        <div className="mb-3 mt-5">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            Create your
          </h1>
          <h1 className="text-3xl font-bold text-gray-900">
            PopX account
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1  justify-around"
        >
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder=" "
              className={inputClass}
              required
            />
            <label htmlFor="fullName" className={labelClass}>
              Full Name *
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=" "
              className={inputClass}
              required
            />
            <label htmlFor="phone" className={labelClass}>
              Phone Number *
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className={inputClass}
              required
            />
            <label htmlFor="email" className={labelClass}>
              Email Address *
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=" "
              className={inputClass}
              required
            />
            <label htmlFor="password" className={labelClass}>
              Password *
            </label>
          </div>

          {/* Company */}
          <div className="relative">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder=" "
              className={inputClass}
            />
            <label htmlFor="company" className={labelClass}>
              Company Name
            </label>
          </div>

          {/* Agency */}
          <div>
            <p className="font-medium text-gray-700 mb-3">
              Are you an Agency?{" "}
              <span className="text-red-500">*</span>
            </p>

            <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={formData.agency === "Yes"}
                  onChange={handleChange}
                  className="accent-violet-600"
                />
                Yes
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === "No"}
                  onChange={handleChange}
                  className="accent-violet-600"
                />
                No
              </label>
            </div>
          </div>

          {/* Button */}
         <Button
           text="Already Registered? Login"
           loading={loading}
           onClick={handleSubmit}
         />
        </form>
      </div>
    </div>
  );
}
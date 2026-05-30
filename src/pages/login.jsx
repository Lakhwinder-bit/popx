import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../compontent/button";
export default function Login() {
  const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
  const [realData, setrealData] = useState({})
  const [formData, setFormData] = useState({
    email: "",
    password: "",
 
  });
  useEffect(()=>{
const userData = JSON.parse(localStorage.getItem("userData"));
if(userData){
  setrealData(userData);
}
  },[])
const navigate = useNavigate();
const [loading, setloading] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
  setEmailError("");
  setPasswordError("")
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = formData;
  
   const realdatas = realData;

   if(formData.email === realData.email && 
      formData.password === realData.password
   ){
  setloading(true)
    setTimeout(()=>{
     navigate("/account")
     setloading(false)
    },1000)
    
        setFormData({
      email: "",
      password: "",
    
    });
  }else if(formData.email !== realData.email){
  setEmailError("Email does not match");
  }else if(!formData.password !== realData.password){
  setPasswordError("password does not match");
  }
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
            Signin to your
          </h1>
          <h1 className="text-3xl font-bold text-gray-900">
            PopX account
          </h1>
            {/* Description */}
          <p className="mt-6 text-gray-600 leading-8 font-medium">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
            Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 mt-3"
        >
       

       

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
            {emailError && (
  <p className="text-red-400 text-sm font-medium">
    {emailError}
  </p>
)}
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
{passwordError && (
  <p className="text-red-500 text-sm mt-1">
    {passwordError}
  </p>
)}
            <label htmlFor="password" className={labelClass}>
              Password *
            </label>
          </div>

        

          {/* Button */}
         <Button
           text="Login"
           loading={loading}
           onClick={handleSubmit}
         />
        </form>
      </div>
    </div>
  );
}
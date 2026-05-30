import React from "react";
import { BrowserRouter } from "react-router-dom";
export default function app(){
  return(
    <>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </>
  )
}
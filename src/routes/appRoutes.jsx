import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import CreateAccount from "../pages/creteAccount";
 export default function AppRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/crete" element={<CreateAccount/>}/>
        </Routes>
        </>
    )
}
import React from "react";
import { Routes, Route} from "react-router";

import Home from "./Pages/Home/home";
import About from "./Pages/About/about";

const AppRoutes =()=>{
return(
    <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
    </Routes>
)
}
export default AppRoutes;
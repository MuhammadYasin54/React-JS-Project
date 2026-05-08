import React from "react";
import { Routes, Route} from "react-router";

import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Services from "./Pages/Services/services";
import Contact from "./Pages/contact/contact";
import FeedBack from "./Pages/Feedback/feedback";

const AppRoutes =()=>{
return(
    <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
         <Route element={<Services/>} path="/services"/>
          <Route element={<Contact/>} path="/contact"/>
           <Route element={<FeedBack/>} path="/feedback"/>
    </Routes>
)
}
export default AppRoutes;
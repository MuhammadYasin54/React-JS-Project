import React from "react";
import { Routes, Route} from "react-router";

import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Services from "./Pages/Services/services";
import Contact from "./Pages/contact/contact";
import FeedBack from "./Pages/Feedback/feedback";
import OtherData from "./Pages/others/others";

const AppRoutes =()=>{
return(
    <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
         <Route element={<Services/>} path="/services"/>
          <Route element={<Contact/>} path="/contact"/>
           <Route element={<FeedBack/>} path="/feedback"/>
            <Route element={<OtherData/>} path="/OtherData"/>
    </Routes>
)
}
export default AppRoutes;
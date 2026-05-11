import React from "react";
import { Link } from "react-router";

const NavBar = ()=>{
    return (
        <div id="container">
        <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/about"}>About</Link>
        </li>
         <li>
            <Link to={"/contact"}>Contact</Link>
        </li>
         <li>
            <Link to={"/services"}>Services</Link>
        </li>
         <li>
            <Link to={"/feedback"}>FeedBack</Link>
        </li>
    </ul>
    </div>
    )

}

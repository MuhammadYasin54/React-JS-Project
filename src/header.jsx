import React from "react";
import "./components/header.css"


const Header =(props)=>{
    console.log("Props of Header Component", props)
    const {screenName} = props;

    return (
        <div>
            <h1 className="header">Header Component</h1>
            <h1 className="header">{`Welcome to ${screenName} screen`}</h1>
            
        </div>
    )
}
export default Header;
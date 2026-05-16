import React from "react";
import {useParams, useNavigate} from "react-router"
import Users from "./utils/dummy";

const CustomUser = ()=>{
    const {uid} =  useParams();
    console.log("Params:", uid)
    const navigate = useNavigate();
    const handleNavigation = ()=>{
        navigate("/User")


    }

    return(
        <div>
            <h1>
                Name of User
            </h1>
            <h1>User: {uid} </h1>
            <h1>{`User: ${Users.find((item)=>{return item.id ==uid})?.name}`}</h1>
            <button onClick={handleNavigation}>Users Screen</button>
        </div>
    )
}
export default CustomUser;
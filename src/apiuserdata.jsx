import React, { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router"
import ApiData from "./ApiData";

const UserData = ()=>{
    const {uid} =  useParams();
    console.log("Params:", uid)
    const navigate = useNavigate();

    const [userData, setUserData] = useState(null)

    useEffect (()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
        .then((Success)=>{
            return (Success.json())
        })
            .then((data)=>{
                setUserData(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }, [uid]);
    
   

    const handleNavigation = ()=>{
        navigate("/ApiData")

        


    }

    return(
        <div>
            
            <h1>User Detail Page</h1>

            <h2>User ID: {uid}</h2>
           

            <h2>Name: {userData?.name}</h2>

            <h2>Username: {userData?.username}</h2>

            <h2>Email: {userData?.email}</h2>
           

            <button onClick={handleNavigation}>Api Data Screen</button>
        </div>
    )
}
export default UserData;
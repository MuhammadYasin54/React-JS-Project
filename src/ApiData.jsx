import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ApiData=()=>{

    const navigate =  useNavigate();
    const [users, setUsers] = useState([]);

const ApiUserData = ()=>{
    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
    .then((Success)=>{
       
        return Success.json()
    })
    .then((actualData)=>{
        
        setUsers(actualData)
    })
    .catch((err)=>{
        console.log("Error in API", err)
    })
   
}
const Viewuserdata = (uid)=>{
 console.log("uid", uid)

    navigate(`/apidata/${uid}`,{
        
    })
}
useEffect(()=>{
    ApiUserData()    
}, [])

    return (
        <div>
            <h1>
                API Data
            </h1>
            <ul>
                {
                users.map((item, index)=>{
                   return( <li key={index}> {item?.name}<button onClick={()=>Viewuserdata(item?.id)}>View</button></li>)
                })
            }
            </ul>
        </div>
    )
}


export default ApiData;
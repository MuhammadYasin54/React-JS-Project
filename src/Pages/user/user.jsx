import React, { use } from "react";
import { useNavigate } from "react-router";
import Users from "../../utils/dummy";

const User = () => {

    const navigate = useNavigate();
    
    const ViewUser = (uid)=>{

    
    console.log("uid:", uid)
    navigate(`/User/${uid}`)

    }


    return (
        <div>
            <h1>User Name Page</h1>
            <ul>
                {
                    Users?.map((item, index) => {

                        return <li key={index}>{item?.name} <button onClick={()=>ViewUser(item?.id)}>View</button></li>

                    })

                }

            </ul>

        </div>
    )
}

export default User;
import React, { useState } from "react";


const OtherData = () => {
    const [countState, setcountState] = useState(0);
    // let count = 0;
    // const inCount = ()=>{
    //     console.log(count);
    //     count = count + 1;
    // }
    const inCount = () => {
        setcountState(countState + 1)
        console.log(countState)
        if (countState == 20) {
            setcountState(countState)
        }
    }
    const decCount = () => {
        setcountState(countState - 1)
        console.log(countState)
        if (countState == 0) {
            setcountState(countState)
        }
    }
    const [userArr, SetuserArr] = useState(["Ahmed", "Ali"]);
    const addData = () => {
        const lastVal = userArr.at(-1)
        const newVal = (lastVal == "Ahmed") ? ("Ali") : ("Ahmed");
        const cloneData = [...userArr];
        cloneData.push(newVal);
        SetuserArr(cloneData)
       
       
    }
    return (
        <div>
            <h1>Count: {countState}</h1>
          
            <button onClick={inCount} disabled={countState >= 20}> Increment Count</button>
            <button onClick={decCount} disabled={countState <= 0}>Decrement Count</button>
            <button onClick={addData}>Click to add Data</button>
            <ul>
                {
                    userArr?.map((item, index) => {
                        return <li key={index}>{item}</li>
                       


                    })
                }
            </ul>
        </div>
    )

}
export default OtherData;
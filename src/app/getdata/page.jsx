"use client"

import { useEffect, useState } from "react";
import axios from "axios"; 

const Getdata =() =>{
    const [data,SetData] = useState([]);
    useEffect(async()=>{
        let response = await axios.get("/api/fetch");
        console.log(response);
        // SetData(response);
    },[]);
    return(
        <>
            <h2>This is fetch data page.</h2>
        </>
    )
}

export default Getdata;
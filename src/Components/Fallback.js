import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




export const  Fallback= ()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        alert("you are entered Invalid url ");
        navigate('/');
        },[]);
    return(<div>Invalid Route</div>

    )}
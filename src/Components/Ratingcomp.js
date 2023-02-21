import React, { useState } from "react";
import {FaStar} from "react-icons/fa";
import { Container,Radio,Star } from "./Ratingstyles";


export  function  Ratingcomp(props)
{
    const[rate,setRate]=useState(parseInt(props.rating,10));
    console.log(rate);
    
    var A=[1,2,3,4,5]
    return(
        <span>
{ 
   
   A.map((ele)=>{return(
  <FaStar color={ele<=rate?"#FFFF00":"#808080"} />
    
    ) })

}
</span>
    );
}

import React from "react";
import axios from "axios";
export function getProd(val){
    
    return(
     (dispatch)=>   {
        var url="https://api.chinmayiapi.com/products/";
    
        
      
      fetch(url).then(response => response.json())
        .then(json => dispatch(setProddata(json,val)))
      .catch((err)=>{console.log()})});
            
      
    
}

export const setProddata=(prod)=>{
  console.log("in setprod",prod);
 
return (
    { type : "setProddata",
       proddetails: prod,
       
    }
    
);
}
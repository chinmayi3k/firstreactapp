import React from "react";

export function getProd(val){
    return(
     (dispatch)=>   {
        var url="http://localhost:6010/";
        var newurl=url.concat(val);

      console.log("url",newurl);
        fetch(newurl).then(response => response.json())
        .then(json => dispatch(setProddata(json)))});
            
        
    
}

export const setProddata=(prod)=>{
  console.log("in setprod",prod);
 
return (
    { type : "setProddata",
       proddetails: prod,
    }
    
);
}
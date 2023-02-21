import React from "react";

export function getProd(val){
    return(
     (dispatch)=>   {
        var url="https://my-json-server.typicode.com/chinmayi3k/jsonserver/";
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
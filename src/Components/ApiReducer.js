import React from "react";

const initState={
    Proddetails:[],
   
}

export function ApiReducer(state=initState,action)
{  
 
    var tempstate={...state};
    if(action.type=="setProddata"){
        tempstate.Proddetails=action.proddetails;
      
         console.log(tempstate);
      return tempstate;
    }
    
    return tempstate;
}
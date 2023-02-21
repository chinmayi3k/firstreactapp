import React from "react";
import { CarouselIndicators } from "reactstrap";

var initialState={
    cartItems:[],
    
}

export function CartReducer(state=initialState,action)
{  
  var tempstate={...state};
    if(action.type=="setcart"){
        console.log("action is"+action.Cart);
        if(  action.Cart !== undefined   && action.Cart!== null){
            if(tempstate.cartItems.length==0){
                tempstate.cartItems=[action.Cart];
        }
        else{
            tempstate.cartItems=[...tempstate.cartItems,action.Cart];
        }
    }
       return tempstate;
         
    }

    if(action.type=="setdelete"){
    if(action.CartId){
       tempstate.cartItems= tempstate.cartItems.filter((item)=>item.id!==action.CartId)
    }
    return tempstate;
    }
    return tempstate;
}
import React,{useState}from "react";
import {CartItems} from "../Components/CartItems";
import { apistore } from "../Components/Apistore";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
export const CartItemsPage=()=>{

    
    
    return(<Provider store={apistore}>
        <CartItems/>
       
        </Provider>

        
        );}

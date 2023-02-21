import React,{useState}from "react";
import {Addtocart} from "../Components/Addtocart";
import { apistore } from "../Components/Apistore";
import { Provider } from "react-redux";
import {useParams} from "react-router-dom";
export const Addcartpage=()=>{


const params=useParams();
    const val= params.ModelName;
    
    return(<Provider store={apistore}>
        <Addtocart modelId={val}/>
        </Provider>
        );




}
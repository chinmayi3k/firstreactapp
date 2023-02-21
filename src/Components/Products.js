import React, { useState,useEffect } from "react";
import {useParams,Link} from "react-router-dom";
import  '../App.css';
import { getProd } from "./Actionapi";
import {useDispatch,useSelector} from "react-redux";
import { Ratingcomp } from "./Ratingcomp";
export function Products(props){
  const dispatch=useDispatch();

  const proddata=useSelector((state)=>state.apiReducer.Proddetails);
  
    const [params,setParams]=useState(props.value);
  
  useEffect(()=>
{  dispatch(getProd(params));
  
},[params]);

return(

    <div >
  { proddata.map((prod)=>{
    return(
    <div className="prodDetails">
   <div> <img className="imagesize" src={prod.imagepath} alt="mobimage"/></div>
    <div className="Prodremain">
    <div >
    
     Model:<Link to={`/Addcartpage/${prod.id}`} >  {prod.model} </Link>
    </div>
    <div>
    Rating:<span><Ratingcomp rating={prod.Rating}/></span></div>
    <div>Price :  {prod.Price}</div>
    <div>Free delivery by amazon</div>
    </div>
    </div>)}
    )}
    </div>)
}
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
    const proddetails=proddata.filter((prod)=>prod.productname == params);
      console.log("details"+proddetails.length);
  useEffect(()=>
  
{  dispatch(getProd(params));
  
},[params]);

return(

    <div >
    
  { proddetails.map((prod)=>{ 
    return(
     
    <div className="prodDetails">
                                                                                              
   <div> <img className="imagesize" src={process.env.PUBLIC_URL+`/Images/${prod.productname}${prod.mob_id}.jpg`} alt="mobimage"/></div>
    <div className="Prodremain">
    <div >
    
     Model:<Link to={`/Addcartpage/${prod.mob_id}`} >  {prod.model_name} </Link>
    </div>
    <div>
    Rating:<span><Ratingcomp rating={prod.Rating}/></span></div>
    <div>Price :  {prod.price}</div>
    <div>Free delivery by amazon</div>
    </div>
    </div>)}
    )}
    </div>)
}
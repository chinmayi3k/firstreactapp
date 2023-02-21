import React, { useState,useEffect } from "react";
import { Link} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {setdeleteitem} from "./cartaction";
export const CartItems=()=>{
    
    const cartitemsmodels=useSelector((st)=>st.apiReducer.Proddetails);
    const  cartitems =useSelector((state)=>state.cartReducer.cartItems);
    const dispatcher=useDispatch();
    const [cartItem,SetcartItem]=useState([]);
    const [flag,Setflag]=useState(true);
   

    useEffect(()=>{
        if(flag){
       const p= cartitems.map((model)=>cartitemsmodels.filter((ci)=>ci.id==model.id));
       SetcartItem(p);
       Setflag(false);
        }
        },[flag]);

        const DeleteCartItem=(e)=>{
            e.preventDefault();
            dispatcher(setdeleteitem(e.target.id));
            Setflag(true);
            
        }
       
    return(
        <div>
        {cartItem.flat().map((item)=>{
    return(
     <div className="prodDetails">
    <div> <img className="imagesize" src={item.imagepath} alt="mobimage"/></div>
    <div className="Prodremain">
    <div>
    
     Model:   {item.model} 
    </div>
    <div>Price :  {item.Price}</div>
    <div> MRP: <s> {item.MRP} </s></div>
    
    <br/>

    <div>
    <button  id={item.id} onClick={DeleteCartItem} >Delete</button>
    </div>
    </div>
    
    </div>    )
        })


        }
    
</div>)
}

import React from 'react';  
import ecart from '../Images/ecart.jpg';
import '../App.css';
import shopcart from '../Images/icons8-shopping-cart-48.jpg';
import { Link } from "react-router-dom";

import {Provider} from 'react-redux';
export const   Header=()=>{
    const newLocal = "../ecart.jpg";
    const newcart ='../icons8-shopping-cart-48.jpg';
    return (<div className='homepage'>
        <div className='headerclass'>
      

       <img src={ecart} alt="noimage"  style={{ width: "80px" ,height:"50px"}} />
              
                <Link to="/home" class="linkcolor">Home</Link>
                <Link to="/signin">Login</Link>
                <Link to='/orders'>Orders</Link>
               
        <img src={shopcart} alt="noimage"  style={{ width: "48px" ,height:"48px"}} />
          
          
       
     
 
    </div>
    
    </div>
);


    
}


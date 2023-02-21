import React,{useState,useEffect} from "react";
import {setcartitems} from './cartaction';
import {useDispatch, useSelector} from "react-redux";
import { Ratingcomp } from "./Ratingcomp";
import { Link } from "react-router-dom";
import { apistore } from "./Apistore";
export function Addtocart(props){
  const[buttonText,SetbuttonText]=useState("ADD CART");
        const dispatcher=useDispatch();
        useSelector((state)=>console.log(state));
        const  productModel =useSelector((state)=>state.apiReducer.Proddetails);
        
        const[specificmodel,Setspecificmodel]=useState([]);
       
        const [finalprod,Setfinalprod]=useState();
        const [bgcolor,Setbgcolor]=useState(false);
        const vals=Array.from({length: 10}, (_, i) => i + 1)
        useEffect(()=>{
          
        Setspecificmodel(productModel.filter((models)=>{return(models.id==props.modelId)}));
        console.log("specific"+specificmodel);
      
         }
        ,[]);


        
      useEffect(()=>     
        { console.log("finalprod-check"+finalprod);
        
        dispatcher(setcartitems(finalprod));
      
      },[finalprod]);
    
 const Addition=(e)=>{
   
    let id=e.target.id;
     console.log("id"+e.target.id);
      let qtyobj={"qty":e.target.value};
      
      
    Setbgcolor(true);
      Setfinalprod({"id":e.target.id});
     
   }

 


    return (<div>
       
        {
          
          specificmodel.map((prod)=>{
            return(<div>
            <div className="prodDetails">
           <div> <img className="imagesize" src={prod.imagepath} alt="mobimage"/></div>
            <div className="Prodremain">
            <div >
            
             Model: {prod.model} 
            </div>
            <div>
            Rating:<span><Ratingcomp rating={prod.Rating}/></span></div>
            <div>Price :  {prod.Price}</div>
            <div> MRP: <s> {prod.MRP} </s></div>
            <div>Free delivery by Electroshop</div>
            <div> Quantity:
            <select>
            {vals.map((val)=>{return(<option value={val}>{val}</option>)})}
            </select>
    </div>
            
            </div>
           

            </div>
          <br/> 
<div class="cartbuttonstyle">

<button value= {buttonText}  id={prod.id}  name="Addcart" className="mainbuttonstyle " style={{backgroundColor:bgcolor?"aqua":"lightgreen"}} onClick={Addition}> {buttonText}</button>



<div>
<br/>
<Link to="/CartItemsPage"><button className="mainbuttonstyle"  style={{backgroundColor:bgcolor?"aqua":"lightgreen"}} > Go CART</button></Link>
</div>
</div>
</div>
            )}
        )}


</div>);
}
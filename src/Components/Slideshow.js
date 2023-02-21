
import React,{useState} from "react";

import mobile from "../Images/mobiles.jpg";
import laptop from "../Images/laptop.png";
import homeappliance from "../Images/homeappliances.jpg";


export const Slideshow=()=>{
  const images=[mobile,laptop,homeappliance];
  const[indexslide,setIndexslide]=useState(0);


    const prevFunction=(e)=>{
        setIndexslide(prevState=>prevState-1);
       if(indexslide==0){
        setIndexslide(2);
       }
    }
    
    const nextFunction=(e)=>{

        setIndexslide(prevState=>prevState+1);
       if(indexslide==2){
        setIndexslide(0);
       }
    }
   
   
 
  
   console.log(indexslide);
   console.log(images[indexslide]);
return(<div className="slideshowclass">
  <div className="aligncenter">
  <button onClick={prevFunction} >Prev</button> </div>
 <div> <img src={images[indexslide]} alt={indexslide}slide className="imagesize"/></div>
  
  <div><button onClick={nextFunction}>Next</button></div>
  
    </div>);

   
    
}
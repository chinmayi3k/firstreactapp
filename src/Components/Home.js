import React from "react";
import {useEffect} from 'react';
import { Header } from "./Header";

import { Slideshow } from './Slideshow';
import {AllProducts} from './AllProducts';
import '../App.css';
export const  Home= ()=>{
  
    return(
        <div  className='homepage'>
        <Header/>
        <Slideshow/>
        <AllProducts/>
        </div>

    )
}
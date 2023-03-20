import  React from "react";
import mobile from "../Images/mobiles.jpg";
import laptop from "../Images/laptop.png";
import {Link} from "react-router-dom";
export const AllProducts=()=>{
    return(<>
       <h1> Deals of Products</h1>
        <div className="imagesclass">
  
<div className="Imagediv"><Link to="/Productpage/mobile"><img src={mobile} className="imagesize" data-name="mobiles" alt="mobiles" /></Link>Mobiles 10% off</div>
<div className="Imagediv"><Link to="/Productpage/laptop"><img src={laptop} className="imagesize"  data-name="laptops" alt="laptops" /></Link>Laptops 10% off</div>
</div>
</>
    )
}
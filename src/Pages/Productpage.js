import {useParams} from "react-router-dom";
import { Products } from "../Components/Products";
import { apistore } from "../Components/Apistore";
import { Provider } from "react-redux";
export const Productpage=()=>{
    const params=useParams();
    const val= params.Product;
return(<Provider store={apistore}>
    <Products value={val}/>
    </Provider>
    );
}

import './App.css';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Home} from './Components/Home';
import { Fallback } from './Components/Fallback';

import {Login} from './Utils/Login';
import {Productpage} from './Pages/Productpage';
import {Addcartpage} from './Pages/Addcartpage';
import { CartItemsPage } from './Pages/CartItemsPage';
import { Signup } from './Utils/Signup';
function App() {
  return (
    <div >
      
        
        <BrowserRouter>
   <Routes>
   
   <Route  path='/' element={<Home/>}/>
   <Route path="/signin" element={<Login/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/Productpage/:Product' element={<Productpage/>}/>
   <Route path='/Addcartpage/:ModelName' element={<Addcartpage/>}/>
   <Route path='/CartItemsPage' element={<CartItemsPage/>}/>
   <Route path='*' element={<Fallback/>}/>
   </Routes>
   </BrowserRouter>

     
    </div>
  );
}

export default App;

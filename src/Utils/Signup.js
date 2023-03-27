import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
export const Signup=()=>{
  const [data,Setdata]=useState();
    const [formflag,Setformflag]=useState(false);
    const navigate=useNavigate();
const [rowdata,setRowdata]=useState({
   
    Name:"",
    Phone:"",
    Email:"",
    Password:"",

});
useEffect(()=>{
    fetch("http://evawsdb.eba-pbcfrydb.ap-south-1.elasticbeanstalk.com/users/").then((user)=>user.json()).then((data)=>Setdata(data)).catch((err)=>console.log(err))
        },[])
useEffect(()=>{
    if(formflag){
console.log("formflag in useeffect"+ formflag)
        console.log(formflag);
        navigate("/");
    }
},[formflag]);
const handleChange=(e)=> {
    return setRowdata({ ...rowdata, [e.target.name]: e.target.value });
}

const  clicksubmit=(e)=>   {
    e.preventDefault();
    console.log(rowdata);
    fetch("https:/api.chinmayiapi.com/products/users/",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(rowdata)
        
    }).then((data)=>Setformflag(true));
    
};
    return(  <div className="formdiv"> 
    <form  onSubmit={clicksubmit}>
    
  <div > SignUp</div>
   
  <div>  <label name="name" id="userid">Name</label>
   <br/><input type="text" name="Name" onChange={handleChange}/></div>
    <div>  <label name="phone" id="userid">Phone</label>
    <br/><input type="number" name="Phone"  onChange={handleChange}/></div> 
    <div>  <label name="Email" id="userid">Email</label>
    <br/><input type="email" name="Email"  onChange={handleChange}  /></div> 
    <div> <label name="password" id="userid">Password</label>
    <br/> <input type="password" name="Password"  placeholder="atleast 6 characters" onChange={handleChange}  /></div> 
    <br/>  <div style={{alignItems:"center",justifyContent:"center"}}><button type="submit" id="onsubmit">Submit</button></div>
    </form>
    </div>)
}

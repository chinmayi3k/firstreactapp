import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
export const Signup=()=>{
    const [data,Setdata]=useState([])
    const [formflag,Setformflag]=useState(false);
    const navigate=useNavigate();
const [rowdata,setRowdata]=useState({
   
    name:"",
    phone:"",
    email:"",
    password:"",

});
useEffect(()=>{
    fetch("http://localhost:6010/posts/").then((user)=>user.json()).then((data)=>Setdata(data)).catch((err)=>console.log(err))
        },[])

const handleChange=(e)=> {
    return setRowdata({ ...rowdata, [e.target.name]: e.target.value });
}

const  clicksubmit=(e)=>   {
    e.preventDefault();
    
    fetch("http://localhost:6010/posts/",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(rowdata)
        
    }).then((data)=>Setformflag(true));
    if(formflag){
        console.log(formflag);
        navigate("/");
    }
};
    return(  <div className="formdiv"> 
    <form  onSubmit={clicksubmit}>
    
  <div > SignUp</div>
  <div>  <label name="name" id="userid">Name</label>
   <br/><input type="text" name="name" onChange={handleChange}/></div>
    <div>  <label name="phone" id="userid">Phone</label>
    <br/><input type="number" name="phone"  onChange={handleChange}/></div> 
    <div>  <label name="Email" id="userid">Email</label>
    <br/><input type="email" name="email"  onChange={handleChange}  /></div> 
    <div> <label name="password" id="userid">Password</label>
    <br/> <input type="password" name="password"  placeholder="atleast 6 characters" onChange={handleChange}  /></div> 
    <br/>  <div style={{alignItems:"center",justifyContent:"center"}}><button type="submit">Submit</button></div>
    </form>
    </div>)
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'; 
import { Link } from 'react-router-dom';
import '../App.css';
export const Login=()=>{
      const navigate=useNavigate();
      const [verified,Setverified]=useState(false);
      const [data,Setdata]=useState([]);
      const[userDetails,Setuserdetails]=useState({
        "name":"",
        "password":"",
      } )
      useEffect(()=>{
  fetch("https://api.chinmayiapi.com/users/").then((user)=>user.json()).then((data)=>Setdata(data))
      },[])
  
  
      const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(userDetails);
        console.log(data);
    var users= data.filter((user)=>{return(user.Name==userDetails.name && user.Password==userDetails.password )});   
    console.log(users);
 if(users.length)
  navigate("/");
  else{
    window.alert("Invalid username or password");
  }
  }

  const handleChange=(e)=>{

    Setuserdetails({...userDetails,[e.target.name]:[e.target.value]});
   
  }

    return(<div className="formdiv">
    <form  onSubmit={handlesubmit}>
        <div >
        <label name="UserName">UserName</label><br/>
        <input type="text" id="UserName" name="name" onChange={handleChange} required />
        </div>
        <br/>
        <div>
        <label name="Password">Password</label><br/>
        <input type="password" id="Password" name="password" onChange={handleChange} required /><br/>
        </div>
        <br/> 

       <div><button type="submit" id="onsubmit"  onClick={handlesubmit}>Submit</button></div> 
       </form>

        <div>
      <Link to="/signup"> Sign Up </Link>  
        </div>   </div>     )
  }
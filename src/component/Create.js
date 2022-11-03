import React from 'react'
import {useEffect,useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate()
  const [Email, setfName] = useState()
   const [Password, setlName] = useState()
   
   let url = "https://636242497521369cd068dfd3.mockapi.io/ToDo"
//    https://636242497521369cd068dfd3.mockapi.io/ToDo
   const postData = () => {
    axios.post(url,{
        Email,
        Password
    }).then(res =>{
  localStorage.setItem("Email",res.data.Email)
  localStorage.setItem("Password",res.data.Password)
  localStorage.setItem("id",res.data.id)
  navigate("/Get")

    })
   }



  return (
    <div>
        <input placeholder='Email' onChange ={e =>{ setfName(e.target.value)}}></input>
        <input placeholder='Password' onChange ={e =>{ setlName(e.target.value)}}></input>
        <button onClick={postData} > LogIn</button>

    
    </div>
  )
}

export default Create
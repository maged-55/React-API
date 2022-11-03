import React, { useState, useEffect } from 'react'
import axios from "axios";


  import { useNavigate } from "react-router-dom";

  

function Update() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [id, setId] = useState("")


    useEffect(() => {
      setId(localStorage.getItem("id"));
      setEmail(localStorage.getItem("Email"));
      setPassword(localStorage.getItem("Password"));
  }, [])



       const UpdateData = () => {
        axios.put(`https://636242497521369cd068dfd3.mockapi.io/ToDo/${id}` ,{
            Email,
            Password,
        }).then(res => {
          navigate("/Get");
            // console.log(res) 
        }).catch(err => {
          console.log(err);
        })
       }


      
  return (

    <div>
    <input placeholder='Email' onChange ={(e)=>{ setEmail(e.target.value)}}></input>
    <input placeholder='Password' onChange ={(e) =>{ setPassword(e.target.value)}}></input>
    <button onClick={UpdateData}>Update</button>


</div>
   
    



  )
}

export default Update
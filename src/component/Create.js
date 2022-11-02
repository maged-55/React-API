import React from 'react'
import {useEffect,useState} from 'react';
import axios from "axios";

function Create() {
   const [fName, setfName] = useState()
   const [lName, setlName] = useState()
   let url = "https://636242497521369cd068dfd3.mockapi.io/ToDo"

   const postData = () => {
    axios.post(url,{
        fName,
        lName
    }).then(res =>{
        console.log(res)
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
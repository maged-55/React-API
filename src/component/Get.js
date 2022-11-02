import React from 'react'
import {useEffect,useState} from 'react';
import axios from "axios";

function Get() {

    const [state, setstate] = useState([])

  useEffect(() => {
    axios.get("https://636242497521369cd068dfd3.mockapi.io/ToDo").then((res) =>{
      console.log(res.data);
      setstate(res.data);
    })


  }, [])
  return (

    <div className="App">
   

    {state.map(item=>{
      return (
      <>
      <div className = "de">
        
<p>{item.fName}</p><br/>
<p>{item.lName}</p>
</div>

      </>

      )
    })}
  </div>


   
  )
}

export default Get
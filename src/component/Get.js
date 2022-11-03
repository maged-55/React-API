import React from 'react'
import {useEffect,useState} from 'react';
import axios from "axios";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import {Link} from "react-router-dom";
  import Update from './Update';



function Get() {
    const navigate = useNavigate()
    // https://636242497521369cd068dfd3.mockapi.io/ToDo
    const [state, setstate] = useState([])
    // https://api.publicapis.org/entries
  useEffect(() => {
    // http://www.omdbapi.com/?i=tt3896198&apikey=be3b01cb
    // https://api.publicapis.org/entries
    // https://rickandmortyapi.com/api/character
    axios.get("https://636242497521369cd068dfd3.mockapi.io/ToDo").then((res) =>{
      console.log(res.data);
      setstate(res.data);
    })

  }, [])


const onDelete = (id)=> {
    axios.delete(`https://636242497521369cd068dfd3.mockapi.io/ToDo/${id}`).then(res=>{
        setstate(state.filter(del => {
            return del.id != id
        }))
    })
}


  return (

    <div className="App">
   

    {state.map((item,index) => {
      return (
      <> <div key ={index}>
     
        <p>Email: {item.Email}</p>
        <p>Password: {item.Password}</p>

        {/* <img src = {item.image}/> */}

        <Button onClick={() => onDelete(item.id)}
  bg={'red.400'}
  color={'white'}
  _hover={{
    bg: 'red.500',
  }}>
 Delete
</Button>
<Link to= "/Update">
<Button onClick={() => localStorage.setItem("id",item.id)}
  bg={'blue.400'}
  color={'white'}
  _hover={{
    bg: 'red.500',
  }}  >update

{/* <Link to = {navigate("Update")} */}

 
</Button> </Link>

    
</div>

        


      </>

      )
    })}
  
</div>
   
  )
}

export default Get
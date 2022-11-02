import './App.css';
import React,{useEffect,useState} from 'react';
import axios from "axios";
import Create from './component/Create'
import Get from './component/Get'

function App() {


  // const [state, setstate] = useState([])

  // useEffect(() => {
  //   axios.get("https://rickandmortyapi.com/api/character").then((res) =>{
  //     console.log(res.data.results);
  //     setstate(res.data.results);
  //   })


  // }, [])
  
  return (
    <div className="App">
      <Create/>
      <Get/>











      {/* {state.map(item=>{
        return (
        <>
        <div className = "de">
          
        
<p>{item.name}</p><br/>
<img src ={item.image}/>
</div>




        </>


        )
      })} */}
    </div>
  );
}

export default App;

import './App.css';
import React,{useEffect,useState} from 'react';
import axios from "axios";
import Create from './component/Create'
import Get from './component/Get'
import LogIn from './component/LogIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Route1 from './component/Route1'


function App() {



  
  
  return (

    <div className="App">
          <Route1/>

        {/* <Get/> */}
      {/* <Create/> */}
    
    </div>
  );
}

export default App;

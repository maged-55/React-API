import React from 'react'
import LogIn from './LogIn';
import Get from './Get'
import Update from './Update'
import Create from './Create'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from "axios";







function Route1() {
  return (
    <div>
          <Router>

    <Routes>

 <Route exact path="/" element={<LogIn/>} />
 <Route path="Get" element={<Get/>} />
 <Route path="Update" element={<Update/>} />
 <Route path="Create" element={<Create/>} />




</Routes>

</Router>

   </div>
  )
}

export default Route1
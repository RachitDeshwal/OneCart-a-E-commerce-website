import { useContext, useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import Add from './Pages/Add'
import Lists from './Pages/Lists'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import{Routes,Route} from "react-router-dom"
import { AdminContext, useAdminContext } from './Contexts/AdminContext'

function App() {
  let {adminData}=useAdminContext()
  
  return (
    <>
    {!adminData?<Login/>:<>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/lists" element={<Lists/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/orders" element={<Orders/>}/>
    </Routes></>}
      
    </>
  )
}

export default App

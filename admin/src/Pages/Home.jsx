import React from 'react'
import Nav from "../Components/Nav.jsx"
import Sidebar from '../Components/Sidebar.jsx'

const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh] relative bg-gradient-to-l from-[#141414] to-[#0c2025] text-white'>
        <Nav></Nav>
        <Sidebar></Sidebar>
    </div>
  )
}

export default Home
import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Form/Home'
import RegisterCompo from './Form/RegisterCompo'
import LoginCompo from './Form/LoginCompo'

const RouteCompo = () => {
  return (
    <BrowserRouter>
  <div className='Links'>
    <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} className='NavLink' to='/'>Home</NavLink>
    <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} className='NavLink' to='/register'>Register</NavLink>
    <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} className='NavLink' to='/login'>Login</NavLink>
    </div>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<RegisterCompo />} />
        <Route path='/login' element={<LoginCompo />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default RouteCompo

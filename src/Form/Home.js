import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const Navi = useNavigate()
    const token = localStorage.getItem("token")
    // console.log(token)
   
    useEffect(()=>{
      if ((token) && (token !== "undefined")) {
        axios.get('https://login-serverapi.onrender.com/api/',{
          headers: {
            "Authorization": `Bearer ${token}`
       } })
       .then((res) => {
        console.log(res.data);
    })
    .catch(err => console.log(err))
      }
      else{
        Navi("/register")
      }
    },[token,Navi])
    
    
    const handleClick = () => {
      localStorage.removeItem("token");
      Navi("/login");
  }
    

  return (
    <div>
      <h2>Home Page</h2>
      {/* <button onClick={() => Navi('/register')}>Register</button>
      <button onClick={() => Navi('/login')}>Login</button> */}
      <button onClick={handleClick}>Logout</button>

    </div>
  )
}

export default Home

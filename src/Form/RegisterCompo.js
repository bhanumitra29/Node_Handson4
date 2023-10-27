import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterCompo = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const Navi = useNavigate()
  // const [store, setStore] = useState('');

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.phone || !data.email || !data.password) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    axios
      .post('http://localhost:4003/api/register', data)
      .then((res) => {
        
        // setStore(res.data.msg);
        alert(res.data.msg);
        localStorage.setItem('token',res.data.token)
        Navi('/')
      })
      .catch((error) => {
        console.log(error);
        // alert("User has not registered, please try again");
      });

      setData({
        name: "",
        phone: "",
        email: "",
        password: "",
      });
  };

  return (
    <>
      <h1>REGISTER FORM</h1>
      <form>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
        ></input>{" "}
        <br /> <br />
        <label htmlFor="num">Phone :</label>
        <input
          type="number"
          id="num"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        ></input>{" "}
        <br /> <br />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        ></input>{" "}
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        ></input>{" "}
        <br /><br /><br />
        <button onClick={handleSubmit}>Register</button>
      </form>
    </>
  );
};

export default RegisterCompo;

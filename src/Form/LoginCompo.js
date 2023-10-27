import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginCompo = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const Navi =useNavigate()
  const [store, setStore] = useState('');

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    axios
      .post('http://localhost:4003/api/login', data)
      .then((res) => {
        // alert(res.data.msg);
        setStore(res.data.msg);
        alert(res.data.msg);
        localStorage.setItem('token', res.data.token);
        // setStore(res.data);
       Navi("/")
      })
      .catch((error) => {
        console.log(error);
      });

      setData({
        email: "",
        password: "",
      });
  };

  return (
    <>
      <h1>LOGIN HERE</h1>
      <form>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        ></input>{" "}
        <br /> <br />
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        ></input>{" "}
        <br /> <br /> <br /> <br />
        <button onClick={handleSubmit}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginCompo;

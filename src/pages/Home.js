import React from "react";
import "./assets/css/home.css";
import logo from "../logo.png";
function Home() {
  return (
    <div className="home text-center">
      <img src={logo} alt="" className="img-fluid" style={{ width: "350px" }} />
      <h1>Hi, I'm Ahmet Buğra Yiğiter</h1>
      <h2>Computer Engineering Student</h2>
    </div>
  );
}

export default Home;

import React from "react";
import logo from "../assets/react-logo.png";

export default function Navbar() {
  return (
    <div className="navigation">
      <img src={logo}></img>
      <h1>ReactFacts</h1>
    </div>
  );
}

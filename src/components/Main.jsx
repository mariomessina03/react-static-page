import React from "react";
import biglogo from "../assets/big-react-logo.png";

export default function Main() {
  return (
    <div className="main-div">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img src={biglogo} className="big-logo"></img>
    </div>
  );
}

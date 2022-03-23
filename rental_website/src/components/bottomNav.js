import React from "react";
import "../App.css";
import logo from "../assets/images/Your Logo2.svg";

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <div className="bottom-navbar">
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul className="bottom-ul">
          <li className="bottom-li">Explore</li>
          <li className="bottom-li">About Us</li>
          <li className="bottom-li">Cities </li>
          <li id="bottom-call" className="bottom-li">
            Call
          </li>
        </ul>
        <p className="copyright">© 2021 Company Name All rights reserved</p>
      </div>
    </div>
  );
}

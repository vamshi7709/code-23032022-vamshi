import React from "react";
import "../App.css";
import logo from "../assets/images/Your Logo.svg";
import vector from "../assets/images/Vector (1).png";
import downarrow from "../assets/images/image 2.svg";
import search from "../assets/images/search.svg";

export default function Main() {
  const handleClick = () => {
    console.log("you are clicked a search button");
  };
  return (
    <div className="main">
      <div className="navbar">
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul className="ul">
          <a href="#aboutus">
            <li className="li">Explore</li>
          </a>
          <a href="/#">
            <li id="aboutus" className="li">
              About Us
            </li>
          </a>
          <a href="/#">
            <li className="li">
              Cities{" "}
              <span>
                <img className="span-arrow" src={downarrow} alt="down" />
              </span>
            </li>
          </a>
          <a href="/#">
            <li id="call" className="li">
              Call
            </li>
          </a>
        </ul>
        <div className="headers">
          <p className="header">Rethink your living & renting</p>
          <p className="sub-header">Make your stay painless with us</p>
        </div>
        <div className="rectangle3"></div>
        <div className="rectangle-1">
          <p className="rectangle-textup">CITY</p>
          <p className="rectangle-textbottom">Select your city</p>
        </div>
        <div className="rectangle-2">
          <p className="rectangle-textup">DATES</p>
          <p className="rectangle-textbottom">Select your dates</p>
        </div>
        <div className="rectangle-3">
          <p className="rectangle-textup">GUESTS</p>
          <p className="rectangle-textbottom">Add guests</p>
        </div>
        <div className="rectangle-4">
          <p
            onClick={handleClick}
            data-test-id="search"
            className="rectangle-4text"
          >
            <span>
              <img className="micropy" src={search} alt="search" />
            </span>
            Search
          </p>
        </div>
        <img className="vec" src={vector} alt="vec" />
        <img className="downarrow" src={downarrow} alt="arrow" />
      </div>
    </div>
  );
}

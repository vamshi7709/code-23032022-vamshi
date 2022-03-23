import React from "react";

export default function Explore() {
  return (
    <div className="explore">
      <div className="explore-text">
        <p className="explore-header">Explore</p>
        <p className="explore-p">
          From one-guest rooms to penthouses with pools and gardens
        </p>
      </div>
      <div className="explore-grids">
        <div className="grid1">
          <div className="grid1-trans">
            <p className="grid-text">Room with one king-size bed</p>
            <button className="grd-btn">35$</button>
            <button className="grd-btn1">28м²</button>
            <button className="grd-btn2">Book!</button>
          </div>
        </div>
        <div className="grid2">
          <div className="grid1-trans">
            <p className="grid-text">Penthouse for 8 person</p>
            <button className="grd-btn">2039$</button>
            <button className="grd-btn1">438м²</button>
            <button className="grd-btn2">Book!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

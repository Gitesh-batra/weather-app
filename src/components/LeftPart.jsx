import React from "react";
import "./LeftPart.css";

function LeftPart({ weather }) {
  let dt, timezone, name, country;

  if (weather) {
    dt = weather.dt;
    timezone = weather.timezone;
    name = weather.name;
    country = weather.country;
  }

  return (
    <div className="LeftPart">
      <h2>Mausam</h2>
      <div className="brand"></div>
      <div className="cityTime">
        <div className="detailss">
          <h1 className="temp">16&#176;</h1>
          <h1 className="name">London</h1>
        </div>
        <small>
          <p>12:00</p>
          <p>-</p>
          <p>Monday, 12th Feb</p>
        </small>
        <div className="weather">
          <img src="./images/day/119.png" alt="Cloudy" />
          <p>Cloudy</p>
        </div>
      </div>
    </div>
  );
}

export default LeftPart;

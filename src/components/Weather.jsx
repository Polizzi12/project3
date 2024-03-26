import { Component } from "react";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiWind, BiWater } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import { InputGroup, FormControl } from "react-bootstrap";
import logo from "../assets/logo.png";
import world from "../assets/world.png";

function Weather() {
  const apikey = "0444911a286723755987f6e0d3987d24";

  const [weatherData, setWeatherData] = useState({
    location: "Rome",
    temperature: "24°C",
    humidity: "70%",
    windSpeed: "70km/h",
  });

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const search = async () => {
    if (searchValue === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=Metric&appid=${apikey}`;

    let risp = await fetch(url);
    let data = await risp.json();

    setWeatherData({
      location: data.name,
      temperature: `${data.main.temp}°C`,
      humidity: `${data.main.humidity}%`,
      windSpeed: `${data.wind.speed}km/h`,
    });
  };

  return (
    <div>
      <div className="mela">
        <FormControl
          className="bvb"
          placeholder="Search Location"
          aria-label="Search Location"
          aria-describedby="search-button"
          value={searchValue}
          onChange={handleInputChange}
        />
        <div
          className="icob"
          onClick={() => {
            search();
          }}
        >
          <BsSearch />
        </div>
      </div>
      <div className="container">
        <div className="primo">
          <div>
            <img src={world} style={{ width: "380px", height: "300px", borderRadius: "20px" }} />
          </div>
          <div className="location">{weatherData.location}</div>
          <div className="temp">{weatherData.temperature}</div>
        </div>
        <div className="last">
          <div className="minicont">
            <div className="humidity" id="pp">
              Humidity
            </div>
            <div className="dd">
              <div className="tony">
                <BiWater />
              </div>
              <div className="perc1" id="pp">
                {weatherData.humidity}
              </div>
            </div>
          </div>
          <div className="minicont">
            <div className="wind" id="pp">
              Wind Speed
            </div>
            <div className="dd">
              <div className="tony">
                <BiWind />
              </div>
              <div className="perc2" id="pp">
                {weatherData.windSpeed}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;

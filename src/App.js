import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [data, setData] = useState("");

  // async test() {
  //   await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_API_KEY}`)
  //   .then(res => res.json())
  //   .then(result => {
  //     setData(result)
  //     console.log(result);
  //   });
  // }

  const handleLatChange = (e) => {
    setLat(e.target.value);
  };
  const handleLongChange = (e) => {
    setLon(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("first");
    await fetch(
      `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then(function (res) {
        console.log(res.weather.description);
      });
    console.log("last");
  };

  const fetchApi = async () => {
    console.log("start");
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0a759971ae8690f1fc7f54d001b71cd7&units=metric`;
    const response = await fetch(url);
    const resJson = await response.json();
    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form>
          {/*when user submit the form , handleSubmit()
        function will be called .*/}
          <h2> ☀️ ☀️ Weather ☀️ ☀️ </h2>
          {/* <img src="" /> */}
          <br />
          <label>Latitude</label>
          <br />
          <input
            className="form-control"
            type="text"
            value={lat}
            required
            onChange={(e) => {
              handleLatChange(e);
            }}
          />
          <br />
          {/*when user write in latitude input box , handleChange()
              function will be called. */}
          <label>Longitude</label>
          <br />
          <input
            className="form-control"
            type="text"
            value={lon}
            required
            onChange={(e) => {
              handleLongChange(e);
            }}
          />
          <br />
          {/*when user write in longitude input box , handleAgeChange()
               function will be called. */}
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </header>
    </div>
  );
}

export default App;

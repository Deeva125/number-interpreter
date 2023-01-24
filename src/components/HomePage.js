import React from "react";
import { useState } from "react";

function HomePage(props) {
  const [meter, setMeter] = useState(10);
  function handleMeterChange(event) {
    setMeter(event.target.value);
  }
  const [feet, setFeet] = useState(10);
  function handleFeetChange(event) {
    setFeet(event.target.value);
  }
  const [gallon, setGallon] = useState(10);
  function handleGallonChange(event) {
    setGallon(event.target.value);
  }
  const [quart, setQuart] = useState(10);
  function handleQuartChange(event) {
    setQuart(event.target.value);
  }
  const [pint, setPint] = useState(10);
  function handlePintChange(event) {
    setPint(event.target.value);
  }
  const [yard, setYard] = useState(10);
  function handleYardChange(event) {
    setYard(event.target.value);
  }
  const [pounds, setPounds] = useState(10);
  function handlePoundsChange(event) {
    setPounds(event.target.value);
  }
  const [ton, setTon] = useState(10);
  function handleTonChange(event) {
    setTon(event.target.value);
  }
  const [kilogram, setKilogram] = useState(10);
  function handleKilogramChange(event) {
    setKilogram(event.target.value);
  }
  const [kelvin, setKelvin] = useState(10);
  function handleKelvinChange(event) {
    setKelvin(event.target.value);
  }
  const [celcius, setCelcius] = useState(10);
  function handleCelciusChange(event) {
    setCelcius(event.target.value);
  }
  const [fahrenheit, setFahrenheit] = useState(10);
  function handleFahrenheitChange(event) {
    setFahrenheit(event.target.value);
  }

  return (
    <>
      <div
        className={`container-fluid bg-${props.theme}`}
        style={{ minHeight: "95vh" }}
      >
        <div className="row">
          <div className="col-6 py-3">
            <div className={`input-group mb-3 bg-${props.theme}`}>
              <h4 className={`${props.theme == "dark" ? "text-light" : ""}`}>
                Length
              </h4>
            </div>
            <div className="input-group mb-3 ">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Meter</h6>
              </span>
              <input
                value={meter}
                onChange={handleMeterChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Meters"
                aria-label="meters"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Centimeter</h6>
              </span>
              <input
                value={meter * 100}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Centimeters"
                aria-label="centimeters"
              />
            </div>
            <div className="input-group mb-3">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Feet</h6>
              </span>
              <input
                value={feet}
                onChange={handleFeetChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Feet"
                aria-label="feet"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Inches</h6>
              </span>
              <input
                value={feet * 12}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="inches"
                aria-label="inches"
              />
            </div>
            <div className="input-group mb-3">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Yard</h6>
              </span>
              <input
                value={yard}
                onChange={handleYardChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Yard"
                aria-label="Yard"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Feet</h6>
              </span>
              <input
                value={yard * 3}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="feet"
                aria-label="feet"
              />
            </div>
          </div>

          <div className="col-6 py-3">
            <div className={`input-group mb-3 bg-${props.theme}`}>
              <h4 className={`${props.theme == "dark" ? "text-light" : ""}`}>
                Volume
              </h4>
            </div>

            <div className="input-group mb-3">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Gallon</h6>
              </span>
              <input
                value={gallon}
                onChange={handleGallonChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Gallon"
                aria-label="gallon"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Quarts</h6>
              </span>
              <input
                value={gallon / 4}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="quarts"
                aria-label="quarts"
              />
            </div>
            <div className="input-group mb-3">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Quart</h6>
              </span>
              <input
                value={quart}
                onChange={handleQuartChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="quart"
                aria-label="quart"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Pints</h6>
              </span>
              <input
                value={quart * 2}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="pints"
                aria-label="pints"
              />
            </div>
            <div className="input-group mb-3">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Pint</h6>
              </span>
              <input
                value={pint}
                onChange={handlePintChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="pint"
                aria-label="pint"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Cups</h6>
              </span>
              <input
                value={pint * 2}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="cups"
                aria-label="cups"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 py-3">
            <div className={`input-group mb-3 bg-${props.theme}`}>
              <h4
                className={`${props.theme == "dark" ? "text-light" : ""}`}
                className={`${props.theme == "dark" ? "text-light" : ""}`}
              >
                Weight
              </h4>
            </div>
            <div className="input-group mb-3">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Pounds</h6>
              </span>
              <input
                value={pounds}
                onChange={handlePoundsChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Pounds"
                aria-label="Pounds"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Ounces</h6>
              </span>
              <input
                value={pounds * 16}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Ounces"
                aria-label="Ounces"
              />
            </div>
            <div className="input-group mb-3">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">US Ton</h6>
              </span>
              <input
                value={ton}
                onChange={handleTonChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Ton"
                aria-label="Ton"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Pounds</h6>
              </span>
              <input
                value={ton * 2000}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="pounds"
                aria-label="pounds"
              />
            </div>
            <div className="input-group mb-3">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Kilogram</h6>
              </span>
              <input
                value={kilogram}
                onChange={handleKilogramChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Kilogram"
                aria-label="Kilogram"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Grams</h6>
              </span>
              <input
                value={kilogram * 1000}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="grams"
                aria-label="grams"
              />
            </div>
          </div>
          <div className="col-6 py-3">
            <div className={`input-group mb-3 bg-${props.theme}`}>
              <h4 className={`${props.theme == "dark" ? "text-light" : ""}`}>
                Temperature
              </h4>
            </div>
            <div className="input-group mb-3">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Kelvin</h6>
              </span>
              <input
                value={kelvin}
                onChange={handleKelvinChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Kelvin"
                aria-label="Kelvin"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Celcius</h6>
              </span>
              <input
                value={kelvin - 273.15}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="celcius"
                aria-label="celcius"
              />
            </div>
            <div className="input-group mb-3">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Celcius</h6>
              </span>
              <input
                value={celcius}
                onChange={handleCelciusChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Celcius"
                aria-label="Celcius"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Fahrenheit</h6>
              </span>
              <input
                value={celcius * (9 / 5) + 32}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="fahrenheit"
                aria-label="fahrenheit"
              />
            </div>
            <div className="input-group mb-3">
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Fahrenheit</h6>
              </span>
              <input
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="Fahrenheit"
                aria-label="Fahrenheit"
              />
              <span
                className={`input-group-text w-25 ${
                  props.theme == "dark" ? "bg-dark text-white" : ""
                }`}
              >
                <h6 className="m-0 p-0">Kelvin</h6>
              </span>
              <input
                value={(fahrenheit - 32) * (5 / 9) + 273.15}
                type="text"
                className={`form-control ${
                  props.theme == "dark"
                    ? "bg-secondary bg-opacity-25 text-white"
                    : ""
                }`}
                placeholder="grams"
                aria-label="grams"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

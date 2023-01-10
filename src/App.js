import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [meter, setMeter] = useState(10);
  function handleChange(event) {
    setMeter(event.target.value);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Number Interpreter
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="input-group mb-3">
        <h3>Meter</h3>
        <input
          value={meter}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Meters"
          aria-label="meters"
        />
        <h3>Centimeter</h3>
        <span className="input-group-text">=</span>
        <input
          value={meter * 100}
          type="text"
          className="form-control"
          placeholder="Centimeters"
          aria-label="centimeters"
        />
      </div>
    </>
  );
}

export default App;

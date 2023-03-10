import React from "react";

function NavBar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-${props.theme} navbar-expand-lg bg-${props.theme} sticky-top`}
      >
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
            <button className="btn btn-warning" onClick={props.changeTheme}>
              Change Mode
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

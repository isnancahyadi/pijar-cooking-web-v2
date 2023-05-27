import React from "react";

const Navbar = () => {
  return (
    <>
      <header id="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid mx-4">
            <a className="navbar-brand" href="/">
              <img
                id="logo-app"
                src="/assets/img/logo-2.svg"
                alt=""
                style={{ width: "auto", height: "50px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              id="navbarText"
              className="collapse navbar-collapse"
              style={{ justifyContent: "space-between" }}
            >
              <ul className="navbar-nav">
                <li className="nav-item mx-4">
                  <a className="nav-link fs-4" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link fs-4" href="#">
                    Add Recipe
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link fs-4" href="/profile">
                    Profile
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item mx-1">
                  <a
                    className="nav-link text-white fs-4"
                    href="/login"
                    style={{ textShadow: "2px 2px 4px #000000" }}
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item mx-1">
                  <a
                    className="nav-link text-white fs-4"
                    href="/register"
                    style={{ textShadow: "2px 2px 4px #000000" }}
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

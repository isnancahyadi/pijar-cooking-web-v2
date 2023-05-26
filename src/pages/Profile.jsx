import React from "react";

import "../style/Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      {/* <!-- Start of header --> */}
      <header id="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid mx-4">
            <a className="navbar-brand" href="">
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
                  <a className="nav-link fs-4" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link fs-4" href="#">
                    Add Recipe
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link fs-4" href="#">
                    Profile
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item mx-1">
                  <a
                    className="nav-link text-white fs-4"
                    href="#"
                    style={{ textShadow: "2px 2px 4px #000000" }}
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item mx-1">
                  <a
                    className="nav-link text-white fs-4"
                    href="#"
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
      {/* <!-- End of header --> */}

      {/* <!-- Start of profile section --> */}
      <section id="content">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-center">
            <img
              id="profile-pict"
              src="/assets/img/profile/profile-1.jpg"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="container mt-5">
            <h1 className="text-center">Isnan Arif Cahyadi</h1>
          </div>
        </div>
      </section>
      {/* <!-- End of profile section --> */}

      {/* <!-- Start of recipe profile section --> */}
      <section id="content-2">
        {/* <!-- Start of tabs navs --> */}
        <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="ex3-tab-1"
              data-mdb-toggle="tab"
              href="#ex3-tabs-1"
              role="tab"
              aria-controls="ex3-tabs-1"
              aria-selected="true"
            >
              My Recipe
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link text-primary-emphasis"
              id="ex3-tab-2"
              data-mdb-toggle="tab"
              href="#ex3-tabs-2"
              role="tab"
              aria-controls="ex3-tabs-2"
              aria-selected="false"
            >
              Saved Recipe
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link text-primary-emphasis"
              id="ex3-tab-3"
              data-mdb-toggle="tab"
              href="#ex3-tabs-3"
              role="tab"
              aria-controls="ex3-tabs-3"
              aria-selected="false"
            >
              Liked Recipe
            </a>
          </li>
        </ul>
        {/* <!-- End of tabs navs --> */}

        {/* <!-- Start of tabs content --> */}
        <div className="container-fluid">
          <div className="tab-content mt-5" id="ex2-content">
            <div
              className="tab-pane fade show active"
              id="ex3-tabs-1"
              role="tabpanel"
              aria-labelledby="ex3-tab-1"
            >
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <div
                    className="menu-recipe mt-2 mb-2"
                    style={{
                      backgroundImage:
                        "url('/assets/img/recipe/spicy-fried-tubtim-fish-salad-spicy.jpg')",
                    }}
                  >
                    <h2
                      className="text-white"
                      style={{ textShadow: "2px 2px 4px #000000" }}
                    >
                      Spicy Fried Tubtim Fish Salad Spicy
                    </h2>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <div
                    className="menu-recipe mt-2 mb-2"
                    style={{
                      backgroundImage:
                        "url('/assets/img/recipe/sinigang-na-lechon-kawali.jpg')",
                    }}
                  >
                    <h2
                      className="text-white"
                      style={{ textShadow: "2px 2px 4px #000000" }}
                    >
                      Sinigang na Lechon Kawali
                    </h2>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <div
                    className="menu-recipe mt-2 mb-2"
                    style={{
                      backgroundImage:
                        "url('/assets/img/recipe/rice-with-basil-minced-pork.jpg')",
                    }}
                  >
                    <h2
                      className="text-white"
                      style={{ textShadow: "2px 2px 4px #000000" }}
                    >
                      Rice With Basil Minced Pork
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ex3-tabs-2"
              role="tabpanel"
              aria-labelledby="ex3-tab-2"
            >
              Tab 2 content
            </div>
            <div
              className="tab-pane fade"
              id="ex3-tabs-3"
              role="tabpanel"
              aria-labelledby="ex3-tab-3"
            >
              Tab 3 content
            </div>
          </div>
        </div>
        {/* <!-- Start of tabs content --> */}
      </section>
      {/* <!-- End of recipe profile section --> */}
    </div>
  );
};

export default Profile;

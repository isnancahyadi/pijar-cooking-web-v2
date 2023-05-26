import React from "react";

import "../style/Detail.css";

const Detail = () => {
  return (
    <div className="Detail">
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

      {/* <!-- Start of section --> */}
      <section id="content">
        <div className="container-fluid">
          <h1 className="text-center text-primary-emphasis">
            Chicken Green Curry Bowl
          </h1>
          <div className="d-flex justify-content-center">
            <img
              src="/assets/img/recipe/chicken-green-curry-bowl.jpg"
              className="main-image"
            />
          </div>
          <div className="container">
            <div className="row mt-5 justify-content-md-center">
              <div className="col-6">
                <h2 className="mb-3">Ingredients</h2>
                <ul className="fs-5">
                  <li>400 grams chicken fillet</li>
                  <li>1 cup brown basmati rice</li>
                  <li>1/2 red bell pepper</li>
                  <li>1/2 onion</li>
                  <li>1 cup mushroom</li>
                  <li>1 carrot</li>
                  <li>1 head broccoli</li>
                  <li>2 table spoon fresh basil</li>
                  <li>1/2 cup canned whole baby corn</li>
                  <li>1 cup unsweetened plant-based milk</li>
                  <li>1,5 table spoon maple syrup</li>
                  <li>2 tea spoon curry paste</li>
                  <li>1/2 tea spoon coconut extract (optional)</li>
                </ul>
              </div>
              <div className="col-6">
                <h2 className="mb-3">Directions</h2>
                <ul className="fs-5">
                  <li>
                    Cook the rice. Add the dry rice to a pot. You will need
                    twice as much water as rice. Add water to the pot, cover,
                    and bring to a boil over medium-high heat. Reduce heat to
                    low and simmer for 35-45 minutes or until the water is
                    absorbed and the rice is soft. Check on the rice
                    periodically to prevent any sticking or burning on the
                    bottom. Remove from the heat, fluff with a fork, set aside.
                    Looking for a faster option? Cook in a rice cooker or just
                    use pre-cooked/frozen rice
                  </li>
                  <li>
                    Produce prep: Wash the produce and pat dry. Slice onion,
                    mushrooms, and carrots. Chop broccoli into florets. De-seed
                    and dice red pepper. Finely chop basil. Drain and rinse baby
                    corn
                  </li>
                  <li>
                    In a large saute pan over high heat, cook the onion and
                    chicken. Slowly reduce the heat as the onion browns,
                    stirring continuously
                  </li>
                  <li>
                    Add the mushrooms, broccoli, red pepper, carrots, and baby
                    corn. Cover and cook until their colors turn bright and they
                    still have snap/crunch
                  </li>
                  <li>
                    In a saucepan over medium-high heat, combine the non-dairy
                    milk, coconut extract (if using), maple syrup, and curry
                    paste. Stir until warm and well combined
                  </li>
                  <li>
                    Pour over the cooked vegetables and serve with the brown
                    basmati rice and garnish with basil
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <h2 className="mt-5 mb-3">Video Directions</h2>
            <iframe
              className="video-directions"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LIbKVpBQKJI"
              title="How to Make - Chicken Green Curry Bowl"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* <!-- End of section --> */}

      {/* <!-- start of footer --> */}
      <footer className="main-footer" style={{ position: "relative" }}>
        <div>
          <h2 className="text-primary-emphasis text-center">
            Eat, Cook, Repeat
          </h2>
          <p className="text-muted text-center">
            Share your best recipe by uploading here !
          </p>
        </div>
        <p className="footer-copyright text-center">
          Copyright &copy; 2023 <br />
          Dev By{" "}
          <a href="https://github.com/isnancahyadi">Isnan Arif Cahyadi</a>
        </p>
      </footer>
      {/* <!-- end of footer --> */}
    </div>
  );
};

export default Detail;

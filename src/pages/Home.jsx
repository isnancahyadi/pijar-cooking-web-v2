import "../style/Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className="Home">
      {/* <!-- Start of header --> */}
      <header id="header">
        <nav
          className="navbar navbar-expand-lg"
          // style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
        >
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

      {/* <!-- Start of home section --> */}
      <section id="home" className="container-fluid">
        <div className="row align-items-center">
          <div className="main-title col-md-6 col-xs-12 order-2 order-md-1 text-md-start text-xs-start">
            <h1 className="text-primary-emphasis">
              Discover Recipe <br />& Delicious Food
            </h1>
            <div className="search mb-3 mt-3">
              <FontAwesomeIcon
                className="ic"
                icon="magnifying-glass"
                size="lg"
              />
              <input
                className="form-control form-control-lg"
                placeholder="Search Restaurant, Food"
              />
            </div>
          </div>
          <div className="main-img col-md-6 order-1 order-md-2 d-flex justify-content-end">
            <img
              className="menu-recipe"
              src="/assets/img/recipe/chicken-green-curry-bowl.jpg"
            />
          </div>
        </div>
        <div className="bg-purple-decoration"></div>
      </section>
      {/* <!-- End of home section --> */}

      {/* <!-- Start of recomended recipe section --> */}
      <section
        id="recomended"
        className="container-fluid"
        style={{ paddingTop: "100px", paddingBottom: "50px" }}
      >
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="bg-purple-decoration-2"></div>
          </div>
          <div className="col-auto">
            <h2 className="text-primary-emphasis">Popular For You !</h2>
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-md-6 text-md-start text-center">
            <img
              className="menu-recipe"
              src="/assets/img/recipe/american-shrimp-fried-rice-with-chili-fish-sauce.jpg"
            />
            <div className="bg-purple-decoration-3"></div>
          </div>
          <div className="recomended-title col-md-6 text-md-start text-center">
            <h1 className="text-primary-emphasis">
              American Shrimp <br />
              Fried Rice
            </h1>
            <hr className="solid" style={{ borderTop: "2px solid" }} />
            <p className="text-muted fs-5">
              Want to try a simple menu with a western style and a little taste
              of the sea? Here's the answer
            </p>
            <form action="#">
              <button id="btn" className="btn btn-primary mt-3">
                Learn More
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- End of recomended recipe section --> */}

      {/* <!-- Start of new recipe section --> */}
      <section
        id="new-recipe"
        className="container-fluid"
        style={{ paddingTop: "150px", paddingBottom: "50px" }}
      >
        <div className="row align-items-center mt-5">
          <div className="new-recipe-title col-md-6 text-md-start text-center">
            <div className="row text-new-recipe">
              <div className="col-auto">
                <div className="bg-purple-decoration-5"></div>
              </div>
              <div className="col-auto">
                <h2 className="text-primary-emphasis">New Recipe</h2>
              </div>
              <div className="col-auto">
                <div className="bg-purple-decoration-5"></div>
              </div>
            </div>
            <h1 className="text-primary-emphasis">
              Chicken Curry with <br />
              Rice Noodles
            </h1>
            <hr className="solid" style={{ borderTop: "2px solid" }} />
            <p className="text-muted fs-5">
              Already come! New recipes with Asian flavors that are suitable for
              everyone. Want to try it?
            </p>
            <form action="#">
              <button id="btn" className="btn btn-primary mt-3">
                Learn More
              </button>
            </form>
          </div>
          <div className="col-md-6 text-md-start text-center">
            <img
              className="menu-recipe"
              src="/assets/img/recipe/chicken-curry-black-cup-with-rice-noodles.jpg"
            />
            <div className="bg-purple-decoration-4"></div>
          </div>
        </div>
      </section>
      {/* <!-- End of new recipe section --> */}

      {/* <!-- Start of popular recipe section --> */}
      <section
        id="popular-recipe"
        className="container-fluid"
        style={{ paddingTop: "150px", paddingBottom: "50px" }}
      >
        <div className="row align-items-center justify-content-center mb-5">
          <div className="col-auto">
            <FontAwesomeIcon
              icon="star"
              size="lg"
              style={{ color: "rgb(215, 154, 255)" }}
            />
            <FontAwesomeIcon
              icon="star"
              size="xl"
              style={{ color: "rgb(215, 154, 255)" }}
            />
            <FontAwesomeIcon
              icon="star"
              size="2xl"
              style={{ color: "rgb(215, 154, 255)" }}
            />
          </div>
          <div className="col-auto">
            <h2 className="text-primary-emphasis">Popular Recipe</h2>
          </div>
          <div className="col-auto">
            <FontAwesomeIcon
              icon="star"
              size="2xl"
              style={{ color: "rgb(215, 154, 255)" }}
            />
            <FontAwesomeIcon
              icon="star"
              size="xl"
              style={{ color: "rgb(215, 154, 255)" }}
            />
            <FontAwesomeIcon
              icon="star"
              size="lg"
              style={{ color: "rgb(215, 154, 255)" }}
            />
          </div>
        </div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/img/recipe/spicy-fried-tubtim-fish-salad-spicy.jpg"
                className="d-block w-100 menu-recipe"
              />
              <div className="carousel-caption d-block">
                <h2 style={{ textShadow: "2px 2px 4px #000000" }}>
                  Spicy Fried Tubtim Fish Salad Spicy
                </h2>
                <p
                  className="fs-5"
                  style={{ textShadow: "2px 2px 4px #000000" }}
                >
                  For those of you who want to enjoy protein and nutritious
                  dishes with a spicy sensation
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/img/recipe/sinigang-na-lechon-kawali.jpg"
                className="d-block w-100 menu-recipe"
              />
              <div className="carousel-caption d-block">
                <h2 style={{ textShadow: "2px 2px 4px #000000" }}>
                  Sinigang na Lechon Kawali
                </h2>
                <p
                  className="fs-5"
                  style={{ textShadow: "2px 2px 4px #000000" }}
                >
                  A typical Filipino dish made from pork that is fried using
                  flour and then combined with soup
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/img/recipe/penne-pasta-tomato-sauce-with-chicken-tomatoes.jpg"
                className="d-block w-100 menu-recipe"
              />
              <div className="carousel-caption d-block">
                <h2 style={{ textShadow: "2px 2px 4px #000000" }}>
                  Penne Pasta Tomato Sauce with Chicken
                </h2>
                <p
                  className="fs-5"
                  style={{ textShadow: "2px 2px 4px #000000" }}
                >
                  A pasta from Italy cooked with tomato sauce and sliced chicken
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* <!-- End of popular recipe section --> */}

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
}

export default Home;

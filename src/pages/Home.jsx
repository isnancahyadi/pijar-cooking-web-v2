import React from "react";

import "../style/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />

      {/* <!-- Start of home section --> */}
      <section id="home" className="container-fluid">
        <div className="row align-items-center">
          <div className="main-title col-md-6 col-xs-12 order-2 order-md-1 text-md-start text-xs-start">
            <h1 className="h1-home text-primary-emphasis">
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
            <h2 className="h2-home text-primary-emphasis">Popular For You !</h2>
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-md-6 text-md-start text-center">
            <img
              className="menu-recipe"
              src="/assets/img/recipe/chinese-shrimp-fried-rice-with-chili-fish-sauce.jpg"
            />
            <div className="bg-purple-decoration-3"></div>
          </div>
          <div className="recomended-title col-md-6 text-md-start text-center">
            <h1 className="h1-home text-primary-emphasis">
              American Shrimp <br />
              Fried Rice
            </h1>
            <hr className="hr-home solid" style={{ borderTop: "2px solid" }} />
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
        style={{ paddingTop: "100px", paddingBottom: "50px" }}
      >
        <div className="row align-items-center mt-5">
          <div className="new-recipe-title col-md-6 order-2 order-md-1 text-md-start text-center">
            <div className="row text-new-recipe">
              <div className="col-auto">
                <div className="bg-purple-decoration-5"></div>
              </div>
              <div className="col-auto">
                <h2 className="h2-home text-primary-emphasis">New Recipe</h2>
              </div>
              <div className="col-auto">
                <div className="bg-purple-decoration-5"></div>
              </div>
            </div>
            <h1 className="h1-home text-primary-emphasis">
              Chicken Curry with <br />
              Rice Noodles
            </h1>
            <hr className="hr-home solid" style={{ borderTop: "2px solid" }} />
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
          <div className="col-md-6 order-1 order-md-2 text-md-start text-center">
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
        style={{ paddingTop: "100px", paddingBottom: "50px" }}
      >
        <div className="row align-items-center justify-content-center mb-5">
          <div className="col-auto">
            <FontAwesomeIcon
              className="ic-star"
              icon="star"
              size="lg"
              style={{ color: "rgb(215, 154, 255)" }}
            />
            <FontAwesomeIcon
              className="ic-star"
              icon="star"
              size="xl"
              style={{ color: "rgb(215, 154, 255)" }}
            />
            <FontAwesomeIcon
              className="ic-star"
              icon="star"
              size="2xl"
              style={{ color: "rgb(215, 154, 255)" }}
            />
          </div>
          <div className="col-auto">
            <h2 className="h2-home text-primary-emphasis">Popular Recipe</h2>
          </div>
          <div className="col-auto">
            <FontAwesomeIcon
              className="ic-star"
              icon="star"
              size="2xl"
              style={{ color: "rgb(215, 154, 255)" }}
            />
            <FontAwesomeIcon
              className="ic-star"
              icon="star"
              size="xl"
              style={{ color: "rgb(215, 154, 255)" }}
            />
            <FontAwesomeIcon
              className="ic-star"
              icon="star"
              size="lg"
              style={{ color: "rgb(215, 154, 255)" }}
            />
          </div>
        </div>
        <Carousel />
      </section>
      {/* <!-- End of popular recipe section --> */}

      <Footer />
    </div>
  );
};

export default Home;

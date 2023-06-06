import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../style/Detail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Detail = () => {
  const location = useLocation();
  const [currentRecipe, setCurrentRecipe] = React.useState(null);
  const id = location?.search?.split("?")[1];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Detail Recipe";
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/recipe/${id}`)
      .then((response) => setCurrentRecipe(response?.data?.payload[0]));
  });

  return (
    <div className="Detail">
      <Navbar />

      {/* <!-- Start of section --> */}
      <section id="content">
        <div className="container-fluid">
          <h1 className="text-center text-primary-emphasis">
            {currentRecipe?.title}
          </h1>
          <div className="d-flex justify-content-center animate__animated animate__fadeIn">
            <img src={`${currentRecipe?.image}`} className="main-image" />
          </div>
          <div className="container animate__animated animate__fadeIn">
            <div className="row mt-5 justify-content-md-center">
              <div className="col-6">
                <h2 className="h2-detail mb-3">Ingredients</h2>
                <ul className="fs-5">
                  {currentRecipe?.ingredients?.split(", ").map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="col-6">
                <h2 className="h2-detail mb-3">Directions</h2>
                <ul className="fs-5">
                  {currentRecipe?.direction?.split("; ").map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="container animate__animated animate__fadeIn">
            <h2 className="h2-detail mt-5 mb-3">Video Directions</h2>
            <iframe
              className="video-directions"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${
                currentRecipe?.video?.split("=")[1]
              }`}
              title={`How to Make - ${currentRecipe?.title}`}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* <!-- End of section --> */}

      <Footer />
    </div>
  );
};

export default Detail;
